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
    
    <ol className="relative  w-[99%] z-10  flex flex-col justify-start items-center  border-s border-gray-800 dark:border-gray-700">  
    <h1 className="text-6xl w-[65%] p-2 mb-12 font-bold shadow-zinc-900 shadow-lg text-center tracking-wide">Your Workout History</h1>                
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
                                        <th scope="col" className="px-6 py-3 text-xl tracking-wider bg-gray-50 dark:bg-gray-800">
                                            {l?.exercise}
                                        </th>
                                        <th scope="col" className="px-6 text-xl tracking-wider bg-slate-700 text-white py-3">
                                            sets/reps
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 text-lg tracking-wide font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Sets
                                        </th>
                                        <td className="px-6 bg-slate-700 text-lg tracking-wide text-white py-4">
                                            {l?.sets}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 text-lg tracking-wide font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Reps
                                        </th>
                                        <td className="px-6 bg-slate-700 text-lg tracking-wide text-white py-4">
                                            {l?.reps}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="border rounded-2xl drop-shadow-2xl bg-gradient-to-bl from-purple-900 via-slate-400 to-cyan-500 w-[37%] flex justify-center items-center p-5 h-[16rem]">
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

                    
                </li>
            )
        })}
    </ol>


  )
}
