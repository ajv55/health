'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent } from 'react';
import WorkoutDate from './workoutDate';
type WorkoutFormProps = {
    handleCancel: () => void;
    selectWorkout?: string,
    workoutOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handlePostWorkout?: (event: FormEvent<HTMLFormElement>) => void;
    initialDate?: Date,
    onDateChange?:  (date: Date | null) => void,
    selectExercise?: string,
    exerciseOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    selectNumSets?: string,
    numSetsOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    selectNumReps?: string,
    numRepsOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    


}

export default function WorkoutForm({handleCancel, selectNumSets, selectNumReps, numRepsOnChange,  numSetsOnChange, selectWorkout, exerciseOnChange, selectExercise, onDateChange, initialDate, handlePostWorkout, workoutOnChange}: WorkoutFormProps) {
  return (
  
        <div   className='w-full absolute top-0 left-0 h-screen flex justify-center items-center bg-transparent backdrop-blur-md'>
        <motion.div initial={{ opacity: 0, y: '-100vh' }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.2, type: 'spring', stiffness: 100, damping: 10}} exit={{ opacity: 0, y: '-100vh' }}  className='w-[45%] h-content p-4 bg-slate-900 rounded-xl drop-shadow-xl'>
        <h2 className="text-3xl text-white font-bold mb-4">Log Your Workout</h2>
            <form onSubmit={handlePostWorkout} className="flex flex-wrap justify-evenly items-center gap-5" >
                <div className="mb-4 w-[45%]">
                    <label htmlFor="muscleGroup" className="block text-white text-2xl font-bold mb-2">Muscle Group</label>
                    <input
                        type="text"
                        id="muscleGroup"
                        className="w-full text-xl border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Chest, Back, Legs"
                        value={selectWorkout}
                        onChange={workoutOnChange}
                        required
                    />
                </div>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="exercise" className="block text-white font-bold text-2xl mb-2">Exercise</label>
                    <input
                        type="text"
                        id="exercise"
                        className="w-full text-xl border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Bench Press, Squats, Deadlifts"
                        value={selectExercise}
                        onChange={exerciseOnChange}
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className=" w-[45%] mb-4">
                        <label htmlFor="sets" className="block text-white font-bold text-2xl mb-2">Sets</label>
                        <input
                            type="number"
                            id="sets"
                            className="w-full text-xl border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of sets"
                            value={selectNumSets}
                            onChange={numSetsOnChange}
                            required
                        />
                    </div>
                    <div className=" w-[45%] mb-4">
                        <label htmlFor="reps" className="block text-white font-bold text-2xl mb-2">Reps</label>
                        <input
                            type="number"
                            id="reps"
                            className="w-full text-xl border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of reps per set"
                            value={selectNumReps}
                            onChange={numRepsOnChange}
                            required
                        />
                    </div>
                </div>
                <WorkoutDate initialDate={initialDate} onDateChange={onDateChange} />
                <button type="submit" className="w-[80%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Log Workout
                </button>
                <button onClick={handleCancel} type="submit" className="w-[80%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Cancel
                </button>
            </form>

        </motion.div>
    </div>
  )
}
