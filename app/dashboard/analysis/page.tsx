import Tabs from '@/app/components/analysisComponents/tab'
import React from 'react'
import style from '@/app/style.module.css'

export default function Page() {
  return (
    <div className={`${style.background} w-full flex justify-center items-start h-screen`}>
        <div className='w-[95%] mx-auto bg-gray-100 rounded-lg mt-8 drop-shadow-xl'>
          <Tabs />
        </div>
    </div>
  )
}
