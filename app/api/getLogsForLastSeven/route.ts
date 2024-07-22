import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {

  const session = await getServerSession(authOptions)

    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate.setDate(currentDate.getDate() - 10));

    const breakfastLogs = await prisma.mealLog.findMany({
        where: {
          userId: session?.user.id,
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
          userId: session?.user.id,
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
          userId: session?.user.id,
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
          userId: session?.user.id,
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