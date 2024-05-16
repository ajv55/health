import React from 'react'
import HealthHeader from '../components/healthComponents/healthHeader'
import Nav from '../components/nav'
import HealthInfo from '../components/healthComponents/healthInfo'

export default function Page() {
  return (
    <div className='w-full relative'>
      <Nav />
      <HealthHeader />
      <HealthInfo />
    </div>
  )
}
