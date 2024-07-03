"use server"

import {z} from "zod"
import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/app/auth.config';
import type { User } from '@/app/_lib/definitions';
import axios, { AxiosResponse } from "axios";


// let users = {id:"1",name:"Abraham",username:"33125",password:"Abcd@1234"}
let authURL = process.env.NEXT_PUBLIC_AUTH_URL
async function getUser(username: string,password:string, accessToken : string): Promise<User | undefined> {
  let credentials = {
    username : username,
    password : password
  }
  try {
    const response : AxiosResponse<User> = await axios.post(`${authURL}/api/v1/User/Login`, credentials
      ,{
       headers: {
          accessToken : accessToken
    }
  }
);
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
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6), accessToken : z.string() })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password , accessToken } = parsedCredentials.data;
          const user = await getUser(username, password, accessToken);
          if (user)
             return user;
          return null;
        }

        console.log('Invalid credentials')
 
        return null;
      },
    }),
  ],
});

//Logout 

import { signOut as signOutAction } from '@/app/_lib/actions/auth';

export const logOut = async () => {
    await signOutAction();
};