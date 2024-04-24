'use client';
import {useSession} from 'next-auth/react';
import {motion, AnimatePresence} from 'framer-motion';

export default function Table() {

    const {data: session} = useSession()

    const usersCal = Number(session?.user.calories);
    const low = usersCal - 250;
    const med = usersCal - 500; 
    const hi = usersCal - 750;

    const chartVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring' } },
        exit: { opacity: 0, x: '100vw', transition: { duration: 0.5 } },
      };


  return (
    
        <motion.div initial={{scale: 0 ,opacity: 0, x: '-100vw'}} animate={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }} whileInView={{x: 0, opacity: 1, scale: 1}}  className=" w-[48%]   ">
            <table className="w-full h-[22rem] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-slate-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-white text-3xl'>
                        <th scope="col" className="px-6 rounded-l-lg py-3">
                            Impact Paths
                        </th>
                        <th scope="col" className="px-6 rounded-r-lg py-3">
                            Calories
                        </th>
                    </tr>
                </thead>
                <tbody>   
                    <tr className="odd:bg-slate-100  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" className="px-6 rounded-l-lg text-3xl py-4  font-bold  text-[#2bd5ff] whitespace-nowrap dark:text-white">
                            Low 
                        </th>
                        <td className="px-6 py-4 rounded-r-lg tracking-widest  text-xs">
                            <span className='font-extrabold tracking-wide text-2xl text-black'>{low}</span> <br /> calories/day 
                        </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-slate-400 even:dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" className="px-6 rounded-l-lg py-4 font-bold  text-[#fdfd30] text-3xl whitespace-nowrap dark:text-white">
                             Medium
                        </th>
                        <td className="px-6 tracking-widest rounded-r-lg text-xs text-white py-4">
                            <span className='font-extrabold tracking-wide text-2xl text-white'>{med} </span> <br /> calories/day
                        </td>
                    </tr>
                    <tr className="odd:bg-slate-100    odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" className="px-6 rounded-l-lg py-4 font-bold text-[#fb2525] text-3xl whitespace-nowrap dark:text-white">
                            High
                        </th>
                        <td className="px-6 tracking-widest rounded-r-lg font-bold py-4">
                            <span className='font-extrabold text-2xl tracking-wide text-black'>{hi}</span> <br /> calories/day
                        </td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
  )
}
