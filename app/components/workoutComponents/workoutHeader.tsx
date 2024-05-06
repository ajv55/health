'use client';
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import WorkoutForm from "./workoutForm";
import axios from "axios";
import { setDate } from "date-fns";
import toast from "react-hot-toast";
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/app/store";
import {setModalOpen} from '@/app/slices/workoutSlice'

type DataProps = {
  workout?: string,
  date?: Date,
  exercise?: string,
  sets?: string,
  reps?: string
}

export default function WorkoutHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<DataProps>({
      workout: '',
      date: new Date,
      exercise: '',
      reps: '',
      sets: ''
    });

    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);
    const dispatch = useDispatch();

    const handleAddingWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('/api/postWorkout', {data}).then(() => toast.success('Added A Workout'))
        setData({});
        setIsOpen(false);
    }

    const handleDateTimeChange = (date: any) => {
      setData({...data, date: date});
    };


    console.log(modalOpen)


  return (
    <div className='w-full flex relative justify-between items-center p-3 shadow-lg shadow-zinc-900'>
        <AnimatePresence>{modalOpen && <WorkoutForm selectNumSets={data.sets} numSetsOnChange={(e) => setData({...data, sets: e.target.value})} selectNumReps={data.reps} numRepsOnChange={(e) => setData({...data, reps: e.target.value})} selectExercise={data.exercise} exerciseOnChange={(e) => setData({...data, exercise: e.target.value})} onDateChange={handleDateTimeChange} initialDate={data.date} handlePostWorkout={(e) => handleAddingWorkout(e)} selectWorkout={data.workout} workoutOnChange={(e) => setData({...data, workout: e.target.value})} handleCancel={() => dispatch(setModalOpen(false))} />}</AnimatePresence>
        <h1 className='text-5xl font-bold tracking-wider'>Your Workout Tracker</h1>
        <button className='text-4xl px-2.5 py-3 w-[20%] rounded-3xl bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 hover:bg-gradient-to-bl hover:from-cyan-800 hover:via-cyan-400 hover:to-cyan-400' onClick={() => dispatch(setModalOpen(!modalOpen))}>Add Workout</button>
    </div>
  )
}
