'use client';
import { motion } from "framer-motion"
import {signOut,useSession} from 'next-auth/react';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

type SettingProps = {
    closeOnClick?: () => void;
}

export default function Setting({closeOnClick}: SettingProps) {

    const {data: session} = useSession();
    const router = useRouter();

    if(!session) {
        router.push('/')
    }


   

  return (
    <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} exit={{ x: "-100%" }} className='w-full z-20 absolute top-0 left-0 rounded-2xl h-full bg-stone-300'>
        <h1>setting</h1>
        <button onClick={closeOnClick}>close</button>
        <Link href='/signOut'>sign out</Link>
    </motion.div>
  )
}
