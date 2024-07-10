'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setStepsModal, setTodaysSteps } from '@/app/slices/logSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

const StepAnalysisModal = ({onClose}: {onClose: () => void}) => {
  const [steps, setSteps] = useState('');
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);
  const dispatch = useDispatch();

  const fetchSteps = async () => {
    await axios.get('/api/getSteps').then((res: any) => {
      if(res.status === 201){
        dispatch(setTodaysSteps(res?.data?.totalSteps))
      }
    })
  }

  const handleSave = async () => {
    // Handle save logic here
    console.log(`Saved steps: ${steps}`);
    await axios.post('/api/postSteps', steps).then((res) => {
      if(res.status === 201) {
        toast.success('Successfully added steps');
        fetchSteps();
        onClose();
      }
    })
  };

  return (
    <div>
      <motion.div
        className="fixed z-20 w-full inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-slate-100 p-6 rounded-lg shadow-lg w-[35%]"
        >
          <div className=" flex justify-between mt-4 mb-4 items-center text-center">
            <h2 className="text-lg font-semibold  text-indigo-600">Log: Daily Steps</h2>
              <Link href='/dashboard' className="text-indigo-600 hover:underline" >
                View Analytics
              </Link>
          </div>
          
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter steps"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
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
  </div>
  );
};

export default StepAnalysisModal;