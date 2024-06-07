import React from 'react'

export default function AboutHeader() {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-center bg-cover">
  <h1 className="lg:text-6xl text-4xl text-center font-light tracking-wide text-gray-900">
    Welcome to 
    <span className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 bg-clip-text text-transparent font-semibold"> FitGenius</span>,
    your ultimate destination for achieving your health and fitness goals through
    <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-300 bg-clip-text text-transparent font-semibold"> science-based </span>
    techniques and
    <span className="bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300 bg-clip-text text-transparent font-semibold"> personalized</span> guidance.
  </h1>
</div>

  )
}
