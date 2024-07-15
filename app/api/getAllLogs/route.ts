import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/option";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 5); // Calculate the date 5 days ago

    // Fetch logs from breakfast, lunch, snack, and dinner categories within the date range
    const breakfastLogs = await prisma.mealLog.findMany({
        where: {
            userId: session.user.id,
            createdAt: {
                gte: pastDate,
                lte: currentDate
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 5
    });

    const lunchLogs = await prisma.lunchLog.findMany({
        where: {
            userId: session.user.id,
            createdAt: {
                gte: pastDate,
                lte: currentDate
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 5
    });

    const snackLogs = await prisma.snackLog.findMany({
        where: {
            userId: session.user.id,
            createdAt: {
                gte: pastDate,
                lte: currentDate
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 5
    });

    const dinnerLogs = await prisma.dinnerLog.findMany({
        where: {
            userId: session.user.id,
            createdAt: {
                gte: pastDate,
                lte: currentDate
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 5
    });

    return NextResponse.json({
        breakfast: breakfastLogs,
        lunch: lunchLogs,
        snack: snackLogs,
        dinner: dinnerLogs,
    }, { status: 201 });
}

