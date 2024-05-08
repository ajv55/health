import WorkoutHeader from '@/app/components/workoutComponents/workoutHeader'
import WorkoutList from '@/app/components/workoutComponents/workoutList'
import WorkoutTable from '@/app/components/workoutComponents/workoutTable'
import React from 'react'

export default function Page
() {
  return (
    <div className='w-full h-screen flex flex-col gap-10 justify-start overflow-scroll items-center'>
        <WorkoutHeader />
        <WorkoutList />
        <WorkoutTable />
    </div>
  )
}