import React from 'react'
import SupportHeader from '../components/supportComponents/supportHeader'
import Nav from '../components/nav'
import SupportInfo from '../components/supportComponents/supportInfo'

export default function Page() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Nav />
        <SupportHeader />
        <SupportInfo />
    </div>
  )
}
