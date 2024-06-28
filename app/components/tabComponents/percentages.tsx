'use client';
import { RootState } from "@/app/store";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdjustModal from "./adjustModal";
import { AnimatePresence } from "framer-motion";
import Nutrients from "./nutrients";
import { setGrams } from "@/app/slices/logSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Percentages() {

    const {data: session } = useSession()
    const maintenanceCalories = Number(session?.user?.calories); 
    const macros = useSelector((state: RootState) => state.log.grams);
    const recommend = session?.user?.recommend;
    const dispatch = useDispatch();
    const isActive = session?.user.isActive;
    const router = useRouter();
    console.log(macros)

    const [protein, setProtein] = useState(30);
    const [carb, setCarb] = useState(40);
    const [fat, setFat] = useState(30);
    const [adjustModal, setAdjustModal] = useState(false)

    const { carbPercent
        , proteinPercent
        , fatPercent } = macros;

       
    const handleInputChange = (value: number, type: string) => {
        if (value < 0 || value > 100) return;

        let remainingPercent = 100 - value;
        let newProtein = protein;
        let newCarb = carb;
        let newFat = fat;

        switch (type) {
            case 'protein':
                if (remainingPercent >= 0) {
                    const remaining = remainingPercent / (carb + fat);
                    newCarb = Math.round(carb * remaining);
                    newFat = Math.round(fat * remaining);
                    newProtein = value;
                }
                break;
            case 'carb':
                if (remainingPercent >= 0) {
                    const remaining = remainingPercent / (protein + fat);
                    newProtein = Math.round(protein * remaining);
                    newFat = Math.round(fat * remaining);
                    newCarb = value;
                }
                break;
            case 'fat':
                if (remainingPercent >= 0) {
                    const remaining = remainingPercent / (protein + carb);
                    newProtein = Math.round(protein * remaining);
                    newCarb = Math.round(carb * remaining);
                    newFat = value;
                }
                break;
            default:
                break;
        }

        const total = newProtein + newCarb + newFat;
        if (total !== 100) {
            const difference = 100 - total;

            if (newProtein >= newCarb && newProtein >= newFat) {
                newProtein += difference;
            } else if (newCarb >= newProtein && newCarb >= newFat) {
                newCarb += difference;
            } else {
                newFat += difference;
            }
        }

        setProtein(newProtein);
        setCarb(newCarb);
        setFat(newFat);
    };

        const calculateMacros = (maintenanceCalories: number, proteinPercent: number, carbPercent: number, fatPercent: number) => {
            // Calculate macronutrient calories
            const proteinCalories = maintenanceCalories * (proteinPercent / 100);
            const carbCalories = maintenanceCalories * (carbPercent / 100);
            const fatCalories = maintenanceCalories * (fatPercent / 100);
        
            // Convert macronutrient calories to grams
            const proteinGrams = proteinCalories / 4;
            const carbGrams = carbCalories / 4;
            const fatGrams = fatCalories / 9;
        
            // Calculate saturated fat calories (10% of total calories) and convert to grams
            const satFatCalories = maintenanceCalories * 0.1;
            const satFatGrams = satFatCalories / 9;
        
            // Trans fat grams (recommended to be as low as possible, here we set a small value)
            const transFatGrams = 0;  // Ideally zero
        
            // Sodium in mg (standard recommendation)
            const sodiumMg = 2300;
        
            // Calcium in mg (standard recommendation)
            const calciumMg = 1000;
        
            // Fiber in grams (average between recommendations for men and women)
            const fiberGrams = (25 + 38) / 2;
        
            return {
                proteinGrams,
                carbGrams,
                fatGrams,
                satFatGrams,
                transFatGrams,
                sodiumMg,
                calciumMg,
                fiberGrams,
                proteinPercent,
                carbPercent,
                fatPercent
            };
        };


        const calculatedMacros = calculateMacros(maintenanceCalories, protein, carb, fat);

        const handleMacros = async () => {
           
           if(isActive === false) {
             router.push('/pricing')
           } else {
            const macros = calculateMacros(maintenanceCalories, protein, carb, fat);
              await axios.put('/api/updateMacros', macros).then((res) => {
                if(res.status === 201){
                    console.log(res)
                    dispatch(setGrams(res?.data));
                    setAdjustModal(false);
                }
            }).catch((error) => console.log(error))
           }
            
        }


    return (
        <div className="w-[75%] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Macronutrient Percentages</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
                Your macronutrient targets are providing <span className="font-medium text-indigo-600">{recommend} cals</span> per day.
            </p>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Carbs</span>
                    <span className="text-lg font-medium text-gray-700">{Math.round(carbPercent)}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${Math.round(carbPercent)}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Protein</span>
                    <span className="text-lg font-medium text-gray-700">{Math.round(proteinPercent)}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${Math.round(proteinPercent)}%` }}></div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Fats</span>
                    <span className="text-lg font-medium text-gray-700">{Math.round(fatPercent)}%</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${Math.round(fatPercent)}%` }}></div>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button onClick={() => setAdjustModal(true)} className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">
                    Adjust Your Goals
                </button>
            </div>

            {adjustModal && <AnimatePresence>
                <AdjustModal onAdjust={handleMacros} onClose={() => setAdjustModal(false)} proteinValue={Math.round(protein)} proteinOnChange={(e) => handleInputChange(Number(e.target.value), 'protein')} carbValue={Math.round(carb)} carbOnChange={(e) => handleInputChange(Number(e.target.value), 'carb')} fatValue={Math.round(fat)} fatOnChange={(e) => handleInputChange(Number(e.target.value), 'fat')} />
                    </AnimatePresence>}

                    {/* <Nutrients calculatedMacros={calculatedMacros} /> */}

            <div className="w-full h-12 flex justify-end items-center ">
                <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/dashboard/analysis'>Nutrients Analysis</Link>
            </div>
            
        </div>
    );
}

