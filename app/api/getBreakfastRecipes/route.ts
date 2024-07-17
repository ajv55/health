import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.breakfastRecipes.findFirst();

    const breakfastRecipe = JSON.parse(res?.breakfastRecipes!)

    return NextResponse.json(breakfastRecipe, {status: 201})
}