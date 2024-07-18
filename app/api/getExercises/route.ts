import prisma from "@/app/libs/prismadb";
import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.exercises.findFirst();

    const exercises = JSON.parse(res?.exercises!)

    return NextResponse.json(exercises, {status: 201})
}