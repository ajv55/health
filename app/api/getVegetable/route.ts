import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.vegetables.findMany();
    const jsonVegetable = JSON.parse(res[0]?.Vegetables!);
    const veg = JSON.parse(jsonVegetable)

    return NextResponse.json({veg})
}