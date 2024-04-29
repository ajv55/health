import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest){

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('mealId');

  try {
    // Delete the meal from the database
     const res = await prisma.calorieIntake.delete({
      where: {
        id: id as string, // Assuming mealId is a string
      },
    });

    console.log(res)

    return NextResponse.json({res}) // No content response for successful deletion
  } catch (error) {
    console.error('Error deleting meal:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}