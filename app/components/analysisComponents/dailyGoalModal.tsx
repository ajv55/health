'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';

const DailyGoalModal = ({ onClose, handleDailyGoal, goal, setGoal }: { onClose: () => void, handleDailyGoal: () => void, goal: number; setGoal: (goal: number) => void;}) => {
  const {data: session} = useSession();
  const userDailyStepGoal = session?.user.dailyStepGoal;


  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-20 w-full inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0, transition: { duration: 0.2 } }}
          className="bg-slate-100 p-6 rounded-lg shadow-lg w-[35%]"
        >
          <div className="flex justify-between mt-4 mb-4 items-center text-center">
            <h2 className="text-lg font-semibold text-indigo-600">Set Daily Step Goal</h2>
          </div>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder={`Current goal: ${userDailyStepGoal || 'Not set'}`}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDailyGoal}
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DailyGoalModal;

