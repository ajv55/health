import { format } from 'date-fns'
import React from 'react'
import {Chart as ChartJS, BarController, LineController, LineElement, BarElement, CategoryScale, LinearScale, Legend, Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LuTrash } from "react-icons/lu";
import CaloriesTable from './caloriesTable';



ChartJS.register(BarController, LineController, LineElement,  BarElement, CategoryScale, LinearScale, Tooltip, Legend)

type MealTimeProps = {
    date?: string,
    mealType?: string,
    fruit?: any,
    meat?: any,
    carb?: any,
    drink?: any,
    vegetable?: any,
    onDelete?: () => void,
}

export default function MealTimeline({date, onDelete, mealType, fruit, meat, drink, vegetable, carb}: MealTimeProps) {

    console.log(meat)

    const fruitCarbs = fruit === '' ?  0 : fruit?.carbs ;
    const meatCarbs = meat === ''  ? 0 : meat?.carbs;
    const vegetableCarbs = vegetable === '' ? 0 : vegetable?.carbs;
    const drinkCarbs = drink === '' ? 0 : drink?.carbs;
    const carbCarbs = carb === ''  ? '000' : carb?.carbs;
    const carbCleanup = carbCarbs?.slice(0, 2);
    const totalCarbs = fruitCarbs + meatCarbs + drinkCarbs + vegetableCarbs + Number(carbCleanup)
    

    const fruitProtein = fruit === '' ?  0 : fruit?.protein ;
    const meatProtein = meat === '' ?  0 : meat?.protein ;
    const vegetableProtein = vegetable === '' ?  0 : vegetable?.protein ;
    const drinkProtein = drink === '' ?  0 : drink?.protein ;
    const carbProtein = carb === '' ?  '00' : carb?.protein ;
    const carbProteinClean = carbProtein.slice(0, 1);
    const totalProtein = fruitProtein + meatProtein + drinkProtein + vegetableProtein + Number(carbProteinClean)

    const fruitFat = fruit === '' ?  0 : fruit?.fat ;
    const meatFat = meat === '' ?  0 : meat?.fat ;
    const vegetableFat = vegetable === '' ?  0 : vegetable?.fat ;
    const drinkFat = drink === '' ?  0 : drink?.fat ;
    const carbFat = carb === '' ?  '00' : carb?.fat ;
    const carbFatClean = carbFat.slice(0, 1);
    const totalFat = fruitFat + meatFat + drinkFat + vegetableFat + Number(carbFatClean)

    console.log(carbCarbs)

    const option: any = {
        indexAxis: 'x', 
        scales: {
            x: {
                ticks: {
                  color: 'white',
                  beginAtZero: true,
                  font:{
                    size: 14
                  }
                },
                title: {
                  display: true,
                  text: 'Macronutrients',
                  color:'white',
                  font: {
                    size: 18
                  }
                },
                grid: {
                  color: 'white',
                }
              },
            y: {
                ticks: {
                  color: 'white',
                  beginAtZero: true,
                  font:{
                    size: 14
                  }
                },
                title: {
                  display: true,
                  text: 'Grams',
                  color:'white',
                  font: {
                    size: 18
                  }
                },
                grid: {
                  color: 'white',
                }
              }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Position of the legend
                color: 'white',
                labels: {
                    color: 'white', 
                    font: {
                      size: 15
                    }
                  }
            },
            
        },
    };


    const data: any = {
        labels: ['Protein', 'Carbs', 'Fat'],
        datasets: [{
            label: 'Protein',
            data: [totalProtein , totalCarbs, totalFat],
            backgroundColor: 'rgba(43, 138, 185, 0.492)', // Background color for the area under the line
            borderColor: ['rgba(135, 186, 227, 0.875)', 'rgba(54, 162, 235, 0.2)', 'rgba(235, 54, 220, 0.2)'], // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: ['#36a3ebab', '#afeb36', '#ca04d5'], // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5, // Radius of the points on the line
            tension: 0.2,
            fill: true
            
        },
        {
            label: 'Carbs',
            data: [],
            backgroundColor: 'rgba(156, 250, 102, 0.2)' , // Background color for the area under the line
            borderColor: 'rgba(93, 230, 62, 0.753)' , // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5,
        },
        {
            label: 'Fat',
            data: [],
            backgroundColor: 'rgba(226, 96, 224, 0.2)' , // Background color for the area under the line
            borderColor: 'rgba(218, 95, 237, 0.816)' , // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: '#cb3fb1', // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5,
        },

    ]
    }


    const formattedDate = format(new Date(date!), 'MMM dd, yyyy' )

  return (
                    
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3  bg-zinc-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-gray-500">{formattedDate}</time>
                <div className='flex mt-6 mb-6 justify-evenly items-start'>
                    <div className='w-[45%]  h-content flex flex-wrap gap-8 justify-evenly items-center'>
                      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-bold tracking-wider text-2xl bg-gray-50 dark:bg-gray-800">
                                        {mealType}
                                    </th>
                                    <th scope="col" className="px-6 bg-slate-700 text-white font-bold tracking-wider py-3">
                                        Protein
                                    </th>
                                    <th scope="col" className="px-6 font-bold tracking-wider py-3 bg-gray-50 dark:bg-gray-800">
                                        Carbs
                                    </th>
                                    <th scope="col" className="px-6 bg-slate-700 text-white font-bold tracking-wider py-3">
                                        Fats
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {meat !== '' && meat !== null && <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {meat?.name} 
                                    </th>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider  py-4">
                                        {meat?.protein} g
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {meat?.carbs} g
                                    </td>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {meat?.fat} g
                                    </td>
                                </tr>}
                                {fruit !== '' && fruit !== null && <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {fruit?.name} 
                                    </th>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {fruit?.protein} g
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {fruit?.carbs} g
                                    </td>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {fruit?.fat} g
                                    </td>
                                </tr>}
                                {drink !== '' && drink !== null && <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {drink?.name} 
                                    </th>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {drink?.protein} g
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {drink?.carbs} g
                                    </td>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {drink?.fat} g
                                    </td>
                                </tr>}
                                {vegetable !== '' && vegetable !== null && <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {vegetable?.name} 
                                    </th>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {vegetable?.protein} g
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {vegetable?.carbs} g
                                    </td>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                        {vegetable?.fat} g
                                    </td>
                                </tr>}
                                {carb !== '' && carb !== null && <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {carb?.name} 
                                    </th>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                       {carb?.protein.replace('g', '')} g
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                       {carb?.carbs.replace('g', '')} g
                                    </td>
                                    <td className="px-6 bg-slate-700 text-white tracking-wider py-4">
                                       {carb?.fat.replace('g', '')} g
                                    </td>
                                </tr>}
                            </tbody>
                        </table>
                    </div>
                
                    </div>
                    <div className='w-[50%] h-[20rem] bg-sky-900 p-3 rounded-2xl drop-shadow-2xl flex justify-center items-center'>
                    <Line options={option} data={data} />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <div className="relative w-[55%] overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs  text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 rounded-3xl py-3 font-bold tracking-wider text-2xl bg-gray-50 dark:bg-gray-800">
                              Totals
                          </th>
                          <th scope="col" className="px-6 bg-slate-700 text-white text-lg font-bold tracking-wider py-3">
                              Protein: <span className='text-2xl font-bold '>{totalProtein.toFixed(2)} g</span>
                          </th>
                          <th scope="col" className="px-6 font-bold tracking-wider py-3 text-lg bg-gray-50 dark:bg-gray-800">
                              Carbs: <span className='text-2xl font-bold '>{totalCarbs.toFixed(2)} g</span>
                          </th>
                          <th scope="col" className="px-6 bg-slate-700 text-white text-lg font-bold tracking-wider py-3">
                              Fats: <span className='text-2xl font-bold '>{totalFat.toFixed(2)} g</span>
                          </th>
                      </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <LuTrash onClick={onDelete} className=" cursor-pointer" size={35} />
                
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{}</p>
                
            </li>
    


  )
}
