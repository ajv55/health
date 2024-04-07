import React from 'react'
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'

export default function Why() {
  return (
    <div className='w-full h-[content] flex justify-start  relative bg-gradient-to-tl from-emerald-900 via-emerald-700 to-emerald-300 mt-4 items-start flex-col gap-10'>
      <Tilt />
      <BottomTilt />

        <h1 className='text-6xl text-white ml-10 mt-44 text-start w-[90%] font-bold tracking-wider'><span className=' font-extrabold bg-gradient-to-br from-amber-900 via-amber-500 to-amber-300 bg-clip-text text-transparent '>Unlocking </span>Your Weight Loss Success: <br /> <span className='font-extrabold bg-gradient-to-br from-red-900 via-red-400 to-red-200 bg-clip-text text-transparent'>Here&#39;s How!</span></h1>
        <div className=' w-full h-content mt-24 gap-24 flex flex-col justify-center'>
          <div className=' drop-shadow-xl  w-full h-[23rem] flex justify-evenly items-center gap-4 relative'>
            <div className=' relative'>
              <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>1</h1>
              <h1 className='text-5xl text-center bg-gradient-to-br  from-teal-800 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Science-Backed Approach</h1>
            </div>
              <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>At WeightTrack, <span className='font-bold text-4xl  bg-gradient-to-tl from-rose-700 via-orange-200 to-rose-600 bg-clip-text text-transparent'>we prioritize science and evidence-based methods</span> to help you achieve your weight loss goals. Our approach is <span className='font-bold text-4xl bg-gradient-to-br from-orange-200 via-red-300 to-red-700 bg-clip-text text-transparent'>rooted in research</span>, ensuring that every feature and recommendation is backed by scientific principles. Trust us to provide you with reliable information and <span className='font-bold text-4xl bg-gradient-to-br from-red-300 via-red-400 to-blue-900 bg-clip-text text-transparent'>effective strategies for sustainable weight loss</span>.</p>
          </div>

          {/* span
             className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent'
          */}

          {/* second reason */}
          <div className=' drop-shadow-xl  w-full h-[23rem] flex flex-row-reverse justify-evenly gap-4 items-center relative'>
              <div className='relative'>
                <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>2</h1>
                <h1 className='text-5xl text-center bg-gradient-to-tl  from-red-800 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Personalized Experience</h1>
              </div>
              <p className='text-3xl text-center text-white tracking-wide font-light w-[65%] px-3'>We understand that everyone&#39;s weight loss <span className='font-bold text-4xl bg-gradient-to-tr from-blue-300 via-orange-500 to-orange-900 bg-clip-text text-transparent'>journey is unique</span>. That&#39;s why we offer a personalized experience <span className='font-bold text-4xl bg-gradient-to-tr from-blue-300 via-orange-400 to-orange-900 bg-clip-text text-transparent'>tailored to your individual needs</span> and preferences. From customized calorie targets to personalized workout plans, we <span className='font-bold text-4xl bg-gradient-to-bl from-stone-300 via-red-300 to-zinc-300 bg-clip-text text-transparent'>empower you to make choices</span> that align with your goals and lifestyle. With WeightTrack, you&#39;re not just a number &#45; you&#39;re a valued member of our community.</p>
          </div>
            {/* third reason */}
          <div className=' drop-shadow-xl  w-full h-[23rem] flex justify-evenly items-center relative'>
            <div className='relative'>
              <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>3</h1>
              <h1 className='text-5xl text-center bg-gradient-to-br  from-purple-800 via-red-300 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Comprehensive Support</h1>
            </div>
              <p className='text-3xl text-left text-white tracking-wide font-light w-[65%]'>Weight loss can be challenging, <span className='font-extrabold text-4xl bg-gradient-to-br from-amber-800 via-amber-500 to-amber-300 bg-clip-text text-transparent'>but you don&#39;t have to go it alone</span>. With WeightTrack, <span className='font-extrabold text-4xl bg-gradient-to-tr from-indigo-600 via-indigo-300 to-indigo-200 bg-clip-text text-transparent'>you&#39;ll have access to comprehensive support</span> every step of the way. Whether you have questions about nutrition, need motivation to stick to your workout routine, or simply want to connect with like-minded individuals, our team and community are here to support you. <span className='font-extrabold text-4xl bg-gradient-to-tr from-amber-800 via-amber-500 to-amber-200 bg-clip-text text-transparent'>We&#39;re committed to your success</span> and will do whatever it takes to help you reach your goals.</p>
          </div>
            {/* fourth reason */}
          <div className=' drop-shadow-xl  w-full h-[23rem] flex flex-row-reverse justify-evenly items-center relative'>
            <div className='relative'>
              <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>4</h1>
              <h1 className='text-5xl text-center bg-gradient-to-tl  from-blue-300 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'> User-Friendly Interface</h1>
            </div>
              <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>We believe that <span className='font-bold text-4xl bg-gradient-to-br from-blue-300 via-rose-200 to-blue-400 bg-clip-text text-transparent'>simplicity is key to success</span>. That&#39;s why we&#39;ve designed our platform with a <span className='font-bold text-4xl bg-gradient-to-tr from-emerald-300 via-blue-400 to-orange-500 bg-clip-text text-transparent'>user-friendly interface that makes it easy</span> to track your progress, access resources, and stay motivated. Whether you&#39;re a tech-savvy fitness enthusiast or a beginner looking to make healthier choices, <span className='font-bold text-4xl bg-gradient-to-tl from-red-300 via-stone-400 to-purple-300 bg-clip-text text-transparent'>our intuitive interface ensures</span> that you can navigate our platform with ease and confidence.</p>
          </div>

            {/* fifht reason */}
            <div className=' drop-shadow-xl  w-full h-[23rem] mb-64 flex justify-evenly items-center relative'>
               <div className='relative'>
                 <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>5</h1>
                 <h1 className='text-5xl text-center bg-gradient-to-tr  from-blue-300 via-red-500 to-orange-300 bg-clip-text text-transparent  font-bold tracking-wide'> Positive Results</h1>
               </div>
                <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>At the end of the day, what <span className='font-bold text-4xl bg-gradient-to-r from-blue-200 via-purple-300 to-stone-300 bg-clip-text text-transparent'>matters most is results</span>. And with WeightTrack, you can expect nothing less than positive, tangible results. Countless users have <span className='font-bold text-4xl bg-gradient-to-tr from-purple-300 via-orange-300 to-emerald-600 bg-clip-text text-transparent'>achieved their weight loss goals</span> with our program, experiencing improved health, increased energy, and greater confidence. Join the thousands of satisfied customers who have transformed their lives with WeightTrack, and <span className='font-bold text-4xl bg-gradient-to-tr from-rose-300 via-sky-200 to-slate-500 bg-clip-text text-transparent'>discover what&#39;s possible for you</span>.</p>
            </div>

            {/* className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent' */}

        </div>
    </div>
  )
}
