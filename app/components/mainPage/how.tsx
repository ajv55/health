'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import goal from '@/public/goal.svg';
import Image from 'next/image';
import progress from '@/public/progress.svg';
import guide from '@/public/route-spot-guide-map-svgrepo-com.svg';
import HowFirstMotion from './howFirstMotion';
import HowSecondMotion from './howSecondMotion';
import HowThirdMotion from './howThirdMotion';

export default function How() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            console.log(isInView)
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <section className='w-full h-content bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-200 relative flex flex-col justify-start gap-12 items-center'>

            <Tilt/>
            <BottomTilt /> 
            

        <h1 className='lg:text-7xl text-5xl text-center text-white mt-44 tracking-wide font-bold'>How It Works: <br /> <br /> <motion.span  variants={{visible: { x: 0, opacity: 1 }}} initial={{ x: '-100vw', opacity: 0 }} animate={mainControls} transition={{duration: 0.35, type: 'spring', delay: 0.25}} className='font-extrabold lg:text-8xl text-5xl bg-gradient-to-br from-blue-200 via-amber-600 to-cyan-300 bg-clip-text text-transparent'>Your Roadmap to Success</motion.span></h1>
        <p ref={ref} className='lg:text-4xl text-2xl text-white  text-center text-balance tracking-wide lg:w-[66%] w-full font-light'>Curious about how FitGenius can help you achieve your fitness goals? Let&#39;s break it down into <span className='font-extrabold'>three simple steps</span>:</p>

        {/* first section inside the how it works section */}
        <div className=' flex relative flex-col lg:flex-row lg:flex-wrap justify-center mt-16 mb-64 gap-20 items-center w-full'>
            <HowFirstMotion />
         {/* second section bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 bg-clip-text text-transparent */}

            <HowSecondMotion />

            {/* thrid section */}

            <HowThirdMotion />




        </div>

       
        

    </section>
  )
}
