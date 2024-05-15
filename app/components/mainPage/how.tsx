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
            

        <h1 className='text-7xl text-center text-white mt-44 tracking-wide font-bold'>How It Works: <br /> <br /> <motion.h3  variants={{visible: { x: 0, opacity: 1 }}} initial={{ x: '100%', opacity: 0 }} animate={mainControls} transition={{duration: 0.35, type: 'spring', delay: 0.25}} className='font-extrabold text-8xl bg-gradient-to-br from-blue-200 via-amber-600 to-cyan-300 bg-clip-text text-transparent'>Your Roadmap to Success</motion.h3></h1>
        <p ref={ref} className='text-4xl text-white  text-center tracking-wide w-[66%] font-light'>Curious about how FitGenius can help you achieve your fitness goals? Let&#39;s break it down into <span className='font-extrabold'>three simple steps</span>:</p>

        {/* first section inside the how it works section */}
        <div className=' flex relative flex-wrap justify-center mt-16 mb-64 gap-20 items-center w-full'>
            <HowFirstMotion />
         {/* second section bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 bg-clip-text text-transparent */}

            <HowSecondMotion />

            {/* thrid section */}

            <HowThirdMotion />




        </div>

       
        

    </section>
  )
}
