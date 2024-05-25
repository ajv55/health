import Link from 'next/link'
import { signOut } from 'next-auth/react'
import ProfileHeader from '../components/dashboardComponents/profileHeader';
import { IoMdAnalytics } from "react-icons/io";
import Image from 'next/image';
import CalImg from '@/public/calories-svgrepo-com.svg';
import NutritionImg from '@/public/nutrition-svgrepo-com (1).svg';
import WorkoutImg from '@/public/workout-day-svgrepo-com.svg';
import { MdDashboard } from "react-icons/md";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className= 'w-full bg-slate-100 relative h-screen rounded-tr-lg flex flex-col lg:flex-row lg:flex-1 '>
      {/* <ProfileHeader /> */}
      <MdDashboard className='md:hidden' size={50} color='black'/>
        <nav className='lg:flex hidden flex-col w-[8%] justify-evenly items-center  text-2xl bg-slate-500  h-screen'>
            <Link className='mt-16'  href='/dashboard'><IoMdAnalytics size={50} color='white'/></Link>
            <Link className='' href='/dashboard/calories'><Image src={CalImg} alt='caloires-img' width={85} height={85}></Image></Link>
            <Link className=''  href='/dashboard/workout'><Image src={WorkoutImg} alt='workout-img' width={55} height={55}></Image></Link>
            <Link className=''  href='/dashboard/nutrition'><Image src={NutritionImg} alt='nutrition-img' width={55} height={55}></Image></Link>
        </nav>
        {children}
    </div>
  )
}
