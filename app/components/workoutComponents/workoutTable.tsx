'use client';
import { RootState } from "@/app/store";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(BarController, BarElement, Tooltip, Legend, CategoryScale, LinearScale)

type List = {
    id: string,
      userId: string,
      muscle: string,
      exercise:  string,
      weight: string | null,
      reps: string,
      sets: string,
      date: string
}

export default  function WorkoutTable() {

    const list = useSelector((state: RootState) => state.workout.list)

    const reps = list?.map((l: any) => format(new Date(l?.date), 'MMM dd, yyyy'));


    const option: any = {
        responsive: true,
    indexAxis: 'x',
    scales: {
      x: {
        ticks: {
          color: 'white',
          beginAtZero: true,
          font: {
            size: 23
          }
        },
        grid: {
          color: 'white',
        },
        title: {
          display: false,
          text: 'Days',
          color: 'white',
          font: {
            size: 35,
          }
        }
      },
      y: {
        ticks: {
          color: 'white',
          beginAtZero: true,
          font:{
            size: 18
          }
        },
        title: {
          display: false,
          text: 'Calories',
          color:'white',
          font: {
            size: 35
          }
        },
        grid: {
          color: 'white',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', 
          font: {
            size: 15
          }
        }
      }
    }
    };

    console.log(list)
  return (
    
    <ol className="relative  w-[99%]  flex flex-col justify-start items-start  border-s border-gray-800 dark:border-gray-700">                  
        {list?.map((l: List) => {
            const newDate = format(new Date(l?.date), 'MMM dd, yyyy')
            return (
                <li key={l?.id} className="mb-10  w-full ms-4">
                    <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-4xl font-normal leading-none text-gray-400 dark:text-gray-500">{newDate}</time>
                    
                    <div  className="w-full flex  justify-evenly items-center">
                        
                        <div className="relative w-[30%] overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            {l?.exercise}
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            sets/reps
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Sets
                                        </th>
                                        <td className="px-6 py-4">
                                            {l?.sets}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Reps
                                        </th>
                                        <td className="px-6 py-4">
                                            {l?.reps}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="border rounded-2xl drop-shadow-2xl bg-gradient-to-bl from-slate-900 via-slate-400 to-slate-500 w-[45%] flex justify-center items-center p-2 h-[16rem]">
                            <Bar options={option} data={{
                                labels: ['Total'],
                                datasets: [{
                                label: 'Sets',
                                data: [l?.sets],
                                backgroundColor: 'rgba(110, 254, 124, 0.876)',
                                borderColor: '#9a93ff',
                                barThickness: 50,
                                borderWidth: 2,
                                },
                                {
                                    label: 'Reps',
                                    data: [l?.reps],
                                    backgroundColor: 'rgba(254, 182, 110, 0.876)',
                                    borderColor: '#96461e',
                                    barThickness: 50,
                                    borderWidth: 2,
                                    }
                            ]
                            }} />
                        </div>
                    </div>

                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></a>
                </li>
            )
        })}
    </ol>


  )
}
