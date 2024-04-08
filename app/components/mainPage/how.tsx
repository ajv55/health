import React from 'react'
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import goal from '@/public/goal.svg';
import Image from 'next/image';
import progress from '@/public/progress.svg';
import guide from '@/public/route-spot-guide-map-svgrepo-com.svg';

export default function How() {
  return (
    <section className='w-full h-content bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-200 relative flex flex-col justify-start gap-12 items-center'>

            <Tilt/>
            <BottomTilt /> 
            

        <h1 className='text-7xl text-center text-white mt-44 tracking-wide font-bold'>How It Works: <br /> <br /> <span className='font-extrabold text-8xl bg-gradient-to-br from-blue-200 via-amber-600 to-cyan-300 bg-clip-text text-transparent'>Your Roadmap to Success</span></h1>
        <p className='text-4xl text-white  text-center tracking-wide w-[66%] font-light'>Curious about how FitGenius can help you achieve your fitness goals? Let&#39;s break it down into <span className='font-extrabold'>three simple steps</span>:</p>

        {/* first section inside the how it works section */}
        <div className=' flex relative flex-wrap justify-center mt-16 mb-64 gap-20 items-center w-full'>
            <div className=' w-[38%]  h-[34rem] flex flex-col gap-9 justify-center items-center'>
                <div className='flex  w-full  justify-evenly flex-row-reverse items-center'>
                <Image src={goal}  alt='goal' width={100} height={100}></Image>
                <h1 className='text-4xl  bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 bg-clip-text text-transparent font-bold tracking-wider'>Set Your Goals</h1>
                </div>
                <p className='text-3xl font-light text-white p-3 text-center tracking-wide'>First things first &#45; it&#39;s time to <span className='text-4xl font-extrabold bg-gradient-to-bl from-amber-700 via-red-400 to-red-200 bg-clip-text text-transparent'>set your fitness goals</span>. Whether you&#39;re looking to lose weight, build muscle, or improve your overall health, FitGenius has you covered. Simply tell us what you want to achieve, and we&#39;ll <span className='text-4xl font-extrabold bg-gradient-to-br from-amber-800 via-red-500 to-orange-200 bg-clip-text text-transparent'>create a personalized plan</span> to help you get there.</p>
            </div>
         {/* second section bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 bg-clip-text text-transparent */}

            <div className='  w-[38%] mt-10   h-[34rem] flex flex-col gap-9 justify-center items-center'>
                <div className='flex  w-full  justify-evenly flex-row-reverse items-center'>
                <Image src={progress}  alt='goal' width={100} height={100}></Image>
                <h1 className='text-4xl  font-bold bg-gradient-to-br from-blue-300 via-orange-400 to-red-800 bg-clip-text text-transparent tracking-wider'>Track Your Progress</h1>
                </div>
                <p className='text-3xl font-light text-white p-3 text-center tracking-wide'>Once you&#39;ve <span className='text-4xl font-extrabold bg-gradient-to-tr from-teal-400 via-red-200 to-orange-300 bg-clip-text text-transparent'>set your goals</span>, it&#39;s time to start tracking your progress. With FitGenius&#39;s <span className='font-extrabold text-4xl bg-gradient-to-tl from-amber-800 via-purple-400 to-yellow-300 bg-clip-text text-transparent'>intuitive tracking tools</span>, you can monitor your workouts, log your meals, and <span className='font-extrabold text-4xl bg-gradient-to-bl from-purple-800 via-rose-300 to-blue-300 bg-clip-text text-transparent'>track your progress</span> over time. Our user-friendly interface makes it easy to see how you&#39;re progressing towards your goals and <span className=' font-extrabold text-4xl bg-gradient-to-tl from-amber-900 via-red-300 to-amber-200 bg-clip-text text-transparent'>make adjustments as needed</span>.</p>
            </div>

            {/* thrid section */}

            <div className='  w-[45%] h-[34rem] flex flex-col gap-9 justify-center items-center'>
                <div className='flex  w-full  justify-evenly flex-row-reverse items-center'>
                <Image src={guide}  alt='goal' width={100} height={100}></Image>
                <h1 className='text-4xl mt-9 text-center bg-gradient-to-tl from-orange-800 via-red-300 to-purple-400 bg-clip-text text-transparent  font-bold tracking-wider'>Get Personalized Guidance</h1>
                </div>
                <p className='text-3xl font-light text-white p-3 text-center tracking-wide'>No two <span className='text-4xl font-extrabold bg-gradient-to-bl from-rose-700 via-zinc-300 to-red-500 bg-clip-text text-transparent'>fitness journeys are the same</span>, which is why FitGenius offers <span className='text-4xl font-extrabold bg-gradient-to-tl from-red-800 via bg-purple-200 to-orange-400 bg-clip-text text-transparent'>personalized guidance</span> every step of the way. From customized workout plans to <span className='font-extrabold text-4xl bg-gradient-to-bl from-pink-800 via-yellow-200 to-red-600 bg-clip-text text-transparent'>personalized nutrition recommendations</span>, our team of experts is here to support you on your <span className='font-extrabold text-4xl bg-gradient-to-tl from-orange-900 via-orange-200 to-orange-500 bg-clip-text text-transparent'>journey to fitness success</span>. Whether you need help staying motivated, making healthy choices, or overcoming obstacles, <span className='font-extrabold text-4xl bg-gradient-to-bl from-yellow-800 via-amber-200 to-purple-500 bg-clip-text text-transparent'>we&#39;ve got your back</span>.</p>
            </div>


            <div className='bg-cover flex justify-center items-center rounded-md bg-center bg-transparent w-[40%] h-[32rem]' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("/success.jpg")'}}>
                <p className='text-5xl text-white text-center font-light'>Ready to start your fitness journey with <span className='font-extrabold text-5xl'>FitGenius</span>? <span className='text-blue-700 underline underline-offset-4 hover:cursor-pointer'>Sign up now</span> and let&#39;s get started!</p>
            </div>


        </div>

       
        

    </section>
  )
}
