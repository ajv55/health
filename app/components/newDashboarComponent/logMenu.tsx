'use client';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setLogModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';

export default function LogMenu() {

  const logModal = useSelector((state: RootState) => state.log.logModal);
  const dispatch = useDispatch();

  const modalVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: '0' },
  };

  return (
    <motion.div
    className=" fixed top-3 left-[15rem] drop-shadow-xl bg-transparent w-full h-full flex justify-start items-start z-50"
    initial="hidden"
    animate={logModal ? 'visible' : 'hidden'}
    variants={modalVariants}
    onClick={() => dispatch(setLogModal(false))} 
    transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
  >
    <div className="bg-white rounded-lg shadow-lg flex flex-col justify-start items-start  w-[10%]">
      <button className='w-full text-left p-2 hover:bg-gradient-to-r from-white to-gray-200 hover:bg-opacity-20 text-xl hover:text-indigo-500 font-light hover:border-r-4 hover:border-indigo-600'>Log Breakfast</button>
      <button className='w-full text-left p-2 hover:bg-gradient-to-r from-white to-gray-200 hover:bg-opacity-20 text-xl font-light hover:text-indigo-500 hover:border-r-4 hover:border-indigo-600'>Log Lunch</button>
      <button className='w-full text-left p-2 hover:bg-gradient-to-r from-white to-gray-200 hover:bg-opacity-20 text-xl font-light hover:text-indigo-500 hover:border-r-4 hover:border-indigo-600'>Log Dinner</button>
      <button className='w-full text-left p-2 hover:bg-gradient-to-r from-white to-gray-200 hover:bg-opacity-20 text-xl font-light hover:text-indigo-500 hover:border-r-4 hover:border-indigo-600'>Log Snack</button>
      <button className='w-full text-left p-2 hover:bg-gradient-to-r from-white to-gray-200 hover:bg-opacity-20 text-xl font-light hover:text-indigo-500 hover:border-r-4 hover:border-indigo-600'>Log Workout</button>
    </div>
  </motion.div>
  )
}
