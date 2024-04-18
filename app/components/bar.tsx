
import LineGraph from './dashboardComponents/lineGraph'

export default function Bar() {
  return (
    <div className='w-[35%] h-[24rem]'>
        <div className='bg-slate-200 flex flex-col justify-center items-center gap-5 mt-28 ml-5 rounded-xl w-full h-[30rem] px-4'>
          <ul className='list-inside'>
            <div className='flex justify-center items-center gap-2'>
              <li className='text-blue-600 text-2xl'>Low Tier :</li>
              <p>Caloric deficit of <span className='font-bold text-xl'>250</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <li className='text-yellow-400 text-2xl'>Medium Tier :</li>
              <p>Caloric deficit of <span className='font-bold text-2xl'>500</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <li className='text-red-600 text-2xl'>High Tier :</li>
              <p>Caloric deficit of <span className='font-bold text-2xl'>750</span> </p>
            </div>
            
          </ul>
          <LineGraph />
        </div>
    </div>
  )
}
