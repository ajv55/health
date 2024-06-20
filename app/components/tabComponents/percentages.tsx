'use client';
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export default function Percentages() {
    const macros = useSelector((state: RootState) => state.log.grams);
    console.log(macros)

    const { carbPercent
        , proteinPercent
        , fatPercent } = macros;

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Macronutrient Percentages</h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Carbs</span>
                    <span className="text-lg font-medium text-gray-700">{carbPercent}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${carbPercent}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Protein</span>
                    <span className="text-lg font-medium text-gray-700">{proteinPercent}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${proteinPercent}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Fats</span>
                    <span className="text-lg font-medium text-gray-700">{fatPercent}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${fatPercent}%` }}></div>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">
                    Adjust Your Goals
                </button>
            </div>
        </div>
    );
}

