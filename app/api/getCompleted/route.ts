import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";


export async function GET() {

    const session = await getServerSession(options)


    const today = new Date(); 
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); 

    const res = await prisma.completedChallenges.findMany({
        where: {
            userId: session?.user?.id,
            completedAt: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    })

    return NextResponse.json({res})
}