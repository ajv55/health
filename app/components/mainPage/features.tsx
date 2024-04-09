import Image from 'next/image';
import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import Cal from '@/public/calories.svg';
import Nut from '@/public/nutrition.svg';
import Tilt from '../tilt';
import BottomTilt from '../bottomTilt';

{/*  className='font-bold text-3xl bg-gradient-to-bl from-amber-200 via-amber-500 to-amber-400 bg-clip-text text-transparent' */}

export default function Features() {
  return (
    <div id='features' className=' w-full h-content flex relative overflow-auto flex-col gap-14 justify-start items-center'>
        <div className=' absolute -top-64 left-4 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <Tilt/>
            <BottomTilt/>
        </div>
        <h1 className='text-8xl mt-32 font-bold tracking-widest'>Features</h1>
        <p className='text-4xl text-center font-light tracking-wider'>Everything you need to <span className='font-bold bg-gradient-to-br from-cyan-950 via-cyan-600 to-cyan-300 bg-clip-text text-transparent'>reach your goals</span>.</p>
        <div className=' w-full h-content  flex flex-wrap gap-16 justify-center items-center '>
            <div className=' bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400 rounded-xl drop-shadow-xl w-[40%] h-[43rem] px-4 py-6 flex flex-col justify-center gap-3 items-center'>
                <Image src={Cal}  alt='caloriesimage' width={120} height={120}></Image>
                <h1 className='text-5xl mt-4 text-center font-bold tracking-wider text-white'>Precision Calorie Tracking</h1>
                <ul className=' list-outside mt-7 list-disc text-2xl text-white flex flex-col justify-center items-center gap-4 lg:w-[82%] text-left '>
                    <li>Easily track your daily calorie intake with our <span className='font-bold text-3xl bg-gradient-to-bl from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent'>intuitive interface</span>.</li>
                    <li>Set personalized calorie goals based on your weight loss <span className='font-bold text-3xl bg-gradient-to-bl from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent'>targets</span> and <span className='font-bold text-3xl bg-gradient-to-bl from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent'>activity level</span>.</li>
                    <li>Get real-time feedback and insights to optimize your diet for <span className='font-bold text-3xl bg-gradient-to-bl from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent'>maximum results</span>.</li>
                </ul>
            </div>

            <div className=' bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-xl drop-shadow-xl w-[40%] h-[43rem] px-4 py-6 flex flex-col justify-center gap-3 items-center'>
                <GiNotebook color='white' size={30} className='lg:w-24 lg:h-24'/>
                <h1 className='text-5xl text-center font-bold tracking-wider text-white'>Customized Workout Plans</h1>
                <ul className=' list-outside mt-7 list-disc text-2xl text-white flex flex-col justify-center items-center gap-4 lg:w-[82%] text-left '>
                    <li>Access a variety of <span className='font-bold text-3xl bg-gradient-to-bl from-orange-200 via-orange-400 to-orange-200 bg-clip-text text-transparent'>tailored workout plans </span> designed by fitness experts.</li>
                    <li>Choose from different workout styles, durations, and intensity levels to <span className='font-bold text-3xl bg-gradient-to-bl from-orange-200 via-orange-400 to-orange-400 bg-clip-text text-transparent'>suit your preferences</span>.</li>
                    <li>Track your progress and stay <span className='font-bold text-3xl bg-gradient-to-tr from-orange-200 via-orange-500 to-orange-600 bg-clip-text text-transparent'>motivated with built-in</span> performance metrics and achievements.</li>
                </ul>
            </div>

            <div className=' bg-gradient-to-br from-red-900 via-red-600 to-red-400 rounded-xl drop-shadow-xl w-[40%] h-[43rem] px-4 py-6 flex flex-col justify-center gap-3 items-center'>
                <Image className='mt-7' src={Nut}  alt='caloriesimage' width={120} height={120}></Image>
                <h1 className='text-5xl mt-4 text-center font-bold tracking-wider text-white'>Expert Nutrition Guidance</h1>
                <ul className=' list-outside mt-7 list-disc text-2xl text-white flex flex-col justify-center items-center gap-4 lg:w-[82%] text-left '>
                    <li>Explore our <span className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent'>comprehensive nutrition food guide</span> curated by nutritionists and dietitians.</li>
                    <li>Discover healthy recipes, meal plans, and dietary tips to <span className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent'>support your weight loss journey</span>.</li>
                    <li>Learn about the science behind nutrition and make informed choices <span className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent' >for long-term success</span>.</li>
                    {/* className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent' */}
                </ul>
            </div>

            <div className=' bg-gradient-to-br from-amber-900 via-amber-600 to-amber-400 rounded-xl drop-shadow-xl w-[40%] h-[43rem] px-4 py-6 flex flex-col justify-center gap-3 items-center'>
                <IoMdAnalytics color='white' className='lg:w-28 lg:h-28' size={20}/>
                <h1 className='text-5xl text-center font-bold tracking-wider text-white'>Progress Tracking and Analytics</h1>
                <ul className=' list-outside mt-7 list-disc text-2xl text-white flex flex-col justify-center items-center gap-4 lg:w-[82%] text-left '>
                    <li>Monitor your weight loss progress with <span className='font-bold text-3xl bg-gradient-to-br from-blue-300 via-blue-400 to-zinc-900 bg-clip-text text-transparent'>detailed charts and graphs</span>.</li>
                    <li>Analyze trends, identify patterns, and <span className='font-bold text-3xl bg-gradient-to-br from-blue-300 via-blue-400 to-zinc-900 bg-clip-text text-transparent'>make data-driven decisions</span> to stay on track.</li>
                    <li>Set milestones, celebrate achievements, and <span className='font-bold text-3xl bg-gradient-to-br from-blue-300 via-blue-400 to-zinc-900 bg-clip-text text-transparent'>share your success</span> with the our community.</li>
                    {/* className='font-bold text-3xl bg-gradient-to-br from-blue-300 via-blue-400 to-zinc-900 bg-clip-text text-transparent' */}
                </ul>
            </div>

        </div>
    </div>
  )
}
