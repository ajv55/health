import { RootState } from '@/app/store';
import { endOfWeek, format, startOfWeek, subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PdfComponent from './pdfComponent';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


const CaloriesAnalysis = () => {

  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [averageProtein, setAverageProtein] = useState(0);
  const [averageCarbs, setAverageCarbs] = useState(0);
  const [averageFat, setAverageFat] = useState(0);
  const [days, setDays] = useState(7);
  const router = useRouter();
  const {data: session} = useSession();
  const isUserActive = session?.user.isActive;

  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const grams = useSelector((state: RootState) => state?.log?.grams);
  const proteinPercentage = useSelector((state: RootState) => state.weight.currentProteinPercentage) || 0;
  const carbsPercentage = useSelector((state: RootState) => state.weight.currentCarbsPercentage) || 0;
  const fatPercentage = useSelector((state: RootState) => state.weight.currentFatPercentage) || 0;

  const startOfWeekDate = format(startOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d');
  const endOfWeekDate = format(endOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d');
  const weekRange = `${startOfWeekDate} to ${endOfWeekDate}`;

  console.log(grams)

  const fetchPercentage = async () => {
    await axios.get(`/api/getLastSevenPercentage?days=${days}`).then((res: any) => {
      console.log('res', res)
      if(res.status === 201){
        setProtein(Math.round(res?.data?.proteinPercentage));
        setFat(Math.round(res?.data?.fatPercentage));
        setCarbs(Math.round(res?.data?.carbPercentage));
        setAverageCarbs(Math.round(res?.data?.averageCarbs));
        setAverageProtein(Math.round(res?.data?.averageProtein));
        setAverageFat(Math.round(res?.data?.averageFat))
      }
    })
  }

  useEffect(() => {
    fetchPercentage();
  }, [days]);

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDuration = parseInt(event.target.value, 10)
    setDays(newDuration);

    if(newDuration === 30 && isUserActive === false) {
      router.push('/pricing')
    }
  };

   // Calculate the start and end dates based on the selected days
   const startOfRange = days === 7
   ? format(startOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d')
   : format(subDays(currentDate!, days - 1), 'MMM d');
 const endOfRange = days === 7
   ? format(endOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d')
   : format(currentDate!, 'MMM d');
 const rangeDisplay = `${startOfRange} to ${endOfRange}`;

  const data = [
    { name: 'Protein', target: averageCarbs, actual: carbs  },
    { name: 'Carbs', target: averageProtein, actual: protein },
    { name: 'Fat', target: averageFat, actual: fat  },
  ];

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold bg-gradient-to-br from-indigo-600 via-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-4">Calories Analysis on {formattedDate}</h2>
      <div className="mb-6">
        <h3 className="text-2xl text-indigo-600">Calories from Macronutrients</h3>
        <div className="flex justify-between items-center text-indigo-600 mb-2">
          <span>{rangeDisplay}</span>
          <span>{days} days</span>
          <select
            value={days}
            onChange={handleDaysChange}
            className="bg-indigo-50 border border-indigo-300 rounded p-2 text-indigo-600"
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days {!isUserActive ? ' 🔒' : null}</option>
          </select>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-indigo-700">{item.name}</span>
              <span className="text-indigo-500">{item.actual}% cals, {item.target}% {item.target > 100 ? 'over' : 'under'}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4">
              <div
                className="bg-indigo-500 h-4 rounded-full"
                style={{ width: `${item.actual}%` }}
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

