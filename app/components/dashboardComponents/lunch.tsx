import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import FoodCard from './foodCard';

ChartJS.register(ArcElement);

export default async function Lunch() {

    const guide  = await fetch('/api/food', {method: 'GET'});
    const res = await guide.json();

    const nutritiionGuide = res?.nutrition_guide
    const day2breakfast = nutritiionGuide?.day_2?.breakfast?.ingredients; 

    const day2 = nutritiionGuide?.day_2;
    const totalCalForDay1Breakfast = day2breakfast.map((d: any) => d.carbs);
    const totalDay2Protein = day2breakfast.map((d: any) => d.protein).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay2Fat = day2breakfast.map((d: any) => d.fat).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay2Carbs = totalCalForDay1Breakfast.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    console.log(day2breakfast)

    const option: any = { 
        plugins: {
          title: {
            display: true,
            text: 'Calories',
            color: 'black',
            font: {
              size: 17
            }
          }
        }
      }
    
      const data: any = {
        labels: ['Carbs', 'Protein', 'Fat'],
        datasets: [{
          label: 'Calories',
          data: [totalDay2Carbs, totalDay2Protein, totalDay2Fat],
          backgroundColor: ['#028372', '#470290', '#854a02'],
          borderColor: ['#b7fff2', '#d5aeff', '#ffb75f'],
          hoverOffset: 6,
        }]
      }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 20px ';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.fillText(`${day2?.breakfast?.calories}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
  return (
    <div className="w-[35%]  h-content flex flex-col justify-center items-center rounded-xl ">
    <h1 className='text-7xl font-bold tracking-wide text-center'>Lunch</h1>
    <div className="w-full h-[17rem] rounded-md bg-cover bg-center flex  justify-center items-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${day2?.breakfast?.img})`}}>
    <h3 className="text-4xl text-center text-white font-bold">{nutritiionGuide?.day_2?.breakfast?.meal}</h3>
    </div>
    <div className='w-full flex flex-col justify-evenly items-centers '>
      <div className='w-full mt-3 h-[20rem] flex justify-center items-center'>
      <Doughnut plugins={[textCenter]} options={option} data={data}/>
      </div>
      <h1 className='text-7xl font-bold tracking-wide text-center'>Ingredients</h1>
      <div className='w-full h-content flex flex-col justify-center items-center'>
      {day2breakfast?.map((ing: any, i: number ) => <FoodCard key={i} carbs={ing.carbs} caloriesOfIngredient={ing.calories} protein={ing.protein} fat={ing.fat} food={ing.food} />)}
      </div>
    </div>
  </div>
  )
}
