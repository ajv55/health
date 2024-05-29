import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET() {

    const session = await getServerSession(authOptions)


    const res = await prisma.dailyChallenges.findMany();

    

    console.log(res.length)

    return NextResponse.json({res})
}