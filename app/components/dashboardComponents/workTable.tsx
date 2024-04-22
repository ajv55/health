import SetsTable from "./setsTable"

type WorkTableProps = {
    exercise: string,
    reps: string,
    sets: string,
    duration: string,
    calories_burn: string,
    exercise2: string,
    exercise2reps: string,
    exercise2sets: string,
    exercise3reps: string,
    exercise3sets: string,
    exercise3: string
}

export default function WorkTable({exercise, reps, sets, duration, calories_burn, exercise2, exercise2reps, exercise2sets, exercise3reps, exercise3sets, exercise3}: WorkTableProps) {
  return (
    
        <ol className="relative w-full border-s border-gray-800 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-7xl font-normal leading-none text-gray-400 dark:text-gray-500">Exercise 1</time>
                <h3 className="text-4xl font-semibold mb-4 mt-4 text-gray-900 dark:text-white">{exercise}</h3>
                <SetsTable reps={reps} sets={sets} />
        
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-7xl font-normal leading-none text-gray-400 dark:text-gray-500">Exercise 2</time>
                <h3 className="text-4xl font-semibold text-gray-900 mb-4 mt-4 dark:text-white">{exercise2}</h3>
                <SetsTable reps={exercise2reps} sets={exercise2sets} />
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-7xl font-normal leading-none text-gray-400 dark:text-gray-500">Exercise 3</time>
                <h3 className="text-4xl font-semibold text-gray-900 mb-4 mt-4 dark:text-white">{exercise3}</h3>
                <SetsTable reps={exercise3reps} sets={exercise3sets} />
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className=" w-full h-[8rem] flex">
                    <div className="w-[50%]  flex flex-col justify-center items-center border-blue-300">
                        <h1 className="text-xl text-zinc-500 ">Duration</h1>
                        <h3 className="text-3xl font-bold tracking-wide">{duration}</h3>
                    </div>
                    <div className="w-[50%]  flex flex-col justify-center items-center border-blue-300">
                        <h1 className="text-xl text-zinc-500 text-center">Caloires To Burn</h1>
                        <h3 className="text-3xl font-bold tracking-wide">{calories_burn}</h3>
                    </div>
                </div>
            </li>
        </ol>


  )
}
