'use client';
import { motion } from "framer-motion";
import { ChangeEvent } from "react";

type AdjustModalProps = {
    proteinValue?: number,
    proteinOnChange?: (e:  ChangeEvent<HTMLInputElement>) => void,
    carbValue?: number,
    carbOnChange?: (e:  ChangeEvent<HTMLInputElement>) => void,
    fatValue?: number,
    fatOnChange?: (e:  ChangeEvent<HTMLInputElement>) => void,
    onClose?: () => void,
    onAdjust?: () => void

}

export default function AdjustModal({proteinValue, proteinOnChange, carbValue, carbOnChange, fatValue, fatOnChange, onClose, onAdjust}: AdjustModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg lg:w-full w-[95%]"
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -500, opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <label htmlFor="proteinPercent" className="text-lg font-medium text-gray-700">Protein (%)</label>
                <input
                    id="proteinPercent"
                    type="text"
                    value={proteinValue}
                    onChange={proteinOnChange}
                    className="w-20 p-2 border rounded-md text-center"
                />
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="carbPercent" className="text-lg font-medium text-gray-700">Carbs (%)</label>
                <input
                    id="carbPercent"
                    type="text"
                    value={carbValue}
                    onChange={carbOnChange}
                    className="w-20 p-2 border rounded-md text-center"
                />
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="fatPercent" className="text-lg font-medium text-gray-700">Fats (%)</label>
                <input
                    id="fatPercent"
                    type="text"
                    value={fatValue}
                    onChange={fatOnChange}
                    className="w-20 p-2 border rounded-md text-center"
                />
            </div>
        </div>
        <div className="mt-6 text-right">
            <button 
                className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors"
                onClick={onClose}
            >
                Close
            </button>
            <button 
                className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors"
                onClick={onAdjust}
            >
                Adjust Macros
            </button>
        </div>
    </motion.div>
</div>
  )
}
