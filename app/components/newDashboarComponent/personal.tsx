
import { GiFootsteps } from 'react-icons/gi'
import { IoWater } from 'react-icons/io5'

export default function Personal() {
  return (
        <div className=' w-[25%] flex flex-col justify-evenly items-center h-full'>

        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex justify-center items-center gap-1'>
              <h1 className='text-gray-500 text-xl font-light'>Water</h1>
              <IoWater className='text-indigo-600'  size={20}  />
            </div>
            <span className='text-indigo-600 text-xl'>0</span>
          </div>

          <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex justify-center items-center gap-1'>
              <h1 className='text-gray-500 text-xl font-light'>Steps</h1>
              <GiFootsteps className='text-indigo-600' size={25}  />
            </div>
            <span className='text-indigo-600 text-xl'>0</span>
          </div>

          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-gray-500 text-xl font-light'>Exercise</h1>
            <span className='text-indigo-600 text-xl'>0</span>
          </div>

        </div>
  )
}
