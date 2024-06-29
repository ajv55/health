import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.proteinHighFoods.findFirst();

    const protein = JSON.parse(res?.proteinFoods!);


    return NextResponse.json(protein, {status: 201})
}