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
import {authOptions} from '@/app/api/auth/[...nextauth]/option';


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export default handler;