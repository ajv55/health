import React from 'react'
import BottomTilt from '../bottomTilt'
import FaqSection from './faqSection'
import Footer from '../footer'
import style from '@/app/style.module.css'

export default function FaqInfo() {
  return (
    <div className={`${style.background} w-full relative`}>


        <div className=' flex justify-center items-center p-3'>
            <h1 className='lg:text-8xl text-6xl text-indigo-600 font-bold tracking-wider'>General Questions</h1>
        </div>
        <FaqSection />
        <p className='lg:text-5xl text-2xl mt-20 mb-20 font-medium tracking-wide p-2 text-center text-balance'>We hope this <span className='font-bold text-indigo-600'>FAQ section</span> answers your questions and helps you navigate our website effectively. If you have any other inquiries, feel free to reach out to our support team. <span className='font-bold text-indigo-600'>Happy health</span> and <span className='font-bold text-indigo-600'>fitness journey!</span></p>
        <Footer />
    </div>
  )
}
