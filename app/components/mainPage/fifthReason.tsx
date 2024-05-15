'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FifthReason() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    }, [isInView, mainControls])

  return (
    <motion.div ref={ref} variants={{visible: {scale: 1, opacity: 1, x: 0}}} initial={{scale: 0, opacity: 0, x: 100}} animate={mainControls} transition={{duration: 0.55, type: 'spring', delay: 0.25}} className=' drop-shadow-xl  w-full h-[23rem] mb-64 flex justify-evenly items-center relative'>
        <div className='relative'>
            <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>5</h1>
            <h1 className='text-5xl text-center bg-gradient-to-tr  from-blue-300 via-red-500 to-orange-300 bg-clip-text text-transparent  font-bold tracking-wide'> Positive Results</h1>
        </div>
        <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>At the end of the day, what <span className='font-bold text-4xl bg-gradient-to-r from-blue-200 via-purple-300 to-stone-300 bg-clip-text text-transparent'>matters most is results</span>. And with WeightTrack, you can expect nothing less than positive, tangible results. Countless users have <span className='font-bold text-4xl bg-gradient-to-tr from-purple-300 via-orange-300 to-emerald-600 bg-clip-text text-transparent'>achieved their weight loss goals</span> with our program, experiencing improved health, increased energy, and greater confidence. Join the thousands of satisfied customers who have transformed their lives with WeightTrack, and <span className='font-bold text-4xl bg-gradient-to-tr from-rose-300 via-sky-200 to-slate-500 bg-clip-text text-transparent'>discover what&#39;s possible for you</span>.</p>
    </motion.div>
  )
}
