import Image from 'next/image';
import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";


export default function Testimonial() {
  return (
    <div className='w-full h-content flex flex-col justify-start items-center'>
      <div className='bg-center rounded-xl relative bg-cover w-[85%] h-[32rem] flex  justify-center items-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("/test.jpg")'}}>
        <div className='w-full rounded-2xl -z-10 h-[32rem] bg-gradient-to-br from-purple-800 via-red-400 to-slate-500 absolute top-5 right-5'></div>
        <h1 className='text-9xl font-extrabold tracking-wider text-center bg-gradient-to-br from-purple-800 via-red-400 to-slate-500 bg-clip-text text-transparent'>Testimonials</h1>
      </div>
        <h1 className='text-8xl text-center  ml-7 font-bold mt-24 tracking-wider'>What <span className='font-extrabold text-8xl bg-gradient-to-bl from-red-800 via-blue-200 to-orange-500 bg-clip-text text-transparent'>Our Users</span> Are Saying</h1>
        <div className='w-full flex justify-evenly mt-32 items-center'>

          <div className='bg-slate-100 flex flex-col justify-start items-center w-[29rem] h-[36rem] rounded-md'>
            <RiDoubleQuotesL className=' mt-10 opacity-65' size={80} color='tan'/>
            <p className='text-2xl p-2 text-center tracking-wide'>FitGenius changed my life! I&#39;ve <span className='font-bold'>struggled with weight loss for years</span>, but with FitGenius&#39;s personalized workout plans and nutrition guidance, <span className='font-bold'>I finally achieved my goals</span>. I feel healthier, happier, and more confident than ever before.</p>
            <div className='bg-cover mt-6 bg-center w-32 h-32 rounded-full' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/sarah.jpeg")'}}></div>
            <h5 className='text-xl mt-4'><span className='font-bold'>Sarah J.</span> , Lost 30 pounds</h5>
          </div>

          <div className='bg-slate-100 flex flex-col justify-start items-center w-[29rem] h-[36rem] rounded-md'>
            <RiDoubleQuotesL className=' mt-10 opacity-65' size={80} color='tan'/>
            <p className='text-2xl p-2 text-center tracking-wide'>I can&#39;t say enough <span className='font-bold'>good things about FitGenius</span>. The app is easy to use, the workouts are challenging but manageable, and the support from the <span className='font-bold'>FitGenius team is incredible</span>. I&#39;ve never felt more motivated to stick to my fitness routine!</p>
            <div className='bg-cover mt-5 bg-center w-32 h-32 rounded-full' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/mike.jpg")'}}></div>
            <h5 className='text-xl mt-4'><span className='font-bold'>Mike D.</span> , Improved strength and endurance</h5>
          </div>

          <div className='bg-slate-100 flex flex-col justify-start items-center w-[29rem] h-[36rem] rounded-md'>
            <RiDoubleQuotesL className=' mt-10 opacity-65' size={80} color='tan'/>
            <p className='text-2xl p-2 text-center tracking-wide'>As a busy mom, finding time to <span className='font-bold'>prioritize my health and fitness</span> was always a challenge. FitGenius made it easy with their <span className='font-bold'>flexible workout plans</span> and quick meal ideas. I&#39;m so grateful for the support and guidance I&#39;ve received &#45; it&#39;s made a <span className='font-bold'>world of difference</span> in my life.</p>
            <div className='bg-cover bg-center w-32 h-32 rounded-full' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/emily.jpg")'}}></div>
            <h5 className='text-xl mt-4'><span className='font-bold'>Emily S.</span> , Balanced lifestyle achieved</h5>
          </div>

          
        </div>
    </div>
  )
}
