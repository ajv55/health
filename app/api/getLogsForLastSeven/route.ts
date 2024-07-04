import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate.setDate(currentDate.getDate() - 10));

    const breakfastLogs = await prisma.mealLog.findMany({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
          calories: {
            gt: 300, // Adjust this threshold as per your definition of "too much calories"
          },
        },
      });
  
      const lunchLogs = await prisma.lunchLog.findMany({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
          calories: {
            gt: 300,
          },
        },
      });
  
      const dinnerLogs = await prisma.dinnerLog.findMany({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
          calories: {
            gt: 300,
          },
        },
      });
  
      const snackLogs = await prisma.snackLog.findMany({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
          calories: {
            gt: 300,
          },
        },
      });

    return NextResponse.json({breakfastLogs, lunchLogs, dinnerLogs, snackLogs}, {status: 201})
}