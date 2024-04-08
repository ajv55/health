'use client';
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import contactImage from '@/public/contact-svgrepo-com.svg';
import Image from 'next/image';
import { sendEmail } from '@/app/action/sendEmail';
import { useRef } from 'react';

export default function Contact() {

    const ref = useRef<HTMLFormElement>(null);

  return (
    <div className='w-full h-content mt-28 flex justify-evenly items-center relative bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-300'>
        <Tilt/>
        <BottomTilt/>
        

        <div className=' w-[45%] mb-32 mt-32 self-start flex flex-col gap-10 h-content '>
            <h1 className='text-7xl text-center mb-20 tracking-wider text-white'>Contact Us <br /> We&#39;re Here <span className='font-extrabold'>to Help</span></h1>
            <p className='text-3xl text-center font-light tracking-wide text-white p-2'><span className='font-bold text-4xl '>Our team is standing by</span> to assist you with any inquiries you may have. Whether you need help <span className='font-bold text-4xl'>navigating</span> the app, have a question about your account, or just want to chat about your fitness goals, we&#39;re here to help. Reach out to us today and let&#39;s make <span className='text-4xl font-bold'>magic happen together!</span></p>
            <Image className='self-center ' src={contactImage} alt='contact-image' width={400} height={400}></Image>
        </div>

        <form action={async (formData) => {
            sendEmail(formData);
            ref.current?.reset()
        }} ref={ref}  className='mt-64  bg-gradient-to-br from-slate-800 via-slate-100 to-slate-800 mb-64 w-[50%] h-content rounded-xl drop-shadow-2xl flex flex-row gap-8 flex-wrap justify-center items-center' >
            <div className='flex mt-8  flex-col gap-3 w-[18rem] justify-start'>
                <label htmlFor="firstname" className='text-xl font-semibold tracking-widest text-white'>Firstname</label>
                <input className='block p-2.5 w-full outline-none text-lg text-gray-200 bg-gray-800 rounded-lg   focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500' placeholder='Firstname ...' type="text" name='firstname' id='firstname' />
            </div>

            <div className='flex mt-8  flex-col w-[18rem] gap-3 justify-start'>
                <label htmlFor="firstname" className='text-xl font-semibold tracking-widest text-white'>Lastname</label>
                <input className='block p-2.5 w-full  text-lg text-gray-200 bg-gray-800 rounded-lg   focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500' placeholder='Lastname ...' type="text" name='lastname' id='lastname' />
            </div>

            <div className='flex flex-col w-[28rem] gap-3 justify-start'>
                <label htmlFor="email" className='text-xl font-semibold tracking-widest text-white'>Email</label>
                <input className='block p-2.5 w-full  text-lg text-gray-200 bg-gray-800 rounded-lg  focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500' placeholder='Email ...' type="email" name='email' id='email' />
            </div>

            <div className='flex flex-col w-[32rem] gap-4  justify-start'>
                <label htmlFor='message' className='text-xl font-semibold tracking-widest text-white'>Message</label>
                <textarea id="message" rows={4} name='message' className="block p-2.5 w-full h-[14rem] text-xl text-gray-200 bg-gray-800 rounded-lg   focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Leave a message..."></textarea>
            </div>

            <div className='w-[23rem] mb-12  flex justify-center items-center'>
                <button className='p-2.5 text-center rounded-xl font-bold text-2xl tracking-wide bg-gradient-to-tr from-orange-900 via-orange-200 to-orange-400 hover:bg-gradient-to-tl hover:from-orange-200  hover:via-orange-800 hover:to-orange-300 hover:text-white focus:ring-2 ring-inset focus:ring-amber-200 drop-shadow-xl' type='submit'>Send Message!</button>
            </div>
        </form>
    </div>
  )
}
