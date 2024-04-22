
type SetsTableProps = {
    reps: string,
    sets: string
}

export default function SetsTable({sets, reps}: SetsTableProps) {
  return (
    

<div className=" overflow-x-auto shadow-md sm:rounded-xl">
    <table className="w-[100%] rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs rounded-md text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 text-white text-xl font-bold tracking-wide py-3 bg-gradient-to-br from-slate-400 via-slate-400 to-slate-800 dark:bg-gray-800">
                    Sets
                </th>
                <th scope="col" className="px-6 rounded-md text-xl text-white font-bold bg-gradient-to-br from-slate-800 via-slate-600 to-slate-200 tracking-wide py-3">
                    Reps
                </th>
    
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 bg-gradient-to-br from-slate-400 via-slate-400 to-slate-800 text-white text-4xl py-4 font-medium  whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   {sets}
                </th>
                <td className="px-6 py-4 text-white bg-gradient-to-br from-slate-900 via-slate-500 to-slate-200 text-4xl dark:bg-gray-800">
                    {reps}
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}
