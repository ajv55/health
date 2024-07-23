import axios from "axios";
import RecipeCard from "./recipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "../skeleton/recipeCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import RecipeModal from "./recipeModal";
import { setRecipe, setRecipeModal } from "@/app/slices/searchSlice";


const Recipe = () => {

  const [breakfastRecipe, setBreakfastRecipe] = useState([]);
  const [isBreakfastLoading, setIsBreakfastLoading] = useState(false);
  const [lunchRecipe, setLunchRecipe] = useState([]);
  const [isLunchLoading, setIsLunchLoading] = useState(false);
  const [dinnerRecipe, setDinnerRecipe] = useState([]);
  const [isDinnerLoading, setIsDinnerLoading] = useState(false);
  const [snackRecipe, setSnackRecipe] = useState([]);
  const [isSnackLoading, setIsSnackLoading] = useState(false);

  const dispatch = useDispatch();
  const recipeModal = useSelector((state: RootState) => state.search.recipeModal);


  const fetchBreakfastRecipes = async () => {
    setIsBreakfastLoading(true)
    await axios.get('/api/getBreakfastRecipes').then((res) => {
      if(res.status === 201) {
        setBreakfastRecipe(res.data)
      }
    })
    setIsBreakfastLoading(false)
  };

  const fetchLunchRecipes = async () => {
    setIsLunchLoading(true)
    await axios.get('/api/getLunchRecipes').then((res) => {
      if(res.status === 201) {
        setLunchRecipe(res.data)
      }
    })
    setIsLunchLoading(false)
  };

  const fetchDinnerRecipes = async () => {
    setIsDinnerLoading(true)
    await axios.get('/api/getDinnerRecipes').then((res) => {
      if(res.status === 201) {
        setDinnerRecipe(res.data)
      }
    })
    setIsDinnerLoading(false)
  };

  const fetchSnackRecipes = async () => {
    setIsSnackLoading(true)
    await axios.get('/api/getSnackRecipes').then((res) => {
      if(res.status === 201) {
        setSnackRecipe(res.data)
      }
    })
    setIsSnackLoading(false)
  };

  useEffect(() => {
    fetchBreakfastRecipes();
    fetchLunchRecipes();
    fetchDinnerRecipes();
    fetchSnackRecipes();
  }, []);

  const skeletonList = [1,2,3,4];

  console.log(breakfastRecipe)
  const filterBreakfastRecipe = breakfastRecipe.slice(0, 4);
  const filterLunchRecipe = lunchRecipe.slice(0, 4);
  const filterDinnerRecipe = dinnerRecipe.slice(0, 4);
  const filterSnackRecipe = snackRecipe.slice(0, 4);

  return (
    <div className="min-h-screen lg:w-full relative bg-indgio-50 py-8">
      {recipeModal && <RecipeModal />}
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center text-indigo-700 mb-8">
          Recipes
        </h1>
        <div className="w-full flex justify-start items-start">
          <h2 className="text-3xl text-indigo-500 mb-5">Breakfast</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isBreakfastLoading && skeletonList.map((sl, i) => <RecipeCardSkeleton key={i} />)}
          {filterBreakfastRecipe.map((recipe: any, index: number) => (
            <RecipeCard
              key={index}
              onClick={() => {dispatch(setRecipeModal(true)); dispatch(setRecipe(recipe))}}
              image={recipe?.img}
              title={recipe?.name}
              calories={recipe?.caloriesPerRecipe!}
            />
          ))}
        </div>
        <div className="w-full flex justify-start items-start">
          <h2 className="text-3xl text-indigo-500 mt-8 mb-5">Lunch</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLunchLoading && skeletonList.map((sl, i) => <RecipeCardSkeleton key={i} />)}
          {filterLunchRecipe.map((recipe: any, index: number) => (
            <RecipeCard
              key={index}
              onClick={() => {dispatch(setRecipeModal(true)); dispatch(setRecipe(recipe))}}
              image={recipe?.img}
              title={recipe?.name}
              calories={recipe?.caloriesPerRecipe!}
            />
          ))}
        </div>
        <div className="w-full flex justify-start items-start">
          <h2 className="text-3xl text-indigo-500 mt-8 mb-5">Dinner</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isDinnerLoading && skeletonList.map((sl, i) => <RecipeCardSkeleton key={i} />)}
          {filterDinnerRecipe.map((recipe: any, index: number) => (
            <RecipeCard
              key={index}
              onClick={() => {dispatch(setRecipeModal(true)); dispatch(setRecipe(recipe))}}
              image={recipe?.img}
              title={recipe?.name}
              calories={recipe?.caloriesPerRecipe!}
            />
          ))}
        </div>
        <div className="w-full flex justify-start items-start">
          <h2 className="text-3xl text-indigo-500 mt-8 mb-5">Snack</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isSnackLoading && skeletonList.map((sl, i) => <RecipeCardSkeleton key={i} />)}
          {filterSnackRecipe.map((recipe: any, index: number) => (
            <RecipeCard
              key={index}
              onClick={() => {dispatch(setRecipeModal(true)); dispatch(setRecipe(recipe))}}
              image={recipe?.img}
              title={recipe?.name}
              calories={recipe?.caloriesPerRecipe!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
