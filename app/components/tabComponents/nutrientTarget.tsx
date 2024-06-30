'use client';
import { setGrams } from "@/app/slices/logSlice"
import { RootState } from "@/app/store";
import axios from "axios"
import Link from "next/link";
import { useEffect } from "react"
import { UseDispatch, useDispatch, useSelector } from "react-redux";


const NutrientTargets = () => {

    const dispatch = useDispatch();
    const macros = useSelector((state: RootState) => state.log.grams)

    const fetchPercentage = async () => {
        await axios.get('/api/getMacros').then((res: any) => {
            if(res.status === 201){
                dispatch(setGrams(res.data))
            }
        })
    }

    useEffect(() => {
        fetchPercentage();
    }, [])

    console.log(macros)

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">
        I plan my diet to meet the following daily nutrient targets: <span className="text-red-300 text-lg hover:bg-red-50 hover:text-red-500 hover:cursor-pointer rounded-lg p-2">Trans Fat <span className="text-2xl">{macros?.transFatGrams ?? 0}</span>g </span> <span className="text-indigo-300 text-lg hover:bg-indigo-50 hover:text-indigo-500 hover:cursor-pointer rounded-lg p-2">Sodium <span className="text-2xl">{macros?.sodiumMg ?? 0}</span>mg</span> <span className="text-indigo-300 text-lg hover:bg-indigo-50 hover:text-indigo-500 hover:cursor-pointer rounded-lg p-2">Calcium <span className="text-2xl">{macros?.calciumMg ?? 0}</span>mg</span>
      </h1>
      <div className="space-y-4">
        
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-indigo-600 font-semibold">Fat Components</h3>
          <div className="mt-2 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Saturated Fat</h4>
                <p className="text-sm text-gray-600">
                  A diet too high in saturated fat can increase your risk of cardiovascular disease.
                </p>
              </div>
              <div>
                <Link href='/dashboard/plan/satFat' className="text-indigo-600 hover:bg-indigo-50 p-2.5 rounded-lg text-sm">Examples</Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Trans Fat</h4>
                <p className="text-sm text-gray-600">
                  Trans fats (from partially hydrogenated oils) raise bad cholesterol in your blood.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-600">{macros?.transFatGrams ?? 0}g</span>
                <Link href='/dashboard/plan/transFat' className="text-indigo-600 hover:bg-indigo-50 p-2.5 rounded-lg text-sm">Examples</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-indigo-600 font-semibold">Carbs</h3>
          <div className="mt-2 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Dietary Fiber</h4>
                <p className="text-sm text-gray-600">
                  Provides multiple health benefits, high in plant foods. 30g recommended.
                </p>
              </div>
              <div>
              <Link href='/dashboard/plan/satFat' className="text-indigo-600 hover:bg-indigo-50 p-2.5 rounded-lg text-sm">Examples</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Sodium</h4>
              <p className="text-sm text-gray-600">
                Too much sodium from any source can raise blood pressure.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-indigo-600">2,300mg</span>
              <Link href='/dashboard/plan/satFat' className="text-indigo-600 hover:bg-indigo-50 p-2.5 rounded-lg text-sm">Examples</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t  border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Calcium</h4>
              <p className="text-sm text-gray-600">
                Needed for healthy bones, teeth, muscle contraction, blood clotting, heart rhythm, and blood pressure control. 1,000mg recommended.
              </p>
            </div>
            <div className="flex  items-center space-x-2">
              <span className="text-indigo-600">1,000mg</span>
              <Link href='/dashboard/plan/satFat' className="text-indigo-600 hover:bg-indigo-50 p-2.5 rounded-lg text-sm">Examples</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutrientTargets;
