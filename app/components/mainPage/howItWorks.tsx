'use client';
import { motion } from 'framer-motion';

export default function RoadmapToSuccess() {
  const cardVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, boxShadow: '0px 0px 15px rgba(79,70,229,0.5)' }
  };

  return (
    <div className="bg-slate-100 py-16 px-4 lg:px-16">
      <h2 className="text-4xl lg:text-6xl font-bold text-center text-indigo-600 mb-8">Your Roadmap to Success</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Set Your Goals</h3>
          <p className="text-lg text-gray-700 mb-2">
            First things first - it&#39;s time to set your fitness goals. Whether you&#39;re looking to lose weight, build muscle, or improve your overall health, FitGenius has you covered.
          </p>
          <p className="text-lg text-gray-700">
            Simply tell us what you want to achieve, and we&#39;ll create a personalized plan to help you get there.
          </p>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Track Your Progress</h3>
          <p className="text-lg text-gray-700 mb-2">
            Once you&#39;ve set your goals, it&#39;s time to start tracking your progress. With FitGenius&#39;s intuitive tracking tools, you can monitor your workouts, log your meals, and track your progress over time.
          </p>
          <p className="text-lg text-gray-700">
            Our user-friendly interface makes it easy to see how you&#39;re progressing towards your goals and make adjustments as needed.
          </p>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Get Personalized Guidance</h3>
          <p className="text-lg text-gray-700 mb-2">
            No two fitness journeys are the same, which is why FitGenius offers personalized guidance every step of the way. From customized workout plans to personalized nutrition recommendations, our team of experts is here to support you on your journey to fitness success.
          </p>
          <p className="text-lg text-gray-700">
            Whether you need help staying motivated, making healthy choices, or overcoming obstacles, we&#39;ve got your back.
          </p>
        </motion.div>
      </div>
    </div>
  );
}




