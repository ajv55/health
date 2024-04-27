import React from 'react'

export default function Skeleton() {
  return (
    <div role="status" className="flex justify-evenly items-center absolute top-0 left-0 z-30 h-screen w-full p-5 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
        <div className='w-[45%] h-[25rem] bg-slate-200 animate-pulse flex flex-wrap justify-center items-center rounded-xl' >
                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-700 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[400px]">
                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-600 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[440px]">
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[360px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
        </div>

        <div className='w-[45%] h-[25rem] bg-slate-200 animate-pulse flex flex-wrap justify-center items-center rounded-xl' >
            <div role="status" className="w-full h-fit p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
        <div className="flex items-baseline ">
            <div className="w-full bg-gray-800 rounded-t-lg h-72 dark:bg-gray-700"></div>
            <div className="w-full h-56 ms-6 bg-gray-600 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-600 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-64 ms-6 bg-gray-500 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-400 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-600 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-800 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
                {/* <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-700 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[400px]">
                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-600 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[440px]">
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[360px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div> */}
        </div>



        <span className="sr-only">Loading...</span>
    </div>
  )
}
