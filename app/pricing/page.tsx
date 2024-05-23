import React from 'react'
import PricingHeader from '../components/pricingComponent.tsx/pricingHeader';
import { FiActivity } from "react-icons/fi";
import PricingNav from '../components/pricingComponent.tsx/pricingNav';
import PricingCards from '../components/pricingComponent.tsx/pricingCards';
import Footer from '../components/footer';

export default function Page() {
  return (
    <div className='w-full'>
       <PricingNav />
       <PricingHeader />
       <PricingCards />
       <Footer />
    </div>
  )
}
