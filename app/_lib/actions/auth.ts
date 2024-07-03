"use server"

import {z} from "zod"
import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/app/auth.config';
import type { User } from '@/app/_lib/definitions';


let users = {id:"1",name:"Abraham",userId:"33125",password:"Abcd@1234"}

async function getUser(userId: string,password:string): Promise<User | undefined> {
  try {
    if(userId === users.userId && password === users.password){
      console.log("Hello Errors",userId,password)
      return users
    }

  } catch (error) {
    throw new Error('Failed to fetch user.');
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
          .object({ userId: z.string(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { userId, password } = parsedCredentials.data;
          const user = await getUser(userId,password);
          if (!user) return null;
          return user;
        }

        console.log('Invalid credentials')
 
        return null;
      },
    }),
  ],
});