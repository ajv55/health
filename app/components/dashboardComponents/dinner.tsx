'use client';

import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import FoodCard from './foodCard';

ChartJS.register(ArcElement);


export default  function Dinner() {

  const [res, setRes] = useState<any>()

  const getNutrition = async () => {
    try {
      const guide = await fetch('/api/food', { method: 'GET' });
      const res = await guide.json();
      console.log(res)
      setRes(res)
  } catch (error) {
      console.error('Something went wrong:', error);
  }
  }

  useEffect(() => {
    if(!getNutrition) {
      return console.log('nutrition meal guide doesnt exist')
    }
    getNutrition()
  }, [])


    const nutritiionGuide = res?.nut?.data?.nutrition_guide
    const day1dinner = nutritiionGuide?.day_1?.dinner?.ingredients; 

    const day1 = nutritiionGuide?.day_1;
    const totalCalForDay1Dinner = day1dinner?.map((d: any) => d.carbs);
    const totalDay1Protein = day1dinner?.map((d: any) => d.protein).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay1Fat = day1dinner?.map((d: any) => d.fat).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay1Carbs = totalCalForDay1Dinner?.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)

    const option: any = { 
        plugins: {
          title: {
            display: true,
            text: 'Calories',
            color: 'black',
            font: {
              size: 20
            }
          }
        }
      }
    
      const data: any = {
        labels: ['Carbs', 'Protein', 'Fat'],
        datasets: [{
          label: 'Calories',
          data: [totalDay1Carbs, totalDay1Protein, totalDay1Fat],
          backgroundColor: ['#e5d453', '#570af0', '#0368a3'],
          borderColor: ['#f9ffb7', '#d5aeff', '#9bcdff'],
          hoverOffset: 6,
        }]
      }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 20px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.fillText('', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
  return (
    <div className="w-[27%]   drop-shadow-2xl  h-content flex flex-col justify-center items-center rounded-xl ">
    <h1 className='text-7xl mb-7 font-bold tracking-wide text-center'>Dinner</h1>
    <div className="w-full h-[17rem] rounded-md bg-cover bg-center flex  justify-center items-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${day1?.dinner?.img})`}}>
    <h3 className="text-4xl text-center text-white font-bold">{nutritiionGuide?.day_1?.dinner?.meal}</h3>
    </div>
    <div className='w-full flex flex-col justify-evenly items-centers '>
      <div className='w-full mt-3 h-[20rem] flex justify-center items-center'>
      <Doughnut plugins={[textCenter]} options={option} data={data}/>
      </div>
      <h1 className='text-5xl mt-14 mb-10 font-bold tracking-wide text-center'>Ingredients</h1>
      <div className='w-full h-content flex flex-col justify-center items-center'>
      {day1dinner?.map((ing: any, i: number ) => <FoodCard key={i} carbs={ing.carbs} caloriesOfIngredient={ing.calories} protein={ing.protein} fat={ing.fat} food={ing.food} />)}
      </div>
    </div>
  </div>
  )
}
