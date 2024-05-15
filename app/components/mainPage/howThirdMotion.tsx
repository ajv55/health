'use client';
import Image from 'next/image'
import guide from '@/public/route-spot-guide-map-svgrepo-com.svg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HowThirdMotion() {

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
    <motion.div ref={ref} variants={{visible: {opacity: 1, y: 0}, hidden: {opacity: 0, y: '100%'}}} initial='hidden' animate={mainControls} transition={{duration: 1, type: 'spring', stiffness: 100, delay: 0.45}} className='  w-[45%] h-[34rem] flex flex-col gap-9 justify-center items-center'>
        <div className='flex  w-full  justify-evenly flex-row-reverse items-center'>
        <Image src={guide}  alt='goal' width={100} height={100}></Image>
        <h1 className='text-4xl mt-9 text-center bg-gradient-to-tl from-orange-800 via-red-300 to-purple-400 bg-clip-text text-transparent  font-bold tracking-wider'>Get Personalized Guidance</h1>
        </div>
        <p className='text-3xl font-light text-white p-3 text-center tracking-wide'>No two <span className='text-4xl font-extrabold bg-gradient-to-bl from-rose-700 via-zinc-300 to-red-500 bg-clip-text text-transparent'>fitness journeys are the same</span>, which is why FitGenius offers <span className='text-4xl font-extrabold bg-gradient-to-tl from-red-800 via bg-purple-200 to-orange-400 bg-clip-text text-transparent'>personalized guidance</span> every step of the way. From customized workout plans to <span className='font-extrabold text-4xl bg-gradient-to-bl from-pink-800 via-yellow-200 to-red-600 bg-clip-text text-transparent'>personalized nutrition recommendations</span>, our team of experts is here to support you on your <span className='font-extrabold text-4xl bg-gradient-to-tl from-orange-900 via-orange-200 to-orange-500 bg-clip-text text-transparent'>journey to fitness success</span>. Whether you need help staying motivated, making healthy choices, or overcoming obstacles, <span className='font-extrabold text-4xl bg-gradient-to-bl from-yellow-800 via-amber-200 to-purple-500 bg-clip-text text-transparent'>we&#39;ve got your back</span>.</p>
    </motion.div>
  )
}
