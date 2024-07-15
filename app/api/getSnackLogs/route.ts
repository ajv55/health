import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/option";


export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);
    const searchParams = await req.nextUrl.searchParams;
    const currentDate = searchParams.get('currentDate') || new Date();

    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999); 

    const meals = await prisma.snackLog.findMany({
        where: {userId: session?.user.id,
            createdAt: {
                gte: startOfDay,
                lte: endOfDay
            }
         }
    });


    return NextResponse.json(meals, {status: 201})
}