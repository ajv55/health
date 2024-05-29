import React from 'react'
import CaloriesHeader from '@/app/components/caloriesComponent/caloriesHeader'
import CaloriesLine from '@/app/components/caloriesComponent/caloriesLine'

export default function Page
() {
  return (
    <div className=' w-full h-content flex flex-col justify-start items-center gap-8 overflow-scroll'>
        <CaloriesHeader />
        <CaloriesLine />
    </div>
  )
}
