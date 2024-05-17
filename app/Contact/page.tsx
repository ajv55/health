import React from 'react'
import Nav from '../components/nav'
import ContactHeader from '../components/contactComponents/contactHeader'
import ContactInfo from '../components/contactComponents/contactInfo'

export default function Page() {
  return (
    <div  className=' w-full  flex flex-col justify-center items-center'>
        <Nav />
        <ContactHeader />
        <ContactInfo />
    </div>
  )
}
