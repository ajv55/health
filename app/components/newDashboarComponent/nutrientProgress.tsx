'use client';

import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const NutritionComponent = () => {

    const total = useSelector((state: RootState) => state.log.totals);
    const grams = useSelector((state: RootState) => state?.log?.grams);

     // Assuming you have access to the user's daily sat fat goal in grams
     const satFatGoalGrams = Math.round(grams?.satFatGrams);
     const transFatGoalGrams = Math.round(grams?.transFatGrams) || 0;
     const fiberGoalGrams = Math.round(grams?.fiberGrams);
     const sodiumGoalGrams = Math.round(grams?.sodiumMg);
     const calciumGoalGrams = Math.round(grams?.calciumMg);

     // Calculate percentage of sat fat, trans fat, fiber, sodium, calicum intake relative to the goal
   const satFatPercentage = Math.min(100, Math.round((total?.satFat / satFatGoalGrams) * 100));
   const transFatPercentage = Math.min(100, Math.round((total?.transFat / transFatGoalGrams) * 100)) || 0;
   const fiberPercentage = Math.min(100, Math.round((total?.fiber / fiberGoalGrams) * 100));
   const sodiumPercentage = Math.min(100, Math.round((total?.sodium / sodiumGoalGrams) * 100));
   const calciumPercentage = Math.min(100, Math.round((total?.calcium / calciumGoalGrams) * 100));

   console.log(transFatPercentage)
     // Calculate remaining protein based on the goal and total consumed
  const satFatLeft = Math.max(0, satFatGoalGrams - (total?.satFat || 0));
  const transFatLeft = Math.max(0, transFatGoalGrams - (total?.transFat || 0));
  const sodiumLeft = Math.max(0, sodiumGoalGrams - (total?.sodium || 0));
  const fiberLeft = Math.max(0, fiberGoalGrams - (total?.fiber || 0));
  const calciumLeft = Math.max(0, calciumGoalGrams - (total?.calcium || 0));


    const nutritionData = [
      { name: "Sat. Fat", value: `${Math.round(total.satFat) || 0} g`, target: `left ${satFatLeft || 0} g`, progress: satFatPercentage || 0 },
      { name: "Trans Fat", value: `${total.transFat || 0} g`, target: `left ${transFatLeft || 0} g`, progress: transFatPercentage || 0 },
      { name: "Fiber", value: `${total.fiber || 0} g`, target: `left ${fiberLeft || 0} g`, progress: fiberPercentage || 0 },
      { name: "Sodium", value: `${Math.round(total.sodium) || 0} mg`, target: `left ${Math.round(sodiumLeft) || 0} g`, progress: sodiumPercentage || 0 },
      { name: "Calcium", value: `${Math.round(total.calcium) || 0} %`, target: `left ${calciumLeft || 0} g`, progress: calciumPercentage || 0 },
    ];
  
    return (
      <div className="p-4 w-full h-full rounded-md">
        <div className="grid grid-cols-3  justify-center items-center gap-4 text-center">
          {nutritionData.map((item, index) => (
            <div key={index} className="bg-white p-3 drop-shadow-xl rounded-md ring-1 w-24 lg:w-36 ring-indigo-400">
              <div className="text-indigo-500 font-bold">{item.name}</div>
              <div className="text-xl">{item.value}</div>
              <div>{item.target.split(' ')[0]}</div>
              <div>{item.target.split(' ')[1]}</div>
              <div className="w-full bg-indigo-50 overflow-hidden h-2 mt-2 rounded">
                <div
                  className={`bg-indigo-400 h-2  rounded`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NutritionComponent;
  