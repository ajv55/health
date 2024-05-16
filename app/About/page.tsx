import React from 'react'
import AboutHeader from '../components/aboutComponent/aboutHeader'
import Nav from '../components/nav'
import AboutInfo from '../components/aboutComponent/aboutInfo'

export default function Page() {
  return (
    <div  className='w-full '>
        <Nav />
        <AboutHeader />
        <AboutInfo />
    </div>
  )
}
