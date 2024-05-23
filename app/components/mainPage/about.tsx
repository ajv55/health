'use client';
import empower from '@/public/empower.png';
import BottomTilt from '../bottomTilt';
import Tilt from '../tilt';
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div className='w-full h-content flex flex-col gap-9 justify-start items-start '>
        <p className='lg:text-5xl text-3xl lg:ml-10 ml-4 tracking-wide mt-10 w-[90%] text-left'>At WeightTrack, <span className='font-extrabold bg-gradient-to-br from-purple-900 via-blue-300 to-purple-500 bg-clip-text text-transparent'>our mission is crystal clear</span>: we&#39;re here to empower individuals like you to take control of your <span className='font-extrabold bg-gradient-to-br from-red-900 to-orange-600 bg-clip-text text-transparent'>health</span> and <span className='font-extrabold bg-gradient-to-bl from-indigo-800 via-orange-300 to-indigo-300 bg-clip-text text-transparent'>wellness journey</span>. We&#39;re not just another weight loss app &#45; we&#39;re your dedicated partner in achieving lasting, <span className='font-extrabold bg-gradient-to-bl from-blue-800 via-red-400 to-purple-300 bg-clip-text text-transparent'>meaningful change</span>.</p>
        
        <motion.div initial={{scale: 0, opacity: 0, x: -100}} whileInView={{scale: 1, opacity: 1, x: 0}} transition={{duration: 0.45, type: 'spring', delay: 0.25}}  className='mt-24  w-full flex flex-col lg:flex-row justify-evenly items-center h-content lg:h-[40rem]'>
            <div className='bg-cover rounded-3xl   bg-center relative w-[95%] h-[33rem]  lg:w-[43rem] lg:h-[33rem]' style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,0), rgba(0,0,0,0)), url("/empower.png")'}}>
                <div className='bg-amber-800 rounded-3xl drop-shadow-2xl w-full h-[33rem] absolute top-3 left-3 -z-10'></div>
            </div>

            <div className=' w-[45%] h-[100%] flex justify-evenly items-center  flex-col'>
                <h1 className='font-bold tracking-wide bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-300 bg-clip-text text-transparent text-6xl text-center'>Empowerment</h1>
                <p className='tracking-wide text-3xl text-center w-[88%]'>We believe in <span className='font-bold'>empowering individuals</span> with the knowledge, tools, and support they need to make <span className='font-bold'>informed decisions</span> about their health and wellness.</p>
            </div>
        </motion.div>

        {/* second section */}

        <motion.div initial={{scale: 0, opacity: 0, x: -100}} whileInView={{scale: 1, opacity: 1, x: 0}} transition={{duration: 0.45, type: 'spring', delay: 0.25}} className='mt-5  w-full flex flex-row-reverse justify-evenly items-center h-[40rem]'>
            <div className='bg-cover rounded-3xl   bg-center relative  w-[43rem] h-[33rem]' style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,0), rgba(0,0,0,0)), url("/Inclusive.jpg")'}}>
                <div className='bg-stone-600 rounded-3xl drop-shadow-2xl w-full h-[33rem] absolute top-3 right-3 -z-10'></div>
            </div>

            <div className=' w-[45%] h-[100%] flex justify-evenly items-center  flex-col'>
                <h1 className='font-bold tracking-wide bg-gradient-to-tr from-stone-700 via-stone-500 to-zinc-300 bg-clip-text text-transparent text-6xl text-center'>Inclusivity</h1>
                <p className='tracking-wide text-3xl text-center w-[88%]'>We&#39;re committed to creating an <span className='font-bold'>inclusive</span> and welcoming environment where everyone <span className='font-bold'>feels valued</span>, <span className='font-bold'>respected</span>, and <span className='font-bold'>supported on their journey</span>.</p>
            </div>
        </motion.div>

        {/* third section */}

        <motion.div initial={{scale: 0, opacity: 0, x: -100}} whileInView={{scale: 1, opacity: 1, x: 0}} transition={{duration: 0.45, type: 'spring', delay: 0.25}} className='mt-5  w-full flex  justify-evenly items-center h-[40rem]'>
            <div className='bg-cover rounded-3xl   bg-center relative  w-[43rem] h-[33rem]' style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,0), rgba(0,0,0,0)), url("/science.jpg")'}}>
                <div className='bg-sky-800 rounded-3xl drop-shadow-2xl w-full h-[33rem] absolute top-3 left-3 -z-10'></div>
            </div>

            <div className=' w-[45%] h-[100%] flex justify-evenly items-center  flex-col'>
                <h1 className='font-bold tracking-wide bg-gradient-to-tr from-teal-800 via-sky-500 to-purple-300 bg-clip-text text-transparent text-6xl text-center'>Science-Based Approach</h1>
                <p className='tracking-wide text-3xl text-center w-[88%]'>Our approach is grounded <span className='font-bold'>in science</span>, using <span className='font-bold'>evidence-based strategies</span> to guide our recommendations and ensure the <span className='font-bold'>best possible</span> outcomes.</p>
            </div>
        </motion.div>

        {/* fourth section */}

        <motion.div initial={{scale: 0, opacity: 0, x: -100}} whileInView={{scale: 1, opacity: 1, x: 0}} transition={{duration: 0.45, type: 'spring', delay: 0.25}} className='mt-5  w-full flex flex-row-reverse justify-evenly items-center h-[40rem]'>
            <div className='bg-cover rounded-3xl   bg-center relative  w-[43rem] h-[33rem]' style={{backgroundImage: 'linear-gradient(to right,rgba(0,0,0,0), rgba(0,0,0,0)), url("/personal2.jpg")'}}>
                <div className='bg-purple-900 rounded-3xl drop-shadow-2xl w-full h-[33rem] absolute top-3 right-3 -z-10'></div>
            </div>

            <div className=' w-[45%] h-[100%] flex justify-evenly items-center  flex-col'>
                <h1 className='font-bold tracking-wide bg-gradient-to-tr from-purple-800 via-yellow-500 to-purple-400 bg-clip-text text-transparent text-6xl text-center'>Personalization</h1>
                <p className='tracking-wide text-3xl text-center w-[88%]'>We understand that every <span className='font-bold'>individual is unique</span>, which is why we offer personalized support tailored to your <span className='font-bold'>specific needs</span>, <span className='font-bold'>preferences</span>, and <span className='font-bold'>goals</span>.</p>
            </div>
        </motion.div>

    </div>
  )
}
