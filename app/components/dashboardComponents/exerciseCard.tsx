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
    <div  className='w-full h-content p-2 border-b'>
      <div className=' flex  justify-between border-b items-center'>
         <div className='flex flex-col w-[40%]  justify-start items-start'>
           <h2 className='text-white text-left text-balance text-2xl'>{exercise}</h2>
           <h2 className='text-white mb-3 text-md'>{workout}</h2>
         </div>
         <div className='flex w-[50%]  justify-evenly  items-center'>
           <h2 className='text-white text-lg'>Sets: {sets}</h2>
           <h2 className='text-white text-lg'>Reps: {reps}</h2>
         </div>
      </div>

     
      <p className='text-white font-light tracking-wide text-center text-lg'>{instructions}</p>
      <div className='flex justify-evenly mt-4 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h6 className='text-sm text-white'>Duration</h6>
           <h2 className='text-white font-bold text-lg'>{duration}</h2>
        </div>
        <div>
          <h6 className='text-white text-sm'>kcal</h6>
          <h2 className='text-white font-bold text-lg'>{totalCalories}</h2>
        </div>
      </div>

       <button onClick={completed} className='text-white cursor-pointer'>Completed</button>
    </div>
  )
}
