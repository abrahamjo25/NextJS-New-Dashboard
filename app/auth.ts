import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/_lib/definitions';
 
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

        console.log('Invalid credentials')
 
        return null;
      },
    }),
  ],
});