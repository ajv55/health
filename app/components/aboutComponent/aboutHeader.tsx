import React from 'react'
import style from '@/app/style.module.css';

export default function AboutHeader() {
  return (
    <div className={`${style.background} w-full h-[20rem] py-16 px-4 lg:px-16  flex flex-col items-center justify-center`}>
    <h1 className="text-5xl mt-36  lg:text-7xl font-bold text-center text-indigo-600 mb-4 lg:mb-6">
      Welcome to FitGenius
    </h1>
    <p className="text-xl lg:text-3xl text-center text-gray-500 max-w-4xl">
      Your ultimate destination for achieving your health and fitness goals through science-based techniques and personalized guidance.
    </p>
  </div>

  )
}
