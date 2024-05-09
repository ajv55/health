'use client';
import { RootState } from '@/app/store';
import { useSelector, useDispatch } from 'react-redux'
import { IoWarningOutline } from "react-icons/io5";
import { setDeleteModal, setList } from '@/app/slices/workoutSlice';
import {motion} from 'framer-motion'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function DeleteModal() {

    const selectWorkout = useSelector((state: RootState) => state.workout.selectWorkout);
    const deleteModal = useSelector((state: RootState) => state.workout.deleteModal);
    const dispatch = useDispatch();

    const getWorkouts = async () => {
        return axios.get('/api/getEvents').then((res: any) => dispatch(setList(res?.data?.res)));
    }

    const handleDelete = async () => {
        await axios.delete(`/api/deleteWorkout?id=${selectWorkout?.id}`).then(() => toast.success('Successfully deleted a workout'));
        getWorkouts();
        dispatch(setDeleteModal(false))
        
    }

    console.log(selectWorkout)



  return (
    <div className='w-full absolute z-20 top-0 left-0 bg-transparent backdrop-blur-lg flex justify-center items-center h-screen'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1}} transition={{duration: 0.2, type: 'spring', stiffness: 150, damping: 20}} exit={{ opacity: 0, scale: 0.5 }} className='w-[60%] h-[20rem] bg-slate-200 rounded-xl flex justify-evenly items-start drop-shadow-xl'>
            <div className='w-20 h-20 rounded-full border mt-10 bg-red-100 flex justify-center items-center '>
                <IoWarningOutline size={48} color='red' />
            </div>
            <div className='w-[73%]  flex flex-col justify-between items-start h-full'>
                <div className='flex mt-14 flex-col justify-start items-start gap-4'>
                   <h2 className='text-6xl font-bold tracking-wide'>Delete Workout</h2>
                   <p className='text-2xl font-light tracking-wide text-gray-400'>Are you sure you want to delete this workout?</p>
                </div>
                <div className='w-full flex justify-end gap-12 mb-3 items-end h-content'>
                    <button onClick={() => dispatch(setDeleteModal(false))} className='text-3xl font-bold text-white bg-gradient-to-tr rounded-2xl from-stone-900 via-stone-500 to-stone-200  text-center px-2.5 py-3 w-[20%] '>Cancel</button>
                    <button onClick={handleDelete} className='text-3xl text-white font-bold bg-gradient-to-tr rounded-2xl from-red-900 via-red-500 to-red-200 text-center px-2.5 py-3 w-[20%] '>Delete</button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
