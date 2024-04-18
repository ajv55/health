'use client';
import {useSession} from 'next-auth/react';

export default function Table() {

    const {data: session} = useSession()

    const usersCal = Number(session?.user.calories);
    const low = usersCal - 250;
    const med = usersCal - 500; 
    const hi = usersCal - 750;


  return (


        <div className="relative overflow-x-auto shadow-md shadow-white w-full sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-slate-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-white text-xl'>
                        <th scope="col" className="px-6 py-3">
                            Impact Level
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Calories
                        </th>
                    </tr>
                </thead>
                <tbody>   
                    <tr className="odd:bg-slate-100 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 text-3xl py-4  font-bold  text-[#2bd5ff] whitespace-nowrap dark:text-white">
                            Low 
                        </th>
                        <td className="px-6 py-4 tracking-widest text-xs">
                            <span className='font-extrabold tracking-wide text-2xl text-black'>{low}</span> <br /> calories/day 
                        </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-slate-400 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-bold  text-[#fdfd30] text-3xl whitespace-nowrap dark:text-white">
                             Medium
                        </th>
                        <td className="px-6 tracking-widest text-xs text-white py-4">
                            <span className='font-extrabold tracking-wide text-2xl text-white'>{med} </span> <br /> calories/day
                        </td>
                    </tr>
                    <tr className="odd:bg-slate-100 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-bold text-[#fb2525] text-3xl whitespace-nowrap dark:text-white">
                            High
                        </th>
                        <td className="px-6 tracking-widest font-bold py-4">
                            <span className='font-extrabold text-2xl tracking-wide text-black'>{hi}</span> <br /> calories/day
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
