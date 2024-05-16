import React from 'react'
import FitnessHeader from '../components/fitnessComponent/fitnessHeader'
import Nav from '../components/nav'
import FitnessInfo from '../components/fitnessComponent/fitnessInfo'

export default function Page() {
  return (
    <div>
      <Nav />
      <FitnessHeader />
      <FitnessInfo />
    </div>
  )
}
