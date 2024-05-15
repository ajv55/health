'use client';
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SecondReason from './secondReason';
import ThirdReason from './thirdReason';
import FourthReason from './fourthReason';
import FifthReason from './fifthReason';
export default function Why() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start('visible');
      mainControls.start('secondVisible');
    }
  }, [isInView, mainControls])

  return (
    <div className='w-full h-[content] flex justify-start  relative bg-gradient-to-tl from-emerald-900 via-emerald-700 to-emerald-300 mt-4 items-start flex-col gap-10'>
      <Tilt />
      <BottomTilt />

        <motion.h1 ref={ref} variants={{hidden: {opacity: 0, x: -75}, visible: {opacity: 1, x: 0}}} initial='hidden' animate={mainControls} transition={{duration: 0.65, type: 'spring', stiffness: 100, damping: 10, delay: 0.25}} className='text-6xl text-white ml-10 mt-44 text-start w-[90%] font-bold tracking-wider'><span className=' font-extrabold bg-gradient-to-br from-amber-900 via-amber-500 to-amber-300 bg-clip-text text-transparent '>Unlocking </span>Your Weight Loss Success: <br /> <span className='font-extrabold bg-gradient-to-br from-red-900 via-red-400 to-red-200 bg-clip-text text-transparent'>Here&#39;s How!</span></motion.h1>
        <div className=' w-full h-content mt-24 gap-24 flex flex-col justify-center'>
          <motion.div ref={ref} variants={{secondVisible: {scale: 1, opacity: 1, x: 0}}} initial={{scale: 0, opacity: 0, x: 100}} animate={mainControls} transition={{duration: 0.55, type: 'spring', delay: 0.25}} className=' drop-shadow-xl  w-full h-[23rem] flex justify-evenly items-center gap-4 relative'>
            <div className=' relative'>
              <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>1</h1>
              <h1 className='text-5xl text-center bg-gradient-to-br  from-teal-800 via-red-500 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Science-Backed Approach</h1>
            </div>
              <p className='text-3xl text-center text-white tracking-wide font-light w-[65%]'>At WeightTrack, <span className='font-bold text-4xl  bg-gradient-to-tl from-rose-700 via-orange-200 to-rose-600 bg-clip-text text-transparent'>we prioritize science and evidence-based methods</span> to help you achieve your weight loss goals. Our approach is <span className='font-bold text-4xl bg-gradient-to-br from-orange-200 via-red-300 to-red-700 bg-clip-text text-transparent'>rooted in research</span>, ensuring that every feature and recommendation is backed by scientific principles. Trust us to provide you with reliable information and <span className='font-bold text-4xl bg-gradient-to-br from-red-300 via-red-400 to-blue-900 bg-clip-text text-transparent'>effective strategies for sustainable weight loss</span>.</p>
          </motion.div>


          {/* second reason */}
          <SecondReason />
            {/* third reason */}
          <ThirdReason />
            {/* fourth reason */}
          <FourthReason />

            {/* fifht reason */}
            <FifthReason />

            {/* className='font-bold text-3xl bg-gradient-to-tr from-emerald-300 via-emerald-500 to-emerald-900 bg-clip-text text-transparent' */}

        </div>
    </div>
  )
}
