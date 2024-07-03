import { RootState } from '@/app/store';
import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import PdfComponent from './pdfComponent';


const CaloriesAnalysis = () => {
  

  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const total = useSelector((state: RootState) => state.log.totals);
  const grams = useSelector((state: RootState) => state?.log?.grams);
  const proteinPercentage = useSelector((state: RootState) => state.weight.currentProteinPercentage) ?? 0;
  const carbsPercentage = useSelector((state: RootState) => state.weight.currentCarbsPercentage) ?? 0;
  const fatPercentage = useSelector((state: RootState) => state.weight.currentFatPercentage) ?? 0;

  console.log(grams)
  console.log(proteinPercentage)

  const data = [
    { name: 'Carbs', target: Math.round(grams?.carbPercent), actual: proteinPercentage },
    { name: 'Protein', target: Math.round(grams?.proteinPercent), actual: carbsPercentage },
    { name: 'Fat', target: Math.round(grams?.fatPercent), actual: fatPercentage },
  ];

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Calories Analysis on {formattedDate}</h2>
      <div className="mb-6">
        <h3 className="text-xl text-indigo-600">Calories from Macronutrients</h3>
        <div className="flex justify-between items-center text-indigo-600 mb-2">
          <span>Jun 26 to Jul 2</span>
          <span>7 days</span>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-indigo-700">{item.name}</span>
              <span className="text-indigo-500">{item.actual}% cals, {item.target}% under</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4">
              <div
                className="bg-indigo-500 h-4 rounded-full"
                style={{ width: `${item.target}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <PdfComponent />
    </div>
  );
};

export default CaloriesAnalysis;

