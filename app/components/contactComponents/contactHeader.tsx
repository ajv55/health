import style from '@/app/style.module.css'

export default function ContactHeader() {


  return (
    <div className={`${style.background} w-full  h-[32rem] bg-center bg-cover flex flex-col gap-5 justify-center items-center`}  >
        <h1 className="lg:text-8xl text-indigo-600 text-6xl text-center  font-bold tracking-wide">Get in Touch</h1>
        <p className="lg:text-5xl text-2xl text-center text-gray-500 font-medium lg:p-0 p-1 tracking-wider">Your Partner in Health and Fitness</p>
    </div>
  )
}
