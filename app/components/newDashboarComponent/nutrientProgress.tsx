'use client';

import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const NutritionComponent = () => {

    const total = useSelector((state: RootState) => state.log.totals);
    const grams = useSelector((state: RootState) => state?.log?.grams);
    console.log(grams)
    console.log(total)

     // Assuming you have access to the user's daily sat fat goal in grams
     const satFatGoalGrams = Math.round(grams?.satFatGrams);
     const transFatGoalGrams = Math.round(grams?.transFatGrams);
     const fiberGoalGrams = Math.round(grams?.fiberGrams);
     const sodiumGoalGrams = Math.round(grams?.sodiumMg);
     const calciumGoalGrams = Math.round(grams?.calciumMg);

     // Calculate percentage of sat fat, trans fat, fiber, sodium, calicum intake relative to the goal
   const satFatPercentage = Math.min(100, Math.round((total?.satFat / satFatGoalGrams) * 100));

    const nutritionData = [
      { name: "Sat. Fat", value: `${satFatPercentage} g`, target: `left ${satFatGoalGrams} g`, progress: 0 },
      { name: "Trans Fat", value: 0, target: `left ${transFatGoalGrams} g`, progress: 0 },
      { name: "Fiber", value: 1, target: `left ${fiberGoalGrams} g`, progress: 3 },
      { name: "Sodium", value: 34, target: `left ${sodiumGoalGrams} g`, progress: 0 },
      { name: "Calcium", value: "1%", target: `left ${calciumGoalGrams} g`, progress: 1 },
    ];
  
    return (
      <div className="p-4 bg-indigo-50 rounded-md">
        <div className="grid grid-cols-3 justify-center items-center gap-4 text-center">
          {nutritionData.map((item, index) => (
            <div key={index}>
              <div className="text-indigo-400 font-bold">{item.name}</div>
              <div className="text-xl">{item.value}</div>
              <div>{item.target.split(' ')[0]}</div>
              <div>{item.target.split(' ')[1]}</div>
              <div className="w-full bg-gray-200 h-2 mt-2 rounded">
                <div
                  className={`bg-indigo-400 h-2 rounded`}
                  style={{ width: `${item.progress * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NutritionComponent;
  