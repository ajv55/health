import React from 'react'
import BottomTilt from '../bottomTilt'
import Share from './share'
import ExtraInfo from './extraInfo'
import MoreInfo from './moreInfo'
import Footer from '../footer'
import style from '@/app/style.module.css';

export default function PrivacyInfo() {
  return (
    <div className={`${style.background} w-full relative flex flex-col justify-center items-center h-content`} >


            <div className="lg:max-w-6xl w-[97%]  bg-slate-100 mx-auto shadow-md shadow-indigo-400 rounded-lg p-6">
        <h2 className="lg:text-6xl text-4xl text-indigo-600 font-bold mb-4">Information We Collect</h2>
        <p className=" text-xl mb-6">To provide you with personalized health and fitness recommendations, we collect the following information:</p>
        
        <div className="mb-4  ">
            <h3 className="text-3xl text-indigo-600 font-semibold mb-2">Personal Information:</h3>
            <ul className="list-disc text-xl list-inside ml-4  ">
                <li>Age</li>
                <li>Weight</li>
                <li>Height</li>
                <li>Gender</li>
                <li>Activity Level</li>
            </ul>
        </div>
        
        <div className="mb-4">
            <h3 className="text-3xl text-indigo-600  font-semibold mb-2">Usage Data:</h3>
            <ul className="list-disc text-xl list-inside ml-4  ">
                <li>Calories tracked</li>
                <li>Workout details</li>
                <li>Nutritional intake</li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-3xl text-indigo-600 font-semibold mb-2">Technical Data:</h3>
            <ul className="list-disc text-xl list-inside ml-4  ">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
            </ul>
        </div>
    </div>

    <div className="lg:max-w-6xl w-[95%] bg-slate-100 shadow-indigo-400 mx-auto my-10 p-6  rounded-lg shadow-md">
            <h2 className="lg:text-6xl text-4xl text-indigo-600 font-bold mb-6">How We Use Your Information</h2>

            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-blue-800 text-white rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zM6 20v-2c0-2.28 4.5-3.5 6-3.5s6 1.22 6 3.5v2M16 7v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7m8-4H7a2 2 0 00-2 2v1a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-600">Personalization</h3>
                        <p className="text-gray-600 text-md">To provide personalized health and fitness recommendations, including calorie tracking, workout plans, and nutritional guidance.</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-green-500 text-white rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3-3 3 3m0 6l-3 3-3-3"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-600">Service Improvement</h3>
                        <p className="text-gray-600 text-md">To enhance and improve our website and services based on user feedback and usage data.</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-yellow-500 text-white rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405C19.786 14.536 20 13.28 20 12s-.214-2.536-.605-3.595L20 7H15l-1.405 1.405C12.536 7.214 11.28 7 10 7s-2.536.214-3.595.605L5 7H0l1.405 1.405C.214 9.464 0 10.72 0 12s.214 2.536.605 3.595L0 17h5l1.405-1.405C7.464 16.786 8.72 17 10 17s2.536-.214 3.595-.605L15 17zm0-5.5V5h2m-4 0h2m4 0h2"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-600">Communication</h3>
                        <p className="text-gray-600 text-md ">To send you updates, newsletters, and other information related to your health and fitness goals, if you have opted in to receive such communications.</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-red-500 text-white rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V7h2v4h3l-4 4-4-4h3zm-5-3V5c0-2.28 4.5-3.5 6-3.5s6 1.22 6 3.5v3"></path>
                            </svg>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-2xl font-semibold text-indigo-600">Research</h3>
                        <p className="text-gray-600 text-md">To conduct research and analysis to improve our science-based techniques for weight loss and health management.</p>
                    </div>
                </div>
            </div>
        </div>

        <Share />
        <ExtraInfo />
        <MoreInfo />
        <p className='lg:text-4xl text-2xl mt-20 text-gray-600 mb-20 w-[95%] text-center font-bold tracking-wide text-balance'>Thank you for trusting FitGenius with your health and fitness journey. We are committed to protecting your privacy and helping you achieve your goals in a safe and secure manner.</p>
        <Footer />

    </div>
  )
}
