import Link from 'next/link'
import React from 'react';
import style from '@/app/style.module.css';

export default function PricingHeader() {
  return (
    <header className={`${style.background} w-full relative overflow-hidden`}>
      <div className=' bg-gradient-to-br lg:bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-300 w-[23rem] h-[23rem] lg:w-[30rem] lg:h-[30rem] opacity-45 rounded-full absolute top-44 lg:top-0 left-72 lg:-left-[26rem]'></div>
      <div className=' bg-gradient-to-bl lg:bg-gradient-to-br from-indigo-900 via-indigo-400 to-indigo-300  w-[23rem] h-[23rem] lg:w-[30rem] lg:h-[30rem] opacity-45 rounded-full absolute top-0 right-72 lg:-right-[26rem]'></div>
        <div className="container flex flex-col justify-center items-center mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl mt-20 font-bold text-gray-800 md:text-6xl">
            Achieve Your Fitness Goals with Our <span className=" bg-gradient-to-bl from-indigo-900 via-indigo-600 to-indigo-300 bg-clip-text text-transparent">Science-Based Techniques</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">
            Our plans are designed to help you lose weight effectively by tracking your calories, monitoring your workouts, and providing personalized nutritional guidance.
        </p>
        <p className="mt-2 text-lg text-gray-600">
            Whether you&#39;re just starting out or looking to fine-tune your fitness journey, we have a plan that fits your needs.
        </p>
        </div>
    </header>

  )
}
