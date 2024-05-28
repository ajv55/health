import Stripe from "stripe";
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-04-10' });
const webhookSecret: string = process.env.STRIPE_WEBHOOK_KEY!;

const webhookHandler = async (req: NextRequest) => {
    try {
        const buf = await req.text();
        const sig = req.headers.get("stripe-signature")!;
    
        let event: Stripe.Event;
        
        // Rest of the code goes here 
        try {
            event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error";
            // On error, log and return the error message.
            if (!(err instanceof Error)) console.log(err);
            console.log(`❌ Error message: ${errorMessage}`);
        
            return NextResponse.json(
                {
                error: {
                    message: `Webhook Error: ${errorMessage}`,
                },
                },
                { status: 400 }
            );
        }

        // Log the event type
        console.log(`🔔 Event received: ${event.type}`);
        
        // Getting the data we want from the event
const subscription = event.data.object as Stripe.Subscription;

// Log the subscription object


const stripeCustomerId = subscription.customer as string;
const subscriptionId = subscription?.id as string;
console.log(subscriptionId);

let isActive = false;
switch (event.type) {
    case "customer.subscription.created":
             isActive = true;
             const user = await prisma.user.update({
                where: {stripeCustomerId: stripeCustomerId},
                data: {
                    isActive: isActive,
                    subscriptionId: subscriptionId
                }
            });
            console.log(user)
        break;
    case "customer.subscription.deleted":
        isActive = false;
       const bye =  await prisma.user.update({
            where: {stripeCustomerId: stripeCustomerId},
            data: {
                isActive: isActive,
                subscriptionId: ''
            }
        });
        console.log(bye)
        break;
    default:
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        break;
}
   console.log(`User with Stripe Customer ID ${stripeCustomerId} updated to isActive=${isActive}`);

         // Call the update session endpoint
         const updateSessionRes = await fetch(`/api/updateIsActive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stripeCustomerId, subscriptionId })
        });

        const updateSessionData = await updateSessionRes.json();
        console.log('Session updated:', updateSessionData);  
    
        // Return a response to acknowledge receipt of the event.
        return NextResponse.json({ received: true });
    } catch {
        // If an error occurs
        return NextResponse.json(
            {
                error: {
                    message: `Method Not Allowed`,
                },
            },
            { status: 405 }
        ).headers.set("Allow", "POST");
    }
}

export { webhookHandler as POST };
