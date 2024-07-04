"use server"

import {z} from "zod"
import NextAuth, { AuthError, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthConfig } from '@/app/auth.config';
import axios, { AxiosResponse } from "axios";

import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
    } & DefaultSession['user'];
  }

  interface User {
    accessToken: string;
  }
}

let authURL = process.env.NEXT_PUBLIC_AUTH_URL
async function getUser(username: string,password:string, accessToken : string): Promise<User | undefined> {
  let credentials = {
    username : username,
    password : password
  }
  try {
    const response : AxiosResponse<User> = await axios.post(`${authURL}/api/v1/User/Login`, credentials);
    return response?.data;
} catch (error : any) {
    throw new Error("Failed to authenticate user.")
}
}

 //authenticate
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {

          return 'Invalid Credentials.';

    }
    throw error;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...AuthConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6), accessToken : z.string() })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password , accessToken } = parsedCredentials.data;
          const user = await getUser(username, password, accessToken);
          if (!user)
             return null;

          console.log("User => ", user)
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: user.accessToken 
          };
        }

        console.log('Invalid credentials')
 
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },

});

//Logout 

import { signOut as signOutAction } from '@/app/_lib/actions/auth';

export const logOut = async () => {
    await signOutAction();
};