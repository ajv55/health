import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export async function GET() {

    const res = await prisma.drinks.findMany();
    const jsonDrink = JSON.parse(res[0]?.Drinks!);
    const drink = JSON.parse(jsonDrink)

    return NextResponse.json({drink})
}