import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";


export async function GET() {

    try {
        const session = await getServerSession(options);

    const today = new Date(); // today
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);  

    const res = await prisma.waterIntakeRecord.findMany({
        where: {
            userId: session?.user?.id,
            date: {
                gte: startOfDay,
                lte: endOfDay
            }

        }
    })

    const addWater = res.map((r) => r.amount).reduce((acc, currentValue) => acc! + currentValue!);

    return NextResponse.json({addWater, hasRecords: res.length > 0})
        
    } catch (error) {
        console.error('Error fetching water intake records:', error);
        return NextResponse.json({error: 'Error fetching water intake records'}, {status: 500});
    }
}