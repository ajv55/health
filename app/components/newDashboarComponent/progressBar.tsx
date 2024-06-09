'use client';
import { useSession } from "next-auth/react";

const ProgressBar = () => {
  const circumference = 2 * Math.PI * 120;
  const offset = circumference - (25 / 100) * circumference;
  const {data: session} = useSession();

  const userCalories = session?.user.calories

  return (
    <div className="relative flex  items-center justify-center w-full h-full">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="#edeffb"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="#3f22f9"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute flex flex-col justify-center items-center gap-2 text-xl font-bold">
        <span className="text-3xl text-indigo-600 font-light">0</span>
        <span className="text-xl text-gray-400 font-extralight">Calories Left</span>
        <span className="text-xl text-gray-500 font-light">{userCalories}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

