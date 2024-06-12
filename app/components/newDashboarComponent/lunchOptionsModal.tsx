'use client';
import { setLunchLog, setUserMealLogs } from '@/app/slices/logSlice';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


type LunchOptionModalProps = {
    id: string,
    onClose: () => void,
}

const LunchOptionsModal = ({id, onClose}: LunchOptionModalProps) => {

    const dispatch = useDispatch();

    const fetchLunchLogs = async () => {
        await axios.get('/api/getLunchLogs').then((res: any) => {
            if(res.status === 201) {
                dispatch(setLunchLog(res.data))
            }
        })
    };


    const deleteItem = async () => {
        await axios.delete(`/api/deleteLunchItem?id=${id}`).then((res) => {
            if(res.status === 201) {
                toast.success('Deleted the food item');
                onClose();
                fetchLunchLogs();
            }
        })
    }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed -inset-20 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
    >
      <h2 className="text-xl font-bold mb-4">Options</h2>
      <p className="text-gray-600 mb-4">Are you sure you want to delete this food item? This action cannot be undone.</p>
      <ul>
        <li className="mb-2">
          <button onClick={deleteItem}  className="text-red-600 hover:underline">Delete Current Meal</button>
        </li>
      </ul>
      <button 
        onClick={onClose} 
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
  );
};

export default LunchOptionsModal;