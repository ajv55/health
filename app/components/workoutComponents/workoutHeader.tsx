'use client';
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import WorkoutForm from "./workoutForm";
import axios from "axios";
import { setDate } from "date-fns";

type DataProps = {
  workout?: string,
  date?: Date,
}

export default function WorkoutHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, SetData] = useState<DataProps>({
      workout: '',
      date: new Date,
    })

    const handleAddingWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('/api/postWorkout', {data}).then((res) => console.log(res))
    }

    const handleDateTimeChange = (date: any) => {
      SetData({...data, date: date});
    };

    console.log(data)


  return (
    <div className='w-full flex relative justify-between items-center p-3 shadow-lg shadow-zinc-900'>
        <AnimatePresence>{isOpen && <WorkoutForm onDateChange={handleDateTimeChange} initialDate={data.date} handlePostWorkout={(e) => handleAddingWorkout(e)} selectWorkout={data.workout} workoutOnChange={(e) => SetData({...data, workout: e.target.value})} handleCancel={() => setIsOpen(false)} />}</AnimatePresence>
        <h1 className='text-5xl font-bold tracking-wider'>Your Workout Tracker</h1>
        <button className='text-4xl px-2.5 py-3 w-[20%] rounded-3xl bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 hover:bg-gradient-to-bl hover:from-cyan-800 hover:via-cyan-400 hover:to-cyan-400' onClick={() => setIsOpen(!isOpen)}>Add Workout</button>
    </div>
  )
}
