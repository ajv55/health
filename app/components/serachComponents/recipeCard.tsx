'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setRecipeModal } from "@/app/slices/searchSlice";

type RecipeCardProps = {
    image?: string,
    title?: string,
    calories: number,
    onClick: () => void,
}

const RecipeCard = ({ image, title, calories, onClick }: RecipeCardProps) => {

  const dispatch = useDispatch();
  const recipeModal = useSelector((state: RootState) => state.search.recipeModal);

  console.log(recipeModal)
    return ( 
      <motion.div whileHover={{scale: 1.07}} whileTap={{scale: 0.6}} onClick={onClick} className="max-w-xs bg-white ring-2 ring-indigo-300 hover:shadow-indigo-400 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden">
        <Image className="w-full h-56  object-cover" width={200} height={200} src={image!} alt={title!} />
        <div className="p-4">
          <h2 className="text-xl font-extrabold text-indigo-600">{title}</h2>
          <p className="mt-2 text-lg font-extrabold text-indigo-400">{calories} cals/serving</p>
        </div>
      </motion.div>
    );
  };
  
  export default RecipeCard;
  