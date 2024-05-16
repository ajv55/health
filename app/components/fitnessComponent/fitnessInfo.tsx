import React from 'react'
import Tilt from '../tilt'
import BottomTilt from '../bottomTilt'
import Footer from '../footer'

export default function FitnessInfo() {
  return (
    <div className='w-full flex flex-col justify-center items-center  relative'>
        <div className='-z-10 absolute -top-64 left-4 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <BottomTilt/>
        </div>
        {/* introduciton */}
        <div className='w-full mb-20  flex justify-start items-start'>
            <p className=' mt-28 w-[80%] text-4xl tracking-wide text-center'>Welcome to <span className='font-bold'>Fitness Finesse</span>, your go-to resource for all things fitness and nutrition. In this <span className='font-bold'>comprehensive guide</span>, we&#39;ll delve into the essentials of <span className='font-bold'>nutrition</span>, providing you with the <span className='font-bold'>knowledge</span> and tools you need to make <span className='font-bold'>informed decisions</span> about your diet and optimize your health and <span className='font-bold'>wellness</span>.</p>
        </div>

        {/* the guide */}
        <div className='w-full flex flex-col  justify-center items-center'>
            <h1 className='text-center text-8xl font-bold tracking-wide'>The <span className=' bg-gradient-to-tr from-cyan-800 via-cyan-600 to-cyan-300 bg-clip-text text-transparent'>Ultimate</span> Nutrition Guide</h1>

            <div className="max-w-6xl  mt-12 flex flex-col gap-12 mx-auto px-4 py-8">

         {/* Understanding Macronutrients */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Understanding Macronutrients</h2>
                <p className="text-gray-700 text-2xl">Macronutrients are the building blocks of a healthy diet, consisting of carbohydrates, proteins, and fats. Learn about the role of each macronutrient in your diet and how to balance them effectively to support your fitness goals.</p>
            </div>

            {/* <!-- Creating Balanced Meals --> */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Creating Balanced Meals</h2>
                <p className="text-gray-700 text-2xl">Discover how to create balanced meals that provide a mix of macronutrients, vitamins, and minerals essential for optimal health. We&#39;ll provide simple meal planning tips and sample meal ideas to get you started.</p>
            </div>

            {/* <!-- Smart Food Choices --> */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Smart Food Choices</h2>
                <p className="text-gray-700 text-2xl">Not all foods are created equal. Learn how to make smart food choices by focusing on nutrient-dense foods that nourish your body and support your fitness goals. We&#39;ll discuss the benefits of whole foods, as well as how to navigate the grocery store aisles with confidence.</p>
            </div>

            {/* <!-- Pre- and Post-Workout Nutrition --> */}
            <div className="mb-8">
                <h2 className="text-5xl  text-white font-semibold mb-4">Pre- and Post-Workout Nutrition</h2>
                <p className="text-white text-2xl">Fueling your body properly before and after exercise is crucial for performance and recovery. Discover the best foods to eat before and after your workouts to maximize energy levels, enhance muscle growth, and support recovery.</p>
            </div>

            <div className=" -z-10 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300 w-full h-[30rem] top-[80rem] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                <Tilt />
                <BottomTilt />
            </div>

            {/* <!-- Supplements --> */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Supplements</h2>
                <p className="text-gray-700 text-2xl">While a well-rounded diet should provide most of the nutrients your body needs, supplements can sometimes be beneficial. Learn about common supplements used in fitness and how to determine if they&#39;re right for you.</p>
            </div>

            {/* <!-- Hydration --> */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Hydration</h2>
                <p className="text-gray-700 text-2xl">Staying properly hydrated is essential for overall health and performance. We&#39;ll discuss the importance of hydration, how much water you need, and tips for staying hydrated throughout the day.</p>
            </div>

            {/* <!-- Nutrition for Specific Goals --> */}
            <div className="mb-8">
                <h2 className="text-5xl font-semibold mb-4">Nutrition for Specific Goals</h2>
                <p className="text-gray-700 text-2xl">Whether your goal is to lose weight, build muscle, or improve athletic performance, nutrition plays a key role. We&#39;ll provide tailored nutrition tips and strategies to help you reach your specific goals.</p>
            </div>

            </div>
        </div>
        <p className='mt-24 text-4xl tracking-wider text-center w-[85%]'>Thank you for visiting <span className='font-bold'>Fitness Finesse</span>. We hope this <span className='font-bold'>ultimate nutrition guide</span> has provided you with valuable insights and <span className='font-bold'>practical tips</span> to optimize your diet and <span className='font-bold'>enhance your overall health</span> and fitness journey. Be sure to check back regularly for more informative articles and resources to support your wellness goals.</p>
        <Footer />
    </div>
  )
}
