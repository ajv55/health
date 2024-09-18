import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){

    const body = await req.json();

    const {planId, updatedPlan} = body;

    console.log(planId)
    console.log(updatedPlan)

    try {

        // Find the existing exercise plan
        const plan = await prisma.exercisePlan.update({
            where: { id: planId },
            data: {
                exercisePlan: updatedPlan
            }
        });
    
        if (!plan) {
            return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
        }

        console.log(plan)




        return NextResponse.json(plan, {status: 201})
    } catch (error) {
        console.error('Error updating exercise:', error);
        return NextResponse.json({ error: 'Failed to update exercise' }, { status: 500 });
    }
    

    
}