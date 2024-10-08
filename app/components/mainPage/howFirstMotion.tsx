'use client';
import Image from 'next/image'
import goal from '@/public/goal.svg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HowFirstMotion() {

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
    <motion.div 
    ref={ref} 
    variants={{visible: {opacity: 1, x: 0}, hidden: {opacity: 0, x: '-100%'}}} 
    initial="hidden" 
    animate={mainControls} 
    transition={{duration: 0.75, type: 'spring', stiffness: 100, delay: 0.75}} 
    className="lg:w-[38%] w-[98%] h-[34rem] flex flex-col gap-9 justify-center items-center bg-slate-100 p-6 rounded-xl shadow-lg"
>
    <div className="flex w-full justify-evenly flex-col gap-4 lg:gap-6 lg:flex-row-reverse items-center">
        <Image src={goal} alt="goal" width={100} height={100} />
        <h1 className="lg:text-4xl text-5xl bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 bg-clip-text text-transparent font-bold tracking-wider text-center">
            Set Your Goals
        </h1>
    </div>
    <p className="lg:text-3xl text-2xl font-light text-gray-800 text-center tracking-wide leading-relaxed">
        First things first &#45; it&#39;s time to <span className="text-4xl font-extrabold bg-gradient-to-bl from-amber-700 via-red-400 to-red-200 bg-clip-text text-transparent">set your fitness goals</span>. Whether you&#39;re looking to lose weight, build muscle, or improve your overall health, FitGenius has you covered. Simply tell us what you want to achieve, and we&#39;ll <span className="text-4xl font-extrabold bg-gradient-to-br from-amber-800 via-red-500 to-orange-200 bg-clip-text text-transparent">create a personalized plan</span> to help you get there.
    </p>
</motion.div>
  )
}
