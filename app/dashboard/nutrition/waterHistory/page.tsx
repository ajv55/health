import WaterIntake from '@/app/components/nutritionComponent/waterIntake'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full h-screen flex gap-5 flex-col justify-start items-center p-2'>
        <h1 className='text-6xl border-b-2 border-zinc-900  font-bold tracking-wide'>Your Water Intake History</h1>
        <WaterIntake />
    </div>
  )
}
