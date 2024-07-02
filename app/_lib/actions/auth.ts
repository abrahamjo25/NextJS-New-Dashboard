"use server"

import {z} from "zod"
import { redirect } from "next/navigation"
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/app/auth.config';
import type { User } from '@/app/_lib/definitions';

const LoginForm = z.object({
    userId : z.string().refine((val) => val.trim() !== '', {
      message: 'UserId is required'
    }),
    password : z.string().refine((val) => val.trim() !== '', {
      message: 'Password is required'
    }),
})



export type AuthState={
  errors?:{
      userId?:string[];
      password?:string[];
      
  };
  message?:string | null;
};


let users = {id:"1",name:"Abraham",userId:"33125",password:"Abcd@1234"}
async function getUser(email: string,password:string): Promise<User | undefined> {
  try {
    if(email === users.userId && password === users.password){
      console.log("Hello Errors",email,password)
      return users
    }

  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
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
     
          return null;
        },
      }),
    ],
  });

  
  export async function authenticate(prevState:AuthState, formData:FormData){

    const validatedFields = LoginForm.safeParse({
      userId: formData.get('userId'),
      password: formData.get('password'),
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to login.',
      };
    }
  
      try {
        await signIn('credentials', formData);
      } catch (error) {
        if (error) {
        return {
                  errors : {},
                  message : "Invalid Credentials."
              }
    
        }
        throw error;
      }
  redirect('/dashboard')    
  }