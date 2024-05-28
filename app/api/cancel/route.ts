import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import Stripe from 'stripe';
import { error } from "console";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10'
})

export async function POST(req: NextRequest) {

    const body = await req.json();
    const {subId} = body;

    if(!subId) {
        return NextResponse.json({error: 'Subscription Id is required or missing', status: 401})
    }

    try {

        // Cancel the subscription using stripe api 
        const deletedSubscription = await stripe.subscriptions.cancel(subId);

        return NextResponse.json({deletedSubscription, status: 200})
    } catch (error) {
       console.log(error) 
       return NextResponse.json({error: 'error occured when trying to cancel subscriptions', status: 500})
    }
}