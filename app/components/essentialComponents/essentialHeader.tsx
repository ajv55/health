import style from '@/app/style.module.css'


export default function EssentialHeader() {
  return (
    <div  className={`${style.background} w-full bg-center p-1 bg-cover h-[27rem] flex justify-center items-center`}>
        <h1 className='lg:text-7xl text-4xl  text-center text-balance font-bold tracking-wide'>Fitness Fundamentals: <span className=" bg-gradient-to-br lg:text-8xl text-6xl from-indigo-900 via-indigo-600 to-indigo-300 bg-clip-text text-transparent">5</span> Essential Exercises for Beginners</h1>
    </div>
  )
}
