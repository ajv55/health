'use client';
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutController, LineController, LineElement, CategoryScale, LinearScale, Filler, PointElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController, LineController, LineElement, CategoryScale, LinearScale, Filler, PointElement)

export default function GeneratedMeal() {
  const [activeTab, setActiveTab] = useState('day_1');

  const [mealPlans, setMealPlans] = useState([]);


  const getMeals = async () => {
    await axios.get('/api/getUserMeals').then((res) => setMealPlans(res?.data?.data))
  }

  useEffect(() => {
    getMeals();
  }, [])

  const handleTabClick = (tabId: string) => {
    console.log(tabId)
    setActiveTab(tabId);
};


 console.log()


 const meals = mealPlans.map((mp: any) => {
  const data = {meals: mp?.meals, date: mp?.createdAt}
  return data
 });


  // const jsonMeal = mealPlans && JSON.parse(mealPlans!)
  console.log()
  // const day1: any = jsonMeal?.mealPlan?.map((jd: any) => jd && jd?.Day_1?.lunch);
  // const day2 = jsonMeal?.mealPlan?.map((jd: any) => jd?.Day_2);

  




  return (
    <div className='w-full mt-14 h-content flex flex-wrap  justify-center items-center'>
      {mealPlans.length === 0 && <div className='w-[85%] h-[34rem] flex justify-center items-center rounded-2xl shadow-lg shadow-zinc-900'>
        <h1 className=' text-5xl text-center'>No generated meal yet 😭</h1>
        </div>}
        
        {mealPlans.length !== 0 && <h1 className='text-6xl mb-10 '>Your Generated Meal Plans</h1>}
      <div className="mb-4 w-full h-screen flex flex-wrap justify-start items-start p-2 gap-3   relative  border-b border-gray-200 dark:border-gray-700" >
        {meals.map((meal: any, i: number) => {

          console.log(meal?.meals)
          return (
            <ol key={i} className='w-[98%] relative border-s border-zinc-900 dark:border-gray-700'>
              <li className='mb-10  ms-4'>
               <div className="absolute w-3 h-3 bg-zinc-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-zinc-800"></div>
                <h1 className='text-3xl font-medium text-gray-400'>{format(new Date(meal?.date), 'iiii, MMMM do yyyy')}</h1>
                {meal?.meals?.map((meal: any) => {
                  console.log(meal)

                  const mealCalories = meal?.calories;

                  const lineOption: any = {
                    responsive: true,
                indexAxis: 'x',
                scales: {
                  x: {
                    ticks: {
                      color: 'white',
                      beginAtZero: true,
                      font: {
                        size: 18
                      }
                    },
                    grid: {
                      color: 'white',
                      display: false
                    },
                    title: {
                      display: false,
                      text: '',
                      color: 'white',
                      font: {
                        size: 18,
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
                      display: true,
                      text: 'Grams',
                      color:'white',
                      font: {
                        size: 24
                      }
                    },
                    grid: {
                      color: 'white',
                      display: false
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

                  const lineData: any = {
                    labels: ['Protein', 'Carbs', 'Fat'],
                    datasets: [{
                      label: 'Grams',
                      data: [meal?.protein, meal?.carbs, meal?.fat],
                      fill: true,
                      borderColor: 'rgb(209, 169, 244)',
                      backgroundColor: 'rgba(82, 43, 104, 0.651)',
                      tension: 0.1
                    }]
                  }

                  const options = {
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white',
                                font: {
                                    size: 20
                                }
                            }
                        },
                        textCenter: {
                            calories:  mealCalories|| '' // Access the data from props or state
                        }
                    }
                };


                const data = {
                  labels: ['Calories'],
              datasets: [{
                  label: 'Calories',
                  data: [mealCalories],
                  backgroundColor: ['#e96b2c' ],
                  borderColor: ['#d7ffc1' ]
              }]
              }

              const textCenter = {
                id: 'textCenter',
                beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
                    const {ctx, data} = chart;
                    ctx.save();
                    ctx.font = 'bolder 18px sans-serif';
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.fillText(pluginOptions.calories, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
                }
            }

              return (
                <div key={meal?.description} className='w-full mt-12 border-b-2 border-zinc-900 h-content flex flex-wrap justify-center items-center gap-10 '>
                  <div className='flex   justify-evenly items-center gap-8 w-full'>
                    <div className='flex h-[19rem] flex-col justify-center w-[45%]  items-center rounded-2xl gap-5'>
                      <h4 className='text-3xl font-light tracking-wide text-gray-500'>{meal?.mealType}</h4>
                      <h1 className='text-5xl text-center text-balance font-bold tracking-wide'>{meal?.meal}</h1>
                      <p className='text-2xl text-center text-balance'>{meal?.description}</p>
                    </div>
                    
        
                    <div className='relative w-[40%] border border-zinc-600 overflow-x-auto shadow-md shadow-zinc-900 rounded-xl"'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                      <thead className='text-xs  text-gray-700 uppercase dark:text-gray-400'>
                        <tr>
                          <th scope="col" className="px-6  text-center text-2xl font-bold tracking-wider py-3 bg-gray-50 dark:bg-gray-800">
                            Ingredients
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {meal?.ingredients.map((ingredient: string, idx: number) => (

                          <tr className={`${idx % 2 === 0 ? 'bg-slate-900 text-white': 'bg-slate-200 text-gray-600' } font-medium text-xl text-center`} key={idx}>
                            <th  className="">{ingredient}</th>
                          </tr>
                        ))}
                      
                      </tbody>
                    </table>
                    </div>
                    
                  </div>

                  <div className='w-full mb-12 flex justify-evenly items-center '>
                    <div className='w-[45%] p-3 bg-gradient-to-bl from-slate-900 via-slate-700 to-slate-900  flex justify-center items-center h-[22rem] rounded-2xl'>
                      <Doughnut plugins={[textCenter]} options={options} data={data} />
                    </div>
                    

                    <div className='w-[47%] p-3 flex gap-2 flex-col justify-center items-center bg-gradient-to-bl from-slate-900 via-slate-700 to-slate-900  h-[22rem] border rounded-2xl'>
                      <h1 className='text-center text-white font-bold text-4xl'>Micronutrients</h1>
                      <Line options={lineOption} data={lineData} />
                    </div>
                  </div>

                  
                </div>
              )
            })}
              </li>
              
            </ol>
          )
          
        })}
      </div>
    </div>
  )
}
