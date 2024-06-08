import style from '@/app/style.module.css'

export default function FaqHeader() {
  return (
    <div className={`${style.background} bg-center bg-cover flex justify-center items-center  w-full h-[26rem]`} >
        <h1 className='lg:text-8xl text-6xl text-gray-500 font-bold text-center  tracking-wide text-balance'><span className=' bg-gradient-to-bl from-indigo-900 via-indigo-500 to-indigo-300 bg-clip-text text-transparent'>FAQs</span> - Health and Fitness</h1>
    </div>
  )
}
