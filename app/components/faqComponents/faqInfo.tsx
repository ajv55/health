import React from 'react'
import BottomTilt from '../bottomTilt'
import FaqSection from './faqSection'
import Footer from '../footer'

export default function FaqInfo() {
  return (
    <div className='w-full relative'>
        <div className='-z-10 absolute -top-64 left-4 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <BottomTilt/>
        </div>

        <div className='mt-24 flex justify-start items-start p-3'>
            <h1 className='text-8xl font-bold tracking-wider'>General Questions</h1>
        </div>
        <FaqSection />
        <p className='text-5xl mt-24 font-medium tracking-wide p-2 text-center text-balance'>We hope this FAQ section answers your questions and helps you navigate our website effectively. If you have any other inquiries, feel free to reach out to our support team. Happy health and fitness journey!</p>
        <Footer />
    </div>
  )
}
