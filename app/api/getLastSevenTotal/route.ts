import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions)

    const searchParams = await req.nextUrl.searchParams;
    const startDate = searchParams.get('startDate');
    const days = parseInt(searchParams.get('days') || '7', 10);
    const endDate = searchParams.get('endDate');
    
    console.log('start',startDate)

    try {

         // Convert startDate and endDate to Date objects
         const start = new Date(startDate!);
         const end = new Date(endDate!);
 
         // Ensure the date range is within the selected number of days
         const adjustedStartDate = new Date(end);
         adjustedStartDate.setDate(end.getDate() - days);

        // Fetch logs for each meal type within the specified date range
        const breakfastLogs = await prisma.mealLog.findMany({
            where: {
                userId: session?.user.id,
                createdAt: {
                    gte: adjustedStartDate,
                    lte: end,
                },
            },
        });
        const lunchLogs = await prisma.lunchLog.findMany({
            where: {
                createdAt: {
                    gte: adjustedStartDate,
                    lte: end,
                },
            },
        });
        const dinnerLogs = await prisma.dinnerLog.findMany({
            where: {
                createdAt: {
                    gte: adjustedStartDate,
                    lte: end,
                },
            },
        });
        const snackLogs = await prisma.snackLog.findMany({
            where: {
                createdAt: {
                    gte: adjustedStartDate,
                    lte: end,
                },
            },
        });

        // Calculate total calories for each meal type
        const totalBreakfastCalories = breakfastLogs.reduce((acc, log: any) => acc + log.calories, 0);
        const totalLunchCalories = lunchLogs.reduce((acc, log: any) => acc + log.calories, 0);
        const totalDinnerCalories = dinnerLogs.reduce((acc, log: any) => acc + log.calories, 0);
        const totalSnackCalories = snackLogs.reduce((acc, log: any) => acc + log.calories, 0);

        // Calculate the total calories for the week
        const totalCalories = totalBreakfastCalories + totalLunchCalories + totalDinnerCalories + totalSnackCalories;

        // Calculate the percentage contribution of each meal type to the total calories
        const breakfastPercentage = totalCalories ? (totalBreakfastCalories / totalCalories) * 100 : 0;
        const lunchPercentage = totalCalories ? (totalLunchCalories / totalCalories) * 100 : 0;
        const dinnerPercentage = totalCalories ? (totalDinnerCalories / totalCalories) * 100 : 0;
        const snackPercentage = totalCalories ? (totalSnackCalories / totalCalories) * 100 : 0;

        return NextResponse.json({
            totalCalories,
            totalBreakfastCalories,
            totalLunchCalories,
            totalDinnerCalories,
            totalSnackCalories,
            breakfastPercentage,
            lunchPercentage,
            dinnerPercentage,
            snackPercentage,
        }, { status: 201 });
    } catch (error) {
        console.error("Error fetching meal logs:", error);
        return NextResponse.json({ error: "Failed to fetch meal logs" }, { status: 500 });
    }
}
