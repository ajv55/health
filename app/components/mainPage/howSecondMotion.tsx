'use client';
import Image from 'next/image'
import progress from '@/public/progress.svg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HowSecondMotion() {

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
    <motion.div ref={ref} variants={{visible: {opacity: 1, x: 0}, hidden: {opacity: 0, x: '100%'}}} initial='hidden' animate={mainControls} transition={{duration: 0.75, type: 'spring', stiffness: 100, delay: 1.25}} className='  w-[38%] mt-10   h-[34rem] flex flex-col gap-9 justify-center items-center'>
        <div className='flex  w-full  justify-evenly flex-row-reverse items-center'>
        <Image src={progress}  alt='goal' width={100} height={100}></Image>
        <h1 className='text-4xl  font-bold bg-gradient-to-br from-blue-300 via-orange-400 to-red-800 bg-clip-text text-transparent tracking-wider'>Track Your Progress</h1>
        </div>
        <p className='text-3xl font-light text-white p-3 text-center tracking-wide'>Once you&#39;ve <span className='text-4xl font-extrabold bg-gradient-to-tr from-teal-400 via-red-200 to-orange-300 bg-clip-text text-transparent'>set your goals</span>, it&#39;s time to start tracking your progress. With FitGenius&#39;s <span className='font-extrabold text-4xl bg-gradient-to-tl from-amber-800 via-purple-400 to-yellow-300 bg-clip-text text-transparent'>intuitive tracking tools</span>, you can monitor your workouts, log your meals, and <span className='font-extrabold text-4xl bg-gradient-to-bl from-purple-800 via-rose-300 to-blue-300 bg-clip-text text-transparent'>track your progress</span> over time. Our user-friendly interface makes it easy to see how you&#39;re progressing towards your goals and <span className=' font-extrabold text-4xl bg-gradient-to-tl from-amber-900 via-red-300 to-amber-200 bg-clip-text text-transparent'>make adjustments as needed</span>.</p>
    </motion.div>
  )
}
