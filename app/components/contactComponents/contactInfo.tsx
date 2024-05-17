'use client';
import BottomTilt from '../bottomTilt'
import Footer from '../footer'
import { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { sendEmail } from "@/app/action/sendEmail";

export default function ContactInfo() {

  const ref = useRef<HTMLFormElement | null>(null);

  return (
    <div className='w-full  relative'>
        <div className='-z-10 absolute -top-64 left-4 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <BottomTilt />
        </div>

        <div className='w-full mt-44 flex justify-evenly items-center'>
          <div className='w-[37%] shadow-md shadow-zinc-900 rounded-md gap-6 flex flex-col justify-start items-start p-2 border h-[40rem] '>
              <h1 className='text-6xl text-center font-bold tracking-wide'>Contact Us</h1>
              <p className='text-lg text-left text-balance tracking-wide font-medium'>Thank you for your interest in our health and fitness platform! We&#39;re here to assist you in reaching your fitness goals and living a healthier lifestyle. Whether you have questions about calorie tracking, workouts, nutrition, or anything else, we&#39;re here to help.</p>
              <h5 className='font-bold text-3xl'>How to Reach Us</h5>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <MdEmail size={35}  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Email</h3>
                    <p className='text-md'>For general inquiries, feedback, or support: <span className=' text-blue-500 cursor-pointer hover:underline'>support@fitgenius.com</span></p>
                  </div>
              </div>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <FaPhone size={40}  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Phone Number</h3>
                    <p className='text-md'>For urgent matters or immediate assistance, you can reach our customer support team at: +1 (XXX) XXX-XXXX</p>
                  </div>
              </div>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <IoLocationSharp size={65}  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Office</h3>
                    <p className='text-md'>If you prefer traditional mail correspondence or wish to visit us in person, you can find us at: 123 Fitness Avenue City, State, Zip Code Country</p>
                  </div>
              </div>
          </div>

          <form action={async (formData) => {
              sendEmail(formData);
              ref.current?.reset()
          }} ref={ref}  className='  bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200  w-[40%] p-4 h-content rounded-xl shadow-md shadow-zinc-900 flex flex-row gap-4 flex-wrap justify-center items-center' >
              <h2 className="text-6xl  w-full font-bold tracking-wide">Send Message</h2>
              <div className='flex  flex-col gap-3 w-[14rem] justify-start'>
                  <label htmlFor="firstname" className='text-md font-semibold tracking-widest '>Firstname</label>
                  <input className='block p-2.5 w-full  text-lg text-gray-200  rounded-lg  focus:outline-teal-400  ' placeholder='Firstname ...' type="text" name='firstname' id='firstname' />
              </div>

              <div className='flex  flex-col w-[18rem] gap-3 justify-start'>
                  <label htmlFor="firstname" className='text-md font-semibold tracking-widest '>Lastname</label>
                  <input className='block p-2.5 w-full  text-lg text-gray-200 rounded-lg   focus:outline-teal-400' placeholder='Lastname ...' type="text" name='lastname' id='lastname' />
              </div>

              <div className='flex flex-col w-[28rem] gap-3 justify-start'>
                  <label htmlFor="email" className='text-md font-semibold tracking-widest '>Email</label>
                  <input className='block p-2.5 w-full  text-lg text-gray-200  rounded-lg  focus:outline-teal-400' placeholder='Email ...' type="email" name='email' id='email' />
              </div>

              <div className='flex flex-col w-[32rem] gap-4  justify-start'>
                  <label htmlFor='message' className='text-xl font-semibold tracking-widest '>Message</label>
                  <textarea id="message" rows={4} name='message' className="block p-2.5 w-full h-[14rem] text-xl text-gray-200  rounded-lg   focus:outline-teal-400" placeholder="Leave a message..."></textarea>
              </div>

              <div className='w-[23rem]  flex justify-center items-center'>
                  <button className='p-2.5 text-center text-white rounded-xl font-bold text-2xl tracking-wide bg-gradient-to-tr from-teal-300 via-cyan-800 to-teal-400 hover:bg-gradient-to-tl hover:from-teal-200  hover:via-cyan-800 hover:to-teal-300 hover:text-white focus:ring-2 ring-inset focus:ring-amber-200 drop-shadow-xl' type='submit'>Send Message!</button>
              </div>
          </form>
        </div>

        <div className=' flex justify-start items-start p-2 mt-24 w-[85%]  '>
            <p className='text-4xl text-center text-balance font-medium tracking-wide'>Thank you for your interest in our health and fitness platform! We&#39;re here to assist you in reaching your fitness goals and living a healthier lifestyle. Whether you have questions about calorie tracking, workouts, nutrition, or anything else, we&#39;re here to help.</p>
        </div>
        <Footer />
    </div>
  )
}
