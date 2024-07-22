'use client';
import { setRecipeModal } from "@/app/slices/searchSlice";
import { RootState } from "@/app/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { useSession } from "next-auth/react";
import Link from "next/link";

const RecipeModal = () => {

    const dispatch = useDispatch();
    const {data: session} = useSession();
    const userIsActive = session?.user.isActive;
    const recipe = useSelector((state: RootState) => state.search.recipe) as any;

    console.log(userIsActive);

    const recipeIngredient = recipe?.ingredients;
    const recipeSteps = recipe.steps
    console.log(recipeSteps)

  return (
    <div className="fixed lg:-inset-10 -inset-4 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl lg:w-full w-[95%]">
        <div className="relative">
          <Image width={300} height={300} src={recipe?.img} alt="Berry Oat Yogurt Parfait" className="w-full h-48 object-cover" />
          <button
            onClick={() => dispatch(setRecipeModal(false))}
            className="absolute top-2 w-10 h-10 flex justify-center text-3xl text-center items-center right-2 bg-indigo-600 text-white rounded-full "
          >
            <IoMdClose size={20} color="white" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-indigo-700">{recipe.name}</h2>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <span>{recipe?.servingSize} serving</span>
            <span>{recipe?.prepTime} prep</span>
            <span>{recipe?.recipeWeight} recipe weight</span>
            <span>{recipe?.caloriesPerRecipe} cals/serving</span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-indigo-400 font-semibold">{recipeIngredient.length} Ingredients</h3>
            <ul className="list-disc list-inside">
                {recipeIngredient.map((ri: string, i: number) => (
                    <li key={i}>{ri}</li>
                ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-indigo-400 font-semibold">{recipeSteps.length} Steps {userIsActive === true ? '' : <Link href='/pricing'>🔒</Link> }</h3>
            <ol className="list-decimal list-inside">
                {userIsActive && recipeSteps.map((rs: string, i: number) => (
                    <li key={i}>{rs}</li>
                ))}
                {!userIsActive && <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div className="w-2/3 h-3 rounded-lg bg-indigo-200 "></div>
                    <div className="w-2/3 h-3 rounded-lg bg-indigo-200 "></div>
                    <div className="w-2/3 h-3 rounded-lg bg-indigo-200 "></div>
                    </div>}
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;

