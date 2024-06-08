import React from 'react'
import style from '@/app/style.module.css';

export default function AboutHeader() {
  return (
    <div className={`w-full grid-background h-[32rem] lg:mb-10 py-16 px-4 lg:px-16  flex flex-col items-center justify-center`}>
    <h1 className="text-5xl  lg:text-7xl font-bold text-center text-indigo-600 mb-4 lg:mb-6">
      Welcome to FitGenius
    </h1>
    <p className="text-xl lg:text-3xl text-center text-gray-800 max-w-4xl">
      Your ultimate destination for achieving your health and fitness goals through science-based techniques and personalized guidance.
    </p>
  </div>

  )
}
