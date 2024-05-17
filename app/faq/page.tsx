import React from 'react'
import FaqHeader from '../components/faqComponents/faqHeader'
import Nav from '../components/nav'
import FaqInfo from '../components/faqComponents/faqInfo'

export default function Page() {
  return (
    <div  className='w-full flex flex-col justify-center items-center'>
        <Nav />
        <FaqHeader /> 
        <FaqInfo />
    </div>
  )
}
