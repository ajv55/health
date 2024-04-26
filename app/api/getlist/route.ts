import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

    const usersList = await prisma.calorieIntakeRecord.findMany();
    const ids = usersList.map((u) => u.id);

    return NextResponse.json({usersList})
}