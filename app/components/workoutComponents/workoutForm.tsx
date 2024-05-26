'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState } from 'react';
import WorkoutDate from './workoutDate';
import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen, setWorkoutData, setList } from '@/app/slices/workoutSlice';
import { RootState } from '@/app/store';
import axios from 'axios';
import toast from 'react-hot-toast';



export default function WorkoutForm() {

    const workoutData = useSelector((state: RootState) => state?.workout?.workoutData);
    const dispatch = useDispatch();
    

    const getWorkouts = async () => {
    
        return axios.get('/api/getEvents').then((res: any) => dispatch(setList(res?.data?.res)));
    }

    const handleAddingWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(workoutData)
        await axios.post('/api/postWorkout', {workoutData}).then(() => toast.success('Successfully added a workout')).catch((error) => console.error('error when fetch users workouts ', error)).finally(() => getWorkouts());
        dispatch(setWorkoutData({}));
        dispatch(setModalOpen(false));
        
    }

  return (
  
        <div   className='w-full z-30 absolute top-0 left-0 h-screen flex justify-center items-center bg-transparent backdrop-blur-md'>
        <motion.div initial={{ opacity: 0, y: '-100vh' }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.2, type: 'spring', stiffness: 100, damping: 10}} exit={{ opacity: 0, y: '-100vh' }}  className='lg:w-[45%] w-[96%]  h-content p-4 bg-slate-900 rounded-xl drop-shadow-xl'>
        <h2 className="lg:text-3xl text-2xl text-white font-bold mb-4">Log Your Workout</h2>
            <form onSubmit={handleAddingWorkout} className="flex flex-wrap justify-evenly items-center gap-5" >
                <div className="mb-4 w-[45%]">
                    <label htmlFor="muscleGroup" className="block text-white lg:text-2xl text-xl font-bold mb-2">Muscle Group</label>
                    <input
                        type="text"
                        id="muscleGroup"
                        className="w-full lg:text-xl text-sm border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Chest, Back, Legs"
                        value={workoutData?.workout}
                        onChange={(e) => dispatch(setWorkoutData({...workoutData, workout: e.target.value}))}
                        required
                    />
                </div>
                <div className="mb-4  w-[45%]">
                    <label htmlFor="exercise" className="block text-white font-bold lg:text-2xl text-xl mb-2">Exercise</label>
                    <input
                        type="text"
                        id="exercise"
                        className="w-full lg:text-xl text-sm border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Bench Press, Squats, Deadlifts"
                        value={workoutData?.exercise}
                        onChange={(e) => dispatch(setWorkoutData({...workoutData, exercise: e.target.value}))}
                        required
                    />
                </div>
                <div className="flex  w-full lg:flex-col flex-row md:flex-row gap-4">
                    <div className=" lg:w-[45%] w-[54%] mb-4">
                        <label htmlFor="sets" className="block text-white font-bold lg:text-2xl text-lg mb-2">Sets</label>
                        <input
                            type="number"
                            id="sets"
                            className="w-full lg:text-xl text-sm border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of sets"
                            value={workoutData?.sets}
                            onChange={(e) => dispatch(setWorkoutData({...workoutData, sets: e.target.value}))}
                            required
                        />
                    </div>
                    <div className=" w-[45%] mb-4">
                        <label htmlFor="reps" className="block text-white font-bold lg:text-2xl text-lg mb-2">Reps</label>
                        <input
                            type="number"
                            id="reps"
                            className="w-full lg:text-xl text-sm border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of reps per set"
                            value={workoutData?.reps}
                            onChange={(e) => dispatch(setWorkoutData({...workoutData, reps: e.target.value}))}
                            required
                        />
                    </div>
                </div>
                <WorkoutDate />
                <button type="submit" className="w-[80%] lg:text-xl text-lg bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Log Workout
                </button>
                <button onClick={() => dispatch(setModalOpen(false))} type="submit" className="w-[80%] bg-blue-500 lg:text-xl text-lg text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Cancel
                </button>
            </form>

        </motion.div>
    </div>
  )
}
