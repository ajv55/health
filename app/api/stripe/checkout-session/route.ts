import {NextRequest, NextResponse} from 'next/server';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { options } from '../../auth/[...nextauth]/option';

export async function POST(req: NextRequest){
    const body = await req.json();
    console.log(body?.amount)
    

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2024-04-10'});

    const session = await getServerSession(options);

    console.log(session?.user?.stripeCustomerId)

    if(!session?.user){
        return NextResponse.json({error: {code: 'no access', message: 'You are not sign in!'}, status: 401})
    }

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        customer: session?.user?.stripeCustomerId,
        line_items: [{
            price: body?.amount,
            quantity: 1,
        }],
        success_url: process.env.URL + '/dashboard',
        cancel_url: process.env.URL,
        subscription_data: {
            metadata: {
                payingUserId: session?.user?.id
            }
        }
    });

    if(!checkoutSession.url) {
        return NextResponse.json({error: {code: 'stripe-error', message: 'Could not create checkout session'}, status: 500})
    }

    return NextResponse.json({session: checkoutSession, status: 200})
}