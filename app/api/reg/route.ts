import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2024-04-10'});



export async function POST(req: NextRequest) {
    const body =  await req.json();
    const {name, email, password, age, weightInLbs, heightInInches, gender, agree, TDEE, goal } = body;




    if(!name || !email || !password || !age || !weightInLbs || !heightInInches || !gender || !agree || !TDEE || !goal) {
        return new NextResponse('Missing Fields', {status: 400, statusText: 'Missing Fields'})
    }
    
    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });


    if (exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(body);



    const user = await prisma.user.create({
        data: {
            name: name,
            email: email, 
            hashedPassword: hashedPassword,
            age: age,
            weightInLbs: weightInLbs,
            heightInInches: heightInInches,
            gender: gender,
            TDEE: TDEE,
            goal: goal

        }
    })

    try {


        

        // Create a Stripe customer
        const customer = await stripe.customers.create({
            email: user.email!,
            name: user.name!
        });

        // Update the user with the stripeCustomerId
        await prisma.user.update({
            where: { id: user.id },
            data: {
                stripeCustomerId: customer.id
            }
        });

        console.log('Stripe customer created successfully:', customer);
        return  NextResponse.json(user, {status: 201})
    } catch (error) {
        console.error('Error creating Stripe customer:', error);
        return new NextResponse('Error creating Stripe customer', { status: 500 });
    }


    

    return NextResponse.json(user)
}

