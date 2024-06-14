import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {

    const session = await getServerSession(authOptions);

    const today = new Date(); 
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); 

    // Aggregate to get the sum of steps
    const totalSteps = await prisma.stepLog.aggregate({
        _sum: {
            steps: true,
        },
        where: {
            userId: session?.user.id,
            createdAt: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    });

    return NextResponse.json({ totalSteps: totalSteps._sum.steps || 0 }, {status: 201})
}