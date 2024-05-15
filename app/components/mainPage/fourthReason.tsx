'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FourthReason() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    }, [isInView, mainControls])

  return (
    <motion.div ref={ref} variants={{visible: {scale: 1, opacity: 1, x: 0}}} initial={{scale: 0, opacity: 0, x: 100}} animate={mainControls} transition={{duration: 0.55, type: 'spring', delay: 0.25}}  className=' drop-shadow-xl  w-full h-[23rem] flex flex-row-reverse justify-evenly items-center relative'>
        <div className='relative'>
            <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>4</h1>
            <h1 className='text-5xl text-center bg-gradient-to-tl  from-blue-300 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'> User-Friendly Interface</h1>
        </div>
            <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>We believe that <span className='font-bold text-4xl bg-gradient-to-br from-blue-300 via-rose-200 to-blue-400 bg-clip-text text-transparent'>simplicity is key to success</span>. That&#39;s why we&#39;ve designed our platform with a <span className='font-bold text-4xl bg-gradient-to-tr from-emerald-300 via-blue-400 to-orange-500 bg-clip-text text-transparent'>user-friendly interface that makes it easy</span> to track your progress, access resources, and stay motivated. Whether you&#39;re a tech-savvy fitness enthusiast or a beginner looking to make healthier choices, <span className='font-bold text-4xl bg-gradient-to-tl from-red-300 via-stone-400 to-purple-300 bg-clip-text text-transparent'>our intuitive interface ensures</span> that you can navigate our platform with ease and confidence.</p>
        </motion.div>
  )
}
