import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    
    const res = await prisma.lunchRecipes.findFirst();

    const lunchRecipes = JSON.parse(res?.lunchRecipes!)

    return NextResponse.json(lunchRecipes, {status: 201})
}

