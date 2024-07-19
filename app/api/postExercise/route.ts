import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    const body = await req.json();

    const { name, caloriesBurned = 0, sets = [{reps: 0, weight: 0}], duration = 0, note = "", icon = 'FaWalking' } = body;
    
    console.log(name, caloriesBurned, sets, duration, note, icon);

    const res = await prisma.exerciseLog.create({
        data: {
            user: { connect: { id: session?.user.id } },
            name,
            caloriesBurned,
            sets,
            duration,
            note,
            icon
        }
    });

    return NextResponse.json(res, { status: 201 });
}
