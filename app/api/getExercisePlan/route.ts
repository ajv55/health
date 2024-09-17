import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { startOfDay, endOfDay } from 'date-fns';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "User is not authenticated" }, { status: 401 });
    }

    // Get today's date
    const todayStart = startOfDay(new Date());
    const todayEnd = endOfDay(new Date());

    // Find the exercise plan generated today for the user
    const exercisePlan = await prisma.exercisePlan.findFirst({
      where: {
        userId: session.user.id,
        createdAt: {
          gte: todayStart, // Greater than or equal to the start of the day
          lte: todayEnd,   // Less than or equal to the end of the day
        },
      },
    });

    if (!exercisePlan) {
      return NextResponse.json({ message: "No exercise plan for today" }, { status: 404 });
    }

    // Return the exercise plan if it exists for today
    return NextResponse.json(exercisePlan, { status: 201 });
  } catch (error) {
    console.error("Error fetching today's exercise plan:", error);
    return NextResponse.json({ error: "Failed to fetch exercise plan" }, { status: 500 });
  }
}
