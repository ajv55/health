import type { NextAuthOptions, Session, User } from "next-auth"; 
import prisma from "@/app/libs/prismadb";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth";
import bcrypt from 'bcrypt';
import { JWT } from "next-auth/jwt";
import Stripe from 'stripe';
import {options} from '@/app/api/auth/[...nextauth]/option';
import { NextApiRequest, NextApiResponse } from "next";


const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export { handler as GET, handler as POST };
export default handler;