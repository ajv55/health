import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { addDays, startOfDay } from "date-fns";

export async function GET(req: NextRequest) {

  const searchParams = await req.nextUrl.searchParams;
  const days = parseInt(searchParams.get('days') || '7', 10);

  const currentDate = new Date();
  const daysAgo = addDays(startOfDay(currentDate), -days + 1); // Calculate 7 days ago

  const breakfastLogs = await prisma.mealLog.findMany({
    where: {
      createdAt: {
        gte: daysAgo,
      },
    },
  });

  const lunchLogs = await prisma.lunchLog.findMany({
    where: {
      createdAt: {
        gte: daysAgo,
      },
    },
  });

  const dinnerLogs = await prisma.dinnerLog.findMany({
    where: {
      createdAt: {
        gte: daysAgo,
      },
    },
  });

  const snackLogs = await prisma.snackLog.findMany({
    where: {
      createdAt: {
        gte: daysAgo,
      },
    },
  });

   // Combine all logs
   const allLogs = [...breakfastLogs, ...lunchLogs, ...dinnerLogs, ...snackLogs];

   // Calculate total and average grams of carbs, protein, and fat consumed in the last 7 days
   const totalCarbs = calculateTotalGrams(allLogs, 'carbs');
   const totalProtein = calculateTotalGrams(allLogs, 'protein');
   const totalFat = calculateTotalGrams(allLogs, 'fat');
 
   const averageCarbs = totalCarbs.grams / 7;
   const averageProtein = totalProtein.grams / 7;
   const averageFat = totalFat.grams / 7;

  // Calculate total calories from macros
  const totalCalories = totalCarbs.calories + totalProtein.calories + totalFat.calories;

  // Calculate percentages of calories from each macronutrient
  const carbPercentage = (totalCarbs.calories / totalCalories) * 100;
  const proteinPercentage = (totalProtein.calories / totalCalories) * 100;
  const fatPercentage = (totalFat.calories / totalCalories) * 100;


  return NextResponse.json({ carbPercentage, proteinPercentage, fatPercentage, averageCarbs, averageProtein, averageFat }, { status: 201 });
}

function calculateTotalGrams(logs: any, macro: any) {
  const totalGrams = logs.reduce((total: any, log: any) => total + log[macro], 0);
  const calories = totalGrams * 4; // Assuming 4 calories per gram for carbs and protein, 9 for fat
  return { grams: totalGrams, calories };
}
