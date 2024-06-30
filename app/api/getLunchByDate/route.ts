import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/option";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);

    // Extract the date parameter from the query string
    const url = new URL(request.url);
    const date = url.searchParams.get('date');

    const today = date ? new Date(date) : new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const meals = await prisma.lunchLog.findMany({
        where: {
            userId: session?.user.id,
            createdAt: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    });

    return NextResponse.json(meals, { status: 201 });
}
