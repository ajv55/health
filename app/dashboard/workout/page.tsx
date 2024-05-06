import WorkoutHeader from '@/app/components/workoutComponents/workoutHeader'
import WorkoutList from '@/app/components/workoutComponents/workoutList'
import React from 'react'

export default function Page
() {
  return (
    <div className='w-full h-screen flex flex-col gap-10 justify-start items-start'>
        <WorkoutHeader />
        <WorkoutList />
    </div>
  )
}