'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoCheckmarkDoneCircle, IoCalendarOutline } from "react-icons/io5";

const WorkoutCompleted: React.FC = () => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg drop-shadow-lg max-w-lg mx-auto  relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
    >
      {/* Icon Animation */}
      <motion.div
        className="flex justify-center mb-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
      >
        <IoCheckmarkDoneCircle size={100} className="text-indigo-500" />
      </motion.div>

      {/* Text Animation */}
      <motion.h2
        className="text-3xl font-bold text-center text-indigo-600 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Well Done! 🎉
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 text-lg mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        You have successfully completed today&#39;s workout plan. Keep up the hard work and come back tomorrow for your next workout!
      </motion.p>

      {/* Calendar Icon */}
      <motion.div
        className="flex flex-col items-center justify-center mt-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
    
        transition={{ type: 'spring', stiffness: 100, delay: 1 }}
      >
        <IoCalendarOutline size={50} className="text-indigo-500" />
        <Link className='text-indigo-400 text-lg hover:underline hover:underline-offset-4' href='/dashboard/workout'>Back to Exercise Tracker</Link>
      </motion.div>

      <motion.p
        className="text-center text-gray-700 text-sm mt-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        You can generate your next workout plan tomorrow!
      </motion.p>

    </motion.div>
  );
};

export default WorkoutCompleted;
