

type InfoTableProps = {
    duration?: string,
    calories_burn?: number
}

export default function InfoTable({calories_burn, duration}:InfoTableProps) {
  return (
    

        <div className=" overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-slate-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 text-3xl text-white font-bold tracking-wide  py-3">
                            Duration
                        </th>
                        <th scope="col" className="px-6 text-3xl text-white font-bold tracking-wide  py-3">
                            Calories To Burn
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 text-2xl tracking-wide font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {duration}
                        </th>
                        <th scope="row" className="px-6 py-4 text-2xl tracking-wide font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {calories_burn}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

  )
}
