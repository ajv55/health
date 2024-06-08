'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import style from '@/app/style.module.css';

const FeatureCard = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {

    if(isInView) {
      console.log('isinview: ', isInView)
      mainControls.start('visible')
    }

  }, [isInView, mainControls])


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div  className={`${style.background} bg-gray-100 py-12`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-indigo-600 font-semibold tracking-wider uppercase mb-10">Features</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Achieve Your Fitness Goals with Our Comprehensive Tools
          </p>
        </div>
        <motion.div
          
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {/* Card 1 */}
          <motion.div ref={ref} transition={{duration: 0.5, stiffness: 120, type: 'spring'}} whileHover={{scale: 1.1, rotate: 5}}  className="bg-white group hover:bg-gradient-to-br hover:from-indigo-950 hover:via-indigo-700  hover:to-indigo-950 rounded-lg shadow-md p-6" variants={cardVariants}>
            <h3 className="text-lg font-semibold group-hover:text-white text-indigo-600">Precision Calorie Tracking</h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-300 font-light">Easily track your daily calorie intake with our intuitive interface.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Set personalized calorie goals based on your weight loss targets and activity level.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Get real-time feedback and insights to optimize your diet for maximum results.</p>
          </motion.div>
          {/* Card 2 */}
          <motion.div transition={{duration: 0.5, stiffness: 120, type: 'spring'}} whileHover={{scale: 1.1, rotate: -5}}  className="bg-white group hover:bg-gradient-to-br hover:from-indigo-950 hover:via-indigo-700  hover:to-indigo-950 rounded-lg shadow-md p-6" variants={cardVariants}>
            <h3 className="text-lg font-semibold group-hover:text-white  text-indigo-600">Customized Workout Plans</h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-300 font-light ">Access a variety of tailored workout plans designed by fitness experts.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Choose from different workout styles, durations, and intensity levels to suit your preferences.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Track your progress and stay motivated with built-in performance metrics and achievements.</p>
          </motion.div>
          {/* Card 3 */}
          <motion.div transition={{duration: 0.5, stiffness: 120, type: 'spring'}} whileHover={{scale: 1.1, rotate: 5}}  className="bg-white hover:bg-gradient-to-br hover:from-indigo-950 hover:via-indigo-700  hover:to-indigo-950 group rounded-lg shadow-md p-6" variants={cardVariants}>
            <h3 className="text-lg font-semibold group-hover:text-white  text-indigo-600">Expert Nutrition Guidance</h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-200 font-light">Explore our comprehensive nutrition food guide curated by nutritionists and dietitians.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Discover healthy recipes, meal plans, and dietary tips to support your weight loss journey.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300 font-light">Learn about the science behind nutrition and make informed choices for long-term success.</p>
          </motion.div>
          {/* Card 4 */}
          <motion.div transition={{duration: 0.5, stiffness: 120, type: 'spring'}} whileHover={{scale: 1.1, rotate: -5}}  className="bg-white group hover:bg-gradient-to-br hover:from-indigo-950 hover:via-indigo-700  hover:to-indigo-950 rounded-lg shadow-md p-6" variants={cardVariants}>
            <h3 className="text-lg font-semibold group-hover:text-white  text-indigo-600">Progress Tracking and Analytics</h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-300 ">Monitor your weight loss progress with detailed charts and graphs.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300">Analyze trends, identify patterns, and make data-driven decisions to stay on track.</p>
            <p className="mt-2 text-gray-600 group-hover:text-gray-300">Set milestones, celebrate achievements, and share your success with our community.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>

  );
};

export default FeatureCard;
