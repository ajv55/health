'use client';
import BottomTilt from '../bottomTilt'
import Footer from '../footer'
import { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { sendEmail } from "@/app/action/sendEmail";
import { FiMail, FiUser, FiMessageCircle } from 'react-icons/fi';
import style from '@/app/style.module.css'

export default function ContactInfo() {

  const ref = useRef<HTMLFormElement | null>(null);

  return (
    <div className={`${style.background} w-full relative`}>

        <div className='w-full  flex lg:gap-0 gap-8 lg:flex-row flex-col justify-evenly items-center'>
          <div className='lg:w-[37%] w-[93%] bg-white shadow-md shadow-indigo-200 rounded-md gap-6 flex flex-col justify-start items-start p-2 border lg:h-[40rem] h-content'>
              <h1 className='text-6xl text-center text-indigo-600 font-bold tracking-wide'>Contact Us</h1>
              <p className='text-lg text-left text-balance tracking-wide font-medium'>Thank you for your interest in our health and fitness platform! We&#39;re here to assist you in reaching your fitness goals and living a healthier lifestyle. Whether you have questions about calorie tracking, workouts, nutrition, or anything else, we&#39;re here to help.</p>
              <h5 className='font-bold text-indigo-600 text-3xl'>How to Reach Us</h5>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <MdEmail size={35} className='text-indigo-600'  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Email</h3>
                    <p className='text-md'>For general inquiries, feedback, or support: <span className=' text-blue-500 cursor-pointer hover:underline'>support@fitgenius.com</span></p>
                  </div>
              </div>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <FaPhone className='text-indigo-600'  size={40}  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Phone Number</h3>
                    <p className='text-md'>For urgent matters or immediate assistance, you can reach our customer support team at: +1 (XXX) XXX-XXXX</p>
                  </div>
              </div>
              <div className='w-full  flex justify-start items-center gap-4 p-3'>
                  <IoLocationSharp className='text-indigo-600'  size={65}  />
                  <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-gray-500'>Office</h3>
                    <p className='text-md'>If you prefer traditional mail correspondence or wish to visit us in person, you can find us at: 123 Fitness Avenue City, State, Zip Code Country</p>
                  </div>
              </div>
          </div>

          <form
        action={async (formData) => {
          sendEmail(formData);
          ref.current?.reset();
        }}
        ref={ref}
        className="lg:w-[40%] border border-indigo-100 w-[95%] bg-white rounded-xl shadow-indigo-200 shadow-xl flex flex-col justify-center items-center p-8 lg:p-12"
      >
        <h1 className="text-4xl lg:text-5xl w-full text-center font-bold text-indigo-600 mb-8 lg:mb-12">Send A Message!</h1>
        <div className="flex flex-col gap-6 w-full max-w-lg">
          <div className="flex items-center gap-2">
            <FiUser className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-400" placeholder="Firstname ..." type="text" name="firstname" id="firstname" />
          </div>
          <div className="flex items-center gap-2">
            <FiUser className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-400" placeholder="Lastname ..." type="text" name="lastname" id="lastname" />
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-400" placeholder="Email ..." type="email" name="email" id="email" />
          </div>
          <div className="flex items-start gap-2">
            <FiMessageCircle className="text-indigo-600 text-xl" />
            <textarea id="message" rows={4} name="message" className="block flex-1 w-full p-3 text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-400 resize-none" placeholder="Leave a message..."></textarea>
          </div>
          <button className="w-full py-3 text-center text-white rounded-xl font-bold text-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-l focus:ring-2 ring-inset focus:ring-indigo-200 drop-shadow-xl" type="submit">
            Send Message!
          </button>
        </div>
      </form>
        </div>

        <div className=' flex justify-start items-start p-2 mt-24 mb-20 w-full  '>
            <p className='lg:text-4xl text-gray-500 text-2xl text-center text-balance font-medium tracking-wide'><span className='font-bold text-indigo-600 '>Thank you</span> for your interest in our health and fitness platform! We&#39;re here to assist you in <span className='font-bold text-indigo-600 '>reaching your fitness goals</span> and living a <span className='font-bold text-indigo-600 '>healthier lifestyle</span>. Whether you have questions about <span className='font-bold text-indigo-600 '>calorie tracking</span>, <span className='font-bold text-indigo-600 '>workouts</span>, <span className='font-bold text-indigo-600 '>nutrition</span>, or <span className='font-bold text-indigo-600 '>anything else</span>, we&#39;re here to help.</p>
        </div>
        <Footer />
    </div>
  )
}
