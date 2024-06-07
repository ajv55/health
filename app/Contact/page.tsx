import React from 'react'
import Nav from '../components/nav'
import ContactHeader from '../components/contactComponents/contactHeader'
import ContactInfo from '../components/contactComponents/contactInfo'
import Tilt from '../components/tilt'
import BottomTilt from '../components/bottomTilt'

export default function Page() {
  return (
    <div  className=' w-full relative flex flex-col justify-center items-center'>
        <Nav />
        <ContactHeader />
        <ContactInfo />
    </div>
  )
}
