import React from 'react'

type ExerciseCardProps = {
    exercise?: string,
    workout?: string,
    sets?: number,
    reps?: number,
    instructions?: string,
    duration?: string,
    totalCalories?: 250,
    completed?: (id: any) => void
}

export default function ExerciseCard({exercise, workout, sets, reps, instructions, duration, totalCalories, completed }: ExerciseCardProps) {
  return (
    <div onClick={completed} className='w-full h-content p-2 border-2'>
      <div className='border flex flex-col justify-center items-center'>
         <h2 className='text-white text-3xl'>{exercise}</h2>
         <h2 className='text-white text-md'>{workout}</h2>
      </div>

      <div className='flex justify-evenly border items-center'>
      <h2 className='text-white text-lg'>Sets: {sets}</h2>
      <h2 className='text-white text-lg'>Reps: {reps}</h2>
      </div>
      <p className='text-white font-light tracking-wide text-center'>{instructions}</p>
        
        
        <h2 className='text-white'>{duration}</h2>
        <h2 className='text-white'>{totalCalories}</h2>

        <input type="radio" />
    </div>
  )
}
