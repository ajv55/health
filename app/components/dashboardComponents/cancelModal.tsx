'use client';
import { motion } from 'framer-motion'
import { IoWarningOutline } from 'react-icons/io5';

type CancelModalProps = {
    handleModal?: () => void,
    handleDelete?: () => void
}

export default function CancelModal({handleModal, handleDelete}: CancelModalProps) {
  return (
    <div className='w-full fixed z-20 top-0 left-0 bg-transparent backdrop-blur-lg flex justify-center items-center h-screen'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1}} transition={{duration: 0.2, type: 'spring', stiffness: 150, damping: 20}} exit={{ opacity: 0, scale: 0.5 }} className='lg:w-[60%] w-[97%] h-[20rem] bg-slate-200 rounded-xl flex justify-evenly items-start drop-shadow-xl'>
            <div className='w-20 h-20 rounded-full border mt-10 bg-red-100 flex justify-center items-center '>
                <IoWarningOutline size={48} color='red' />
            </div>
            <div className='w-[73%]  flex flex-col justify-between items-start h-full'>
                <div className='flex mt-14 flex-col justify-start items-start gap-4'>
                   <h2 className='lg:text-6xl text-2xl font-bold tracking-wide'>Cancel Subscription</h2>
                   <p className='lg:text-2xl text-lg font-light tracking-wide text-gray-400'>Are you sure you want to cancel your subscription?</p>
                </div>
                <div className='w-full flex  justify-end gap-12 mb-3 items-end h-content'>
                    <button onClick={handleModal} className='lg:text-3xl text-xl font-bold text-white bg-gradient-to-tr rounded-2xl from-stone-900 via-stone-500 to-stone-200  text-center px-2.5 py-3 lg:w-[20%] w-[35%] '>No</button>
                    <button onClick={handleDelete} className='lg:text-3xl text-xl text-white font-bold bg-gradient-to-tr rounded-2xl from-red-900 via-red-500 to-red-200 text-center px-2.5 py-3 lg:w-[20%] w-[35%] '>Yes</button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
