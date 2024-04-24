import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from 'chart.js'
import FoodCard from "./foodCard";

ChartJS.register(ArcElement);

export default async function Nutrition() {

  


  const guide  = await fetch('/api/food', {method: 'GET'});
  const res = await guide.json();

  const nutritiionGuide = res?.nutrition_guide
  const day1breakfast = nutritiionGuide?.day_1?.breakfast?.ingredients; 
  const day1 = nutritiionGuide?.day_1
  const day2 = nutritiionGuide?.day_2;
  const totalCalForDay1Breakfast = day1breakfast.map((d: any) => d.carbs);
  const totalDay1Protein = day1breakfast.map((d: any) => d.protein).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  const totalDay1Fat = day1breakfast.map((d: any) => d.fat).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  const totalDay1Carbs = totalCalForDay1Breakfast.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  console.log(day1)


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
      data: [totalDay1Carbs, totalDay1Protein, totalDay1Fat],
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
        ctx.fillText(`${day1?.breakfast?.calories}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
}

  return (
    <div className='w-full mt-16 h-content bg-slate-200'>
      <div className="w-full  h-content flex flex-wrap justify-center items-center rounded-xl border-4 border-red-500">
        <div className="w-full h-[17rem] bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${day1?.breakfast?.img})`}}>
        <h3 className="text-4xl text-center text-white font-bold">{nutritiionGuide?.day_1?.breakfast?.meal}</h3>
        </div>
        
        <h1 className='text-4xl font-bold tracking-wide'>Ingredients</h1>
        {day1breakfast?.map((ing: any, i: number ) => <FoodCard key={i} carbs={ing.carbs} caloriesOfIngredient={ing.calories} protein={ing.protein} fat={ing.fat} food={ing.food} />)}
        <div className='w-full mt-3 h-[14rem] flex justify-center items-center'>
        <Doughnut plugins={[textCenter]} options={option} data={data}/>
        </div>
      </div>
    </div>
  )
}
