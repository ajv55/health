'use client';
import { AnimatePresence } from "framer-motion";
import WorkoutForm from "./workoutForm";
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/app/store";
import {setModalOpen} from '@/app/slices/workoutSlice'
import DeleteModal from "./deleteModal";



export default function WorkoutHeader() {
   

    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);
    const deleteModal = useSelector((state: RootState) => state.workout.deleteModal);
    const dispatch = useDispatch();
    const workoutData = useSelector((state: RootState) => state.workout.workoutData);


    console.log(workoutData)


  return (
    <div className='w-full flex relative justify-between items-center p-3 shadow-lg shadow-zinc-900'>

        <AnimatePresence>{modalOpen && <WorkoutForm />}</AnimatePresence>
        <AnimatePresence>{deleteModal && <DeleteModal />}</AnimatePresence>
        <h1 className='text-5xl font-bold tracking-wider'>Your Workout Tracker</h1>
        <button className='text-4xl px-2.5 py-3 w-[20%] rounded-3xl bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 hover:bg-gradient-to-bl hover:from-cyan-800 hover:via-cyan-400 hover:to-cyan-400' onClick={() => dispatch(setModalOpen(!modalOpen))}>Add Workout</button>
    </div>
  )
}
