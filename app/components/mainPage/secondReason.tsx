'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function SecondReason() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    }, [isInView, mainControls])

  return (
    <motion.div ref={ref} variants={{visible: {scale: 1, opacity: 1, x: 0}}} initial={{scale: 0, opacity: 0, x: -100}} animate={mainControls} transition={{duration: 0.55, type: 'spring', delay: 0.15}} className=' drop-shadow-xl  w-full h-[23rem] flex flex-row-reverse justify-evenly gap-4 items-center relative'>
        <div className='relative'>
        <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>2</h1>
        <h1 className='text-5xl text-center bg-gradient-to-tl  from-red-800 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Personalized Experience</h1>
        </div>
        <p className='text-3xl text-center text-white tracking-wide font-light w-[65%] px-3'>We understand that everyone&#39;s weight loss <span className='font-bold text-4xl bg-gradient-to-tr from-blue-300 via-orange-500 to-orange-900 bg-clip-text text-transparent'>journey is unique</span>. That&#39;s why we offer a personalized experience <span className='font-bold text-4xl bg-gradient-to-tr from-blue-300 via-orange-400 to-orange-900 bg-clip-text text-transparent'>tailored to your individual needs</span> and preferences. From customized calorie targets to personalized workout plans, we <span className='font-bold text-4xl bg-gradient-to-bl from-stone-300 via-red-300 to-zinc-300 bg-clip-text text-transparent'>empower you to make choices</span> that align with your goals and lifestyle. With WeightTrack, you&#39;re not just a number &#45; you&#39;re a valued member of our community.</p>
    </motion.div>
  )
}
