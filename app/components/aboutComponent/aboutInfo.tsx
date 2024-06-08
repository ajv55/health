import React from 'react'
import BottomTilt from '../bottomTilt'
import Footer from '../footer'
import Link from 'next/link'
import Tilt from '../tilt'
import style from '@/app/style.module.css';

export default function AboutInfo() {
  return (
    <div className={`${style.background} w-full relative`}>
        <div className='w-full  flex justify-center items-center p-3 lg:p-4'>
            <p className='lg:mt-28 lg:w-[98%] mt-32 text-gray-500 lg:text-4xl text-2xl lg:text-center text-left font-medium tracking-wide'>At <span className=' bg-gradient-to-bl from-indigo-900 via-indigo-500 to-indigo-400 bg-clip-text text-transparent'>FitGenius</span>, we understand that the journey to a <span className='font-bold text-indigo-400'>healthier lifestyle </span> can be challenging, which is why we&#39;ve designed a <span className='font-bold text-indigo-400'>comprehensive platform</span> to support you every step of the way. Whether your aim is to shed a <span className='font-bold text-indigo-400'>few pounds</span>, <span className='font-bold text-indigo-400'>build muscle</span>, or simply adopt <span className='font-bold text-indigo-400'>healthier habits</span>, we&#39;re here to empower you with the tools and knowledge you need to succeed.</p>
        </div>

        {/* infomation section begins */}
        <div className='w-full mt-20   flex flex-col gap-9 justify-center items-center'>
            {/* first section */}
            <div className={`lg:w-[75%] w-full  py-8 px-4`}>
                <h2 className="lg:text-6xl text-5xl text-indigo-600 font-bold text-center mb-6">Our Mission</h2>
                <p className="lg:text-2xl text-xl text-gray-700 leading-relaxed text-center">Our mission is simple: to help you achieve your health and fitness goals in a sustainable and enjoyable way. We believe in the power of education, empowerment, and community support to drive lasting change. Through our evidence-based approach, we aim to demystify the complexities of nutrition and exercise, making it easier for you to make informed choices that align with your unique needs and preferences.</p>
            </div>

            {/* second section */}
            <div className="lg:w-[75%] w-full  py-8 px-4">
                <h2 className="lg:text-6xl text-5xl text-indigo-600 font-bold text-center mb-6">What Sets Us Apart</h2>
                <p className="lg:text-2xl text-xl text-gray-700 leading-relaxed text-center">Unlike fad diets and quick-fix solutions, we prioritize science-based techniques that are proven to deliver long-term results. Our platform integrates cutting-edge technology with expert guidance to provide you with a personalized experience tailored to your specific goals and preferences.</p>
            </div>

            <div className="lg:w-[65%] w-[90%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* <!-- Calorie Tracking --> */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-md shadow-indigo-400">
                <h3 className="text-2xl text-indigo-600 font-semibold mb-4">Calorie Tracking</h3>
                <p className="text-gray-700 text-lg mb-6">Our intuitive calorie tracking tool allows you to monitor your daily intake with ease, helping you stay on track towards your weight loss or maintenance goals.</p>
            </div>

            {/* <!-- Workout Tracking --> */}
            <div className="  bg-slate-100 p-6 rounded-lg shadow-md shadow-indigo-400">
                <h3 className="text-2xl text-indigo-600 font-semibold mb-4">Workout Tracking</h3>
                <p className="text-gray-700 text-lg mb-6">From cardio to strength training, our workout tracking feature enables you to log your exercises and monitor your progress over time, ensuring you&#39;re making steady gains towards your fitness objectives.</p>
            </div>

            {/* <!-- Nutritional Guidance --> */}
            <div className= " bg-slate-100 p-6 rounded-lg shadow-md shadow-indigo-400">
                <h3 className="text-2xl text-indigo-600 font-semibold mb-4">Nutritional Guidance</h3>
                <p className="text-gray-700 text-lg mb-6">Say goodbye to confusion and guesswork! Our platform offers a comprehensive nutritional guide based on the latest scientific research, helping you make informed choices about what to eat and when.</p>
            </div>

            {/* <!-- Personalized Recommendations --> */}
            <div className=" bg-slate-100  p-6 rounded-lg shadow-md shadow-indigo-400">
                <h3 className="text-2xl text-indigo-600 font-semibold mb-4">Personalized Recommendations</h3>
                <p className="text-gray-700 text-lg mb-6">By inputting your age, weight, height, and activity level, we calculate your maintenance calories and provide personalized recommendations tailored to your individual needs.</p>
            </div>
        </div>


        </div>

        <div className=" mt-20 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="lg:text-6xl text-5xl text-indigo-600  font-bold text-center mb-6">Get Started Today</h2>
                <p className="lg:text-3xl text-xl text-gray-500 text-center mb-8">Ready to take the first step towards a healthier, happier you? <Link className="text-blue-500 hover:underline hover:text-blue-600 transition duration-300 ease-in-out" href='/reg'>Sign up</Link> now to unlock access to our suite of tools and resources designed to help you <span className='font-bold text-indigo-400'>achieve your goals</span> and <span className='font-bold text-indigo-400'>transform your life</span>. Let&#39;s make your health and fitness aspirations a reality, together.</p>
                <div className="flex justify-center">
                <Link href="/reg" className=" bg-gradient-to-bl from-indigo-800 via-indigo-600 to-indigo-200 hover:bg-gradient-to-tl hover:from-indigo-300 hover:via-indigo-600 hover:to-indigo-900  text-white lg:text-3xl text-2xl font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out">Sign Up</Link>
                </div>
            </div>
        </div>

        <Footer />

    </div>
  )
}
