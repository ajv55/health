import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";
import {format} from 'date-fns';


export async function GET() {
    const session = await getServerSession(options);

    if(!session) {
        return new NextResponse('No session found', {status: 403})
    }


    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);  // Set time to 23:59:59.999 for the end of the day

    const data = await prisma.calorieIntake.findMany({
        where: {
            userId: session?.user?.id,
            date: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    })

    const dailyCalories = data?.map((d) => d?.totalCalories);
    const cal = dailyCalories?.reduce((acc, currentValue) => acc! + currentValue!)

    console.log(cal)


    return NextResponse.json({cal})
}