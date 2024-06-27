import Tabs from '@/app/components/analysisComponents/tab'
import DatePicker from '@/app/components/tabComponents/datePicker'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full h-screen bg-gray-200'>
        <Tabs />
        <DatePicker />
    </div>
  )
}
