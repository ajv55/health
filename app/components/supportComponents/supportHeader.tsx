import style from '@/app/style.module.css'

export default function SupportHeader() {
  return (
    <div className={`${style.background} bg-center bg-cover flex flex-col justify-center items-center w-full h-[25rem]`} >
        <h1 className="lg:text-7xl text-5xl text-gray-500 text-center font-bold tracking-wide">Welcome to Our <span className=" bg-gradient-to-br from-indigo-900 via-indigo-500 to-indigo-300 bg-clip-text text-transparent">Support</span> Page</h1>
    </div>
  )
}
