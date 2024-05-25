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
    
        <motion.div initial={{scale: 0 ,opacity: 0, x: '-100vw'}} animate={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }} whileInView={{x: 0, opacity: 1, scale: 1}}  className="w-[93%] lg:w-[39%]  ">
            <table className="w-full lg:h-[22rem] h-[24rem] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-slate-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-white lg:text-3xl text-2xl'>
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
                        <th scope="row" className="lg:px-6 px-4  lg:py-4 py-2 rounded-l-lg lg:text-3xl text-2xl   font-bold  text-[#2bd5ff] whitespace-nowrap dark:text-white">
                            Low 
                        </th>
                        <td className="lg:px-6 px-4 lg:py-4 py-2 rounded-r-lg tracking-widest  text-xs">
                            <span className='font-extrabold tracking-wide lg:text-2xl text-xl text-black'>{low}</span> <br /> calories/day 
                        </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-slate-400 even:dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" className="lg:px-6 px-4 lg:py-4 py-2 rounded-l-lg  font-bold  text-[#fdfd30] lg:text-3xl text-xl whitespace-nowrap dark:text-white">
                             Medium
                        </th>
                        <td className="lg:px-6 px-4 lg:py-4 py-2 tracking-widest rounded-r-lg text-xs text-white ">
                            <span className='font-extrabold tracking-wide lg:text-2xl text-xl text-white'>{med} </span> <br /> calories/day
                        </td>
                    </tr>
                    <tr className="odd:bg-slate-100    odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                        <th scope="row" className="lg:px-6 px-4 lg:py-4 py-2 rounded-l-lg font-bold text-[#fb2525] lg:text-3xl text-xl whitespace-nowrap dark:text-white">
                            High
                        </th>
                        <td className="lg:px-6 px-4 lg:py-4 py-2 tracking-widest rounded-r-lg font-bold ">
                            <span className='font-extrabold lg:text-2xl text-xl tracking-wide text-black'>{hi}</span> <br /> calories/day
                        </td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
  )
}
