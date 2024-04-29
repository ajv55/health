import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    
    const res = await prisma.exerciseChallenges.findMany();
    const challenges = res[0]?.challenges
    const data = JSON.parse(challenges as string)

    return NextResponse.json({data})
}