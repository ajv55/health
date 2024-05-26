import type { NextAuthOptions, Session, User } from "next-auth"; 
import prisma from "@/app/libs/prismadb";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt';
import { JWT } from "next-auth/jwt";
import Stripe from 'stripe';


export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECERT!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECERT as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'example@mail.com'},
                password: {label: 'Password', type: 'password', placeholder: 'Enter Password' },
            },
            async authorize(credentials) {

                //check to see if email and password is in the database
                if(!credentials?.email || !credentials.password) {
                    throw new Error('Please enter an email and password.')
                }

                //check to see if user exist
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                //if no user was found
                if (!user || !user?.hashedPassword){
                    throw new Error('No user found')
                }

                // check to see if password match when user is found
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                if(!passwordMatch) {
                    throw new Error('Incorret Password')
                }

                return user


            }
        })

    ],
    callbacks: {
        jwt: async ({token, user, session, trigger}: {token: JWT, user?:  any , session?: any, trigger?: any}): Promise<any>  => {
           if (trigger === 'update' && session?.calories) {
            token.calories = session.calories
           }
           if(trigger === 'update' && session?.stripeCustomerId){
            token.stripeCustomerId = session.stripeCustomerId
           }
           if(trigger === 'update' && session?.weight){
            token.weight = session.weight
           }
           if(trigger === 'update' && session?.age){
            token.age = session.age
           }
           if(trigger === 'update' && session?.name){
            token.name = session.name
           }
           if(trigger === 'update' && session?.password){
            token.password = session.password
           }
           
           console.log('token: ' , token)
           console.log('user: ' , user)
           

           // passing in user id, calories, height, weight, age, and gender to token
           if(user) {
            console.log('user: ' , user)
            return {
                ...token, 
                id: user?.id,
                calories: user?.calories,
                age: user?.age,
                weight: user?.weightInLbs,
                height: user?.heightInInches,
                gender: user?.gender,
                activity: user?.TDEE,
                isActive: user?.isActive,
                stripeCustomerId: user?.stripeCustomerId,
                password: user?.hashedPassword


            }
        }

        //updating the user info on the database
         await prisma.user.update({
            where: {
                id: token.id as string
            },
            data: {
                calories: token.calories as string,
                stripeCustomerId: token.stripeCustomerId as string,
                age: token?.age as string,
                weightInLbs: token?.weight as string,
                name: token?.name as string
            }
        });

        
            return token
        },
        session: async ({session, token, user}): Promise<any> => {
        
    
            // adding the users age, weight, height, gender, caloires, and id through the token on the session
            return {
                ...session, 
                user: {
                    ...session.user,
                   age: token?.age,
                   weight: token?.weight,
                   id: token?.id,
                   calories: token?.calories,
                   height: token?.height,
                   gender: token?.gender,
                   activity: token?.activity,
                   isActive: token?.isActive,
                   password: token?.password,
                   stripeCustomerId: token?.stripeCustomerId
                }
            };

        }
    },
    secret: process.env.NEXTAUTH_SECERT as string,
    session: {
        strategy: 'jwt'
    },
    pages:{
        signIn: '/login',
        error: '/',
    },
    debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(options)

export {handler as GET, handler as POST};