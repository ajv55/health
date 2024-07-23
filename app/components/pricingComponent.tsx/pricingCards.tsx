'use client';
import getStripe from '@/app/utils/getStripe';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import Footer from '../footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import style from '@/app/style.module.css';

export default function PricingCards() {

    const {data: session} = useSession();
    const router = useRouter();

    const handleCreateCheckoutSession = async () => {

        if(!session){
          return  router.push('/reg')
        }

        const price = { amount: 'price_1PHh5b1EGRFj6h8h5bMn0YLh' }; 
        const res = await fetch(`/api/stripe/checkout-session`, {
            method: "POST",
            body: JSON.stringify(price),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const checkoutSession = await res.json().then((value) => {
            return value.session;
        });
        const stripe = await getStripe();
        const {error} = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id
        });
        console.warn(error.message)

    }


  return (
    <div className={`${style.background} mx-w-4xl mx-auto overflow-hidden p-6 relative`}>
        <h1 className="text-6xl font-bold text-center mb-8">Pricing Plans</h1>
        <div className="flex flex-wrap justify-center">

            {/* <!-- Free Plan --> */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg shadow-indigo-900 ring-2 ring-indigo-400 bg-white m-4">
                <div className="px-6 flex flex-col justify-center items-start gap-3 py-4">
                    <div className="font-bold text-indigo-600 text-3xl mb-2">Free Plan</div>
                    <p className="text-gray-700 text-4xl mb-4">$0 / month</p>
                    <p className="text-gray-700 text-lg mb-4">Perfect for those who are just getting started on their fitness journey.</p>
                    <ul className=" list-disc list-inside text-gray-700 text-base mb-4">
                        <li><strong className='text-indigo-600'>Calorie Tracking:</strong> Track your daily calorie intake with ease.</li>
                        <li><strong className='text-indigo-600'>Basic Workout Tracking:</strong> Log your workouts and monitor your progress.</li>
                        <li><strong className='text-indigo-600'>Nutritional Guide:</strong> Access to a common nutritional guide for healthy eating.</li>
                        <li><strong className='text-indigo-600'>Maintenance Calories Calculation:</strong> Get your daily maintenance calories by providing age, weight, height, and activity level.</li>
                    </ul>
                    <div className="flex justify-center">
                        <Link href='/reg' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up for Free</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Pro Plan --> */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg shadow-indigo-900 ring-2 ring-indigo-400 bg-white m-4">
  <div className="px-6 flex flex-col justify-center items-start gap-3 py-4">
    <div className="font-bold text-indigo-600 text-3xl mb-2">Pro Plan</div>
    <p className="text-gray-700 text-4xl mb-4">$9.99 / month</p>
    <p className="text-gray-700 text-lg mb-4">Ideal for individuals serious about their fitness goals and looking for advanced features.</p>
    <ul className="list-disc list-inside text-gray-700 text-base mb-4">
      <li>All Free Plan Features</li>
      <li><strong className='text-indigo-600'>Advanced Calorie Tracking:</strong> Detailed breakdown of macronutrients (proteins, fats, carbs).</li>
      <li><strong className='text-indigo-600'>Custom Workout Plans:</strong> Personalized workout routines based on your goals and fitness level.</li>
      <li><strong className='text-indigo-600'>Progress Tracking:</strong> Monitor your weight loss and fitness improvements over time.</li>
      <li><strong className='text-indigo-600'>30-Day Analytics:</strong> Comprehensive analytics for a 30-day period to track your progress.</li>
      <li><strong className='text-indigo-600'>Daily Reports:</strong> Receive daily reports on your nutrition facts and macronutrient intake (via pdf file).</li>
      <li><strong className='text-indigo-600'>Priority Support:</strong> Get quick responses to your queries and issues.</li>
    </ul>
    <div className="flex justify-center">
      <button onClick={handleCreateCheckoutSession} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Start Your 7-Day Free Trial</button>
    </div>
  </div>
</div>


        </div>
    </div>

  )
}
