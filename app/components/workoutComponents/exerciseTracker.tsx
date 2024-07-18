'use client';
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const ExerciseTracker = () => {

    const [isOver, setIsOver] = useState(false);
    const [isOverSearch, setIsOverSearch] = useState(false);

  return (
    <div className="w-[89%]  relative mx-auto bg-white rounded-lg shadow-md mt-9 p-6">
         {isOver && <div className='w-[20%] absolute top-8 -left-16 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Click here to start logging</p></div>}
         {isOverSearch && <div className='w-[10%] absolute top-14 -left-1 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Find Exercise</p></div>}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-2">
          <Link href='/dashboard/workout/search?tab=search' onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)} className="bg-indigo-500 absolute flex justify-center items-center -top-6 -left-7 drop-shadow-xl text-white h-14 w-14 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
            <FaPlus size={24} color='white' />
          </Link>
          <Link onMouseOver={() => setIsOverSearch(true)} onMouseLeave={() => setIsOverSearch(false)} href='/dashboard/workout/search?tab=search'><IoSearchOutline size={26} color="black" /></Link>
        </div>
        <div className="flex space-x-4">
          <button className="text-indigo-600 hover:underline">Find & Log</button>
          <button className="text-indigo-600 hover:underline">Quick Log</button>
          <button className="text-indigo-600 hover:underline">Log Custom</button>
          <button className="text-indigo-600 hover:underline">Create Custom</button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
          <span className="text-gray-500">Calories</span>
          <span className="text-gray-500">Notes</span>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-indigo-600">
        <button className="hover:underline">Day Report</button>
        <button className="hover:underline">Daily Analysis</button>
      </div>
    </div>
  );
};

export default ExerciseTracker;
