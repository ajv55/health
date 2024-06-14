// components/LogDailySteps.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setStepsModal } from '@/app/slices/logSlice';

type LogDailyStepsProps = {
    isOpen?: () => void
}

const LogDailySteps = () => {
  const [steps, setSteps] = useState('');
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);
  const dispatch = useDispatch();

  const handleSave = () => {
    // Handle save logic here
    console.log(`Saved steps: ${steps}`);
  };

  return (
    <div>
      {stepsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-20 w-full inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-slate-100 p-6 rounded-lg shadow-lg w-[35%]"
          >
            <h2 className="text-lg font-semibold mb-4 text-indigo-600">Log: Daily Steps</h2>
            <input
              type="number"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Enter steps"
            />
            <div className="flex justify-end space-x-2">
              <button
              onClick={() => dispatch(setStepsModal(false))}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LogDailySteps;
