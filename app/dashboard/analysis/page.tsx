import Tabs from '@/app/components/analysisComponents/tab'
import React from 'react'
import style from '@/app/style.module.css'

export default function Page() {
  return (
    <div className={`${style.background} w-full h-screen`}>
        <div className='max-w-6xl mx-auto bg-gray-100 rounded-lg drop-shadow-lg'>
          <Tabs />
        </div>
    </div>
  )
}
