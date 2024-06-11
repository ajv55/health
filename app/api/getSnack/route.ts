import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export  async function GET(){

    const res = await prisma.snackFoods.findFirst();

    const snack = JSON.parse(res?.snack!);

    return NextResponse.json(snack, {status: 201})
}