import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/option";


export async function GET() {

    const res = await prisma.snackFoods.findFirst();

    const lunch = JSON.parse(res?.snack!)

    return NextResponse.json(lunch, {status: 201})
}