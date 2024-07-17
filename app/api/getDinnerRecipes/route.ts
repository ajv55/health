import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.dinnerRecipes.findFirst();

    const dinnerRecipes = JSON.parse(res?.dinnerRecipes!)

    return NextResponse.json(dinnerRecipes, {status: 201})
}