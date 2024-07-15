import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.stapleFoods.findFirst();

    const stapleFoods = JSON.parse(res?.stapleFoods!)

    return NextResponse.json(stapleFoods, {status: 201})
}