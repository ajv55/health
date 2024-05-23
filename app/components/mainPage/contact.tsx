'use client';
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import contactImage from '@/public/contact-svgrepo-com.svg';
import Image from 'next/image';
import { sendEmail } from '@/app/action/sendEmail';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Contact() {

    const ref = useRef<HTMLFormElement>(null);
    const animationRef = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible');
        }
    }, [isInView, mainControls])

  return (
    <div className='w-full h-content mt-28 flex lg:flex-rox flex-col justify-evenly items-center relative bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-300'>
        <Tilt/>
        <BottomTilt/>
        

        <div className=' lg:w-[45%] w-full mb-32 lg:mt-32 mt-44 self-start flex flex-col gap-10 h-content '>
            <h1 className='lg:text-7xl text-5xl text-center mb-20 tracking-wider text-white'>Contact Us <br /> We&#39;re Here <span className='font-extrabold'>to Help</span></h1>
            <p className='lg:text-3xl text-xl text-center font-light tracking-wide text-white p-2'><span className='font-bold text-4xl '>Our team is standing by</span> to assist you with any inquiries you may have. Whether you need help <span className='font-bold text-4xl'>navigating</span> the app, have a question about your account, or just want to chat about your fitness goals, we&#39;re here to help. Reach out to us today and let&#39;s make <span className='text-4xl font-bold'>magic happen together!</span></p>
            <Image className='self-center ' src={contactImage} alt='contact-image' width={400} height={400}></Image>
        </div>

        <motion.form variants={{hidden: {x: '100vw', opacity: 0}, visible: {x: 0, opacity: 1}}} initial='hidden' animate={mainControls} transition={{type: 'spring', stiffness: 70, duration: 1, delay: 0.55}} action={async (formData) => {
            sendEmail(formData);
            ref.current?.reset()
        }} ref={ref}  className='lg:mt-64 mt-5 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 mb-64 lg:w-[46%] w-[97%] h-content rounded-xl drop-shadow-2xl flex flex-row gap-8 flex-wrap justify-center items-center' >
            <h1 className='text-4xl p-1 font-bold tracking-wide'>Send A Message!</h1>
            <div className='flex lg:mt-8 mt-2  flex-col gap-3 lg:w-[14rem] w-[95%] justify-start'>
                <label htmlFor="firstname" className='text-md font-semibold tracking-widest '>Firstname</label>
                <input className='block p-2.5 w-full  text-lg text-gray-200  rounded-lg  focus:outline-teal-400  ' placeholder='Firstname ...' type="text" name='firstname' id='firstname' />
            </div>

            <div className='flex mt-8  flex-col lg:w-[18rem] w-[95%]  gap-3 justify-start'>
                <label htmlFor="firstname" className='text-md font-semibold tracking-widest '>Lastname</label>
                <input className='block p-2.5 w-full  text-lg text-gray-200 rounded-lg   focus:outline-teal-400' placeholder='Lastname ...' type="text" name='lastname' id='lastname' />
            </div>

            <div className='flex flex-col lg:w-[28rem] w-[95%]  gap-3 justify-start'>
                <label htmlFor="email" className='text-md font-semibold tracking-widest '>Email</label>
                <input className='block p-2.5 w-full  text-lg text-gray-200  rounded-lg  focus:outline-teal-400' placeholder='Email ...' type="email" name='email' id='email' />
            </div>

            <div className='flex flex-col lg:w-[32rem] w-[95%] gap-4  justify-start'>
                <label htmlFor='message' className='text-xl font-semibold tracking-widest '>Message</label>
                <textarea id="message" rows={4} name='message' className="block p-2.5 w-full h-[14rem] text-xl text-gray-200  rounded-lg   focus:outline-teal-400" placeholder="Leave a message..."></textarea>
            </div>

            <div className='w-[23rem] mb-12  flex justify-center items-center'>
                <button className='p-2.5 text-center text-white rounded-xl font-bold text-2xl tracking-wide bg-gradient-to-tr from-teal-300 via-cyan-800 to-teal-400 hover:bg-gradient-to-tl hover:from-teal-200  hover:via-cyan-800 hover:to-teal-300 hover:text-white focus:ring-2 ring-inset focus:ring-amber-200 drop-shadow-xl' type='submit'>Send Message!</button>
            </div>
        </motion.form>
    </div>
  )
}
