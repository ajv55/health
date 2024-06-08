
import BottomTilt from '../bottomTilt'
import Footer from '../footer'
import SupportMoreInfo from './supportMoreInfo'
import style from '@/app/style.module.css'

export default function SupportInfo() {
  return (
    <div className={`${style.background} w-full relative flex flex-col justify-center items-center`}>

        <div className='w-full  flex justify-start items-start p-2'>
            <p className='lg:text-4xl text-2xl font-medium text-center text-balance tracking-wide'>Welcome to our <span className='font-bold text-indigo-600'>Health and Fitness</span> support page! Here, you&#39;ll find everything you need to get the most out of our platform, from tracking your calories and workouts to following a <span className='font-bold text-indigo-600'>science-based</span> nutritional guide. Our goal is to help you lose weight and achieve your fitness goals using personalized, <span className='font-bold text-indigo-600'>data-driven techniques</span>.</p>
        </div>

        <div className="max-w-6xl mt-8  mx-auto p-6">
            <h1 className="lg:text-6xl text-5xl font-bold text-center text-indigo-600  mb-8">Health and Fitness Support</h1>

            {/* <!-- Profile Setup Section --> */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md shadow-indigo-400">
                <h2 className="lg:text-4xl text-3xl font-semibold text-indigo-600 mb-4">1. Setting Up Your Profile</h2>
                <p className="text-gray-600 text-xl mb-4">To begin, create your profile by providing your:</p>
                <ul className="list-disc text-xl list-inside text-gray-600 mb-4">
                <li>Age</li>
                <li>Weight</li>
                <li>Height</li>
                <li>Activity Level</li>
                </ul>
                <p className="text-gray-600 text-xl">This information helps us calculate your maintenance calories, which is the number of calories you need to maintain your current weight. Based on this, we can tailor a weight loss plan that&#39;s right for you.</p>
            </section>

            {/* <!-- Calorie Tracking Section --> */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md shadow-indigo-400">
                <h2 className="lg:text-4xl text-3xl font-semibold text-indigo-600 mb-4">2. Tracking Your Calories</h2>
                <p className="text-gray-600 text-xl mb-4">Once your profile is set up, you can start tracking your calories. Here&#39;s how:</p>
                <ul className="list-disc text-xl list-inside text-gray-600 mb-4">
                <li><strong>Log Your Meals:</strong> Enter the foods you eat each day into our calorie tracker. Our database includes thousands of foods with their nutritional information to make this easy.</li>
                <li><strong>Stay Within Your Limits:</strong> Based on your maintenance calories, we will provide a daily calorie goal to help you lose weight.</li>
                </ul>
            </section>

            {/* <!-- Workout Logging Section --> */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md shadow-indigo-400">
                <h2 className="lg:text-4xl text-3xl font-semibold text-indigo-600 mb-4">3. Logging Your Workouts</h2>
                <p className="text-gray-600 text-xl mb-4">Tracking your physical activity is just as important as tracking your calories. To log your workouts:</p>
                <ul className="list-disc list-inside text-xl text-gray-600 mb-4">
                <li><strong>Choose Your Activity:</strong> Select from a wide range of exercises, from cardio to strength training.</li>
                <li><strong>Enter Duration and Intensity:</strong> Input how long you worked out and the intensity of your session.</li>
                <li><strong>Monitor Your Progress:</strong> Our system will calculate the calories burned and update your daily totals.</li>
                </ul>
            </section>
            </div>

            <SupportMoreInfo />
            <p className='lg:text-5xl text-2xl mt-20 mb-20 font-medium w-[95%] text-center tracking-wider'>We&#39;re here to help you every step of the way on <span className='font-bold text-indigo-600'>your health</span> and <span className='font-bold text-indigo-600'>fitness journey.</span> Let&#39;s achieve your goals together!</p>
            <Footer />

    </div>
  )
}
