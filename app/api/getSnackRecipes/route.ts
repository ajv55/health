import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    
    const res = await prisma.snackRecipes.findFirst();

    const snackRecipes = JSON.parse(res?.snackRecipes!)

    return NextResponse.json(snackRecipes, {status: 201})
}