'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';


interface ModalProps {

  onClose: () => void;
  proteinOnClick?: () => void
}

const RelatedModal: FC<ModalProps> = ({ onClose, proteinOnClick }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg p-3 w-96"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl text-indigo-600 font-semibold mb-4">Select Related Nutrient</h2>
        <ul className='w-full '>
          <li className="mb-2 w-full ">
            <button
              onClick={proteinOnClick}
              className="block w-full text-left p-2 rounded group  hover:bg-indigo-100"
            >
              <span className=" group-hover:text-indigo-400 font-semibold">Protein</span><br />
              1 gram of Protein provides 4 Calories
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={proteinOnClick}
              className="block p-2  w-full text-left rounded group hover:bg-indigo-100"
            >
              <span className="font-semibold group-hover:text-indigo-400">Total Fat</span><br />
              1 gram of Total Fat provides 9 Calories
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={proteinOnClick}
              className="block p-2  w-full text-left rounded group hover:bg-indigo-100"
            >
              <span className="font-semibold group-hover:text-indigo-400">Total Carbs</span><br />
              1 gram of Total Carbs provides 4 Calories
            </button>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-indigo-100 text-indigo-700 rounded hover:text-indigo-100 hover:bg-indigo-500"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default RelatedModal;
