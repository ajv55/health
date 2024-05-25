'use cleint';
import { useState } from "react";
import { MdDashboard } from "react-icons/md";

export default function MobileDashHeader() {
    const [isOpen, setIsOpen] = useState(false)
  return (
     <MdDashboard onClick={() => setIsOpen(!isOpen)} className='md:hidden' size={50} color='black'/>
  )
}
