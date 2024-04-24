

export default async function Nutrition() {

  const data = await fetch('/api/food');
  const res = await data.json();

  const nutritiionGuide = res?.nut?.nutrition_guide
  const day1breakfast = nutritiionGuide?.day_1?.breakfast?.ingredients; 
  console.log(day1breakfast)

  return (
    <div className='w-full border mt-20 h-[63rem] bg-slate-500'>
      <div>
        <h3>{nutritiionGuide?.day_1?.breakfast?.meal}</h3>
        <h5>{nutritiionGuide?.day_1?.breakfast?.calories}</h5>
        {day1breakfast?.map((ing: any, i: number ) => {
          return <div key={i}>
            <h1>{ing.food}</h1>
            <h1>{ing.calories}</h1>
            <h1>{ing.carbs}</h1>
            <h1>{ing.protein}</h1>
            <h1>{ing.fat}</h1>
          
          </div>
        })}
      </div>
    </div>
  )
}
