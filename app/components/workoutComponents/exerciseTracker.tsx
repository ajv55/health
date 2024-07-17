'use client';
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ExerciseTracker = () => {

    const [isOver, setIsOver] = useState(false);

  return (
    <div className="max-w-4xl  relative mx-auto bg-white rounded-lg shadow-md mt-9 p-6">
         {isOver && <div className='w-[20%] absolute top-8 -left-16 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Click here to start logging</p></div>}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-2">
       
          <button onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)} className="bg-indigo-500 absolute flex justify-center items-center -top-6 -left-7 drop-shadow-xl text-white h-14 w-14 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
            <FaPlus size={24} color='white' />
          </button>
          <span className="text-gray-700 font-semibold">Exercise</span>
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
        <div className="bg-gray-50 p-4 mt-2 rounded-lg">
          <p className="text-gray-600">
            Only additional exercise above <span className="text-indigo-500">Sedentary</span> activity level should be included in the plan and tracked daily. Sedentary level means: A person engages in typical daily living activities (shopping, cooking, laundry, walking a few minutes to and from car/bus/train) but sits for much of the day. Sample occupations: computer programmers, office and phone jobs.
          </p>
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
