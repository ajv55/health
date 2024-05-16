import React from 'react'
import BottomTilt from '../bottomTilt'
import Tilt from '../tilt'
import Footer from '../footer'

export default function HealthInfo() {
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
        <div className='-z-10 absolute -top-64 left-4 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <BottomTilt/>
        </div>

        <div className=' w-full  flex justify-start items-start p-2'>
            <p className=' mt-24 text-4xl text-left font-medium tracking-wide text-balance'>In today&#39;s fast-paced world, <span className='font-bold'>finding balance</span> and <span className='font-bold'>prioritizing wellness</span> is more important than ever. Here are <span className='font-bold'>10 tips</span> to help you achieve a balanced and healthy lifestyle:</p>
        </div>

        <div className='w-[95%] mt-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* <!-- Prioritize Sleep --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Prioritize Sleep</h3>
                <p className='text-lg tracking-wide text-left'>Aim for 7-9 hours of quality sleep each night. Create a relaxing bedtime routine, limit screen time before bed, and ensure your sleep environment is comfortable and conducive to rest.</p>
            </div>

            {/* <!-- Stay Hydrated --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Stay Hydrated</h3>
                <p className='text-lg tracking-wide text-left'>Drink plenty of water throughout the day to stay hydrated and support your body&#39;s functions. Carry a reusable water bottle with you to remind yourself to drink water regularly.</p>
            </div>

            {/* <!-- Eat Nutrient-Rich Foods --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Eat Nutrient-Rich Foods</h3>
                <p className='text-lg tracking-wide text-left'>Focus on consuming a variety of whole foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats. Choose foods that nourish your body and provide essential nutrients.</p>
            </div>

            {/* <!-- Move Your Body --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Move Your Body</h3>
                <p className='text-lg tracking-wide text-left'>Incorporate regular physical activity into your routine. Find activities you enjoy, whether it&#39;s walking, dancing, yoga, or weightlifting, and aim for at least 30 minutes of exercise most days of the week.</p>
            </div>

            {/* <!-- Practice Mindfulness --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Practice Mindfulness</h3>
                <p className='text-lg tracking-wide text-left'>Take time to pause, breathe, and be present in the moment. Mindfulness practices such as meditation, deep breathing exercises, or simply spending time in nature can help reduce stress and promote relaxation.</p>
            </div>

            {/* <!-- Set Boundaries --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Set Boundaries</h3>
                <p className='text-lg tracking-wide text-left'>Learn to say no to activities or commitments that drain your energy or cause you unnecessary stress. Establishing healthy boundaries is essential for preserving your mental and emotional well-being.</p>
            </div>


            {/* <!-- Connect with Others --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Connect with Others</h3>
                <p className='text-lg tracking-wide text-left'>Cultivate meaningful relationships with friends, family, and community members. Spend time with loved ones, reach out for support when needed, and prioritize quality time together.</p>
            </div>

            {/* <!-- Manage Stress --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Manage Stress</h3>
                <p className='text-lg tracking-wide text-left'>Find healthy ways to manage stress, whether it&#39;s through exercise, relaxation techniques, journaling, or engaging in hobbies you enjoy. Recognize your stress triggers and develop coping strategies to navigate them effectively.</p>
            </div>

            {/* <!-- Practice Gratitude --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Practice Gratitude</h3>
                <p className='text-lg tracking-wide text-left'>Cultivate an attitude of gratitude by regularly acknowledging and appreciating the positive aspects of your life. Keep a gratitude journal, express thanks to others, and focus on the blessings in your life.</p>
            </div>

            {/* <!-- Seek Professional Help When Needed --> */}
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-3xl font-semibold mb-4">Seek Professional Help When Needed</h3>
                <p className='text-lg tracking-wide text-left'>If you&#39;re struggling with your mental or physical health, don&#39;t hesitate to seek support from a healthcare professional. Whether it&#39;s therapy, counseling, or medical treatment, prioritizing your well-being is important.</p>
            </div>
        </div>
        </div>
        <p className='text-3xl tracking-wide text-center mt-24'>Thank you for visiting <span className='font-bold'>Healthy Living Today</span>! We hope these wellness tips <span className='font-bold'>inspire you</span> to prioritize your health and well-being. Remember, <span className='font-bold'>small changes</span> can lead to <span className='font-bold'>big improvements </span> in your quality of life. Stay tuned for more articles and resources to support <span className='font-bold'>your journey</span> to a balanced and healthy lifestyle.</p>
        <Footer />
    </div>
  )
}
