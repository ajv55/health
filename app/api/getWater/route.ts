import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";
import { format } from "date-fns";


export async function GET() {
    const session = await getServerSession(authOptions);

    try {
        

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

    if(res.length === 0) {
        return NextResponse.json({error: 'no water intake of this day add yet'}, {status: 401})
    }

    // Map response to include formatted time
    const waterIntakeData = res.map((record: any) => ({
        date: format(new Date(record?.date), "hh:mm a"), // Format date to display time
        amount: record.amount
    }));


    const addWater = res.map((r) => r.amount).reduce((acc, currentValue) => acc! + currentValue!) ?? 0;

    return NextResponse.json({waterIntakeData ,addWater, hasRecords: res.length > 0, status: 201})
        
    } catch (error) {
        console.error('Error fetching water intake records:', error);
        return NextResponse.json({error: 'Error fetching water intake records'}, {status: 500});
    }
}