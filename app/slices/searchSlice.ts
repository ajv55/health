import { createSlice } from "@reduxjs/toolkit";
import { FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { GiBowArrow, GiBoxingGlove, GiBroadsword, GiFootsteps, GiFrisbee, GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";

interface SearchState  {
    activeTab?: string,
    recipeModal?: boolean,
    recipe?: {},
    exerciseLog?: ExerciseLogEntry[]
}

type IconName =
  | 'FaRunning'
  | 'FaSwimmer'
  | 'FaBiking'
  | 'FaWalking'
  | 'FaBoxingGlove'
  | 'FaDumbbell'
  | 'FaHeartbeat'
  | 'FaMusic'
  | 'FaMountain'
  | 'FaGolfBall'
  | 'FaTableTennis'
  | 'FaBasketballBall'
  | 'FaFutbol'
  | 'FaVolleyballBall'
  | 'FaBaseballBall'
  | 'FaHockeyPuck'
  | 'FaFootballBall'
  | 'FaSkiingNordic'
  | 'FaSkiing'
  | 'FaSnowboarding'
  | 'FaSkating'
  | 'GiMountainClimbing'
  | 'GiBowArrow'
  | 'FaBullseye'
  | 'FaHorse'
  | 'FaSword'
  | 'GiMeditation'
  | 'GiJumpRope'
  | 'GiBoat'
  | 'GiJumpingRope'
  | 'FaStep'
  | 'FaFistRaised'
  | 'FaCricket'
  | 'FaCompactDisc'
  | 'FaBowlingBall'
  | 'FaBowArrow'
  | 'FaWater'
  | 'FaFish'
  | 'FaSailboat'
  | 'FaWeight'
  | 'FaBars';

const iconMap: { [key in IconName]: any } = {
  FaRunning: FaRunning,
  FaSwimmer: FaSwimmer,
  FaBiking: FaBiking,
  FaWalking: FaWalking,
  FaBoxingGlove: GiBoxingGlove,
  FaDumbbell: FaDumbbell,
  FaHeartbeat: FaHeartbeat,
  FaMusic: FaMusic,
  FaMountain: FaMountain,
  FaGolfBall: FaGolfBall,
  FaTableTennis: FaTableTennis,
  FaBasketballBall: FaBasketballBall,
  FaFutbol: FaFutbol,
  FaVolleyballBall: FaVolleyballBall,
  FaBaseballBall: FaBaseballBall,
  FaHockeyPuck: FaHockeyPuck,
  FaFootballBall: FaFootballBall,
  FaSkiingNordic: FaSkiingNordic,
  FaSkiing: FaSkiing,
  FaSnowboarding: FaSnowboarding,
  FaSkating: FaSkating,
  GiMountainClimbing: GiMountainClimbing,
  GiBowArrow: GiBowArrow,
  FaBullseye: FaBullseye,
  FaHorse: FaHorse,
  FaSword: GiBroadsword,
  GiMeditation: GiMeditation,
  GiJumpRope: GiJumpingRope,
  GiBoat: GiSpeedBoat,
  GiJumpingRope: GiJumpingRope,
  FaStep: GiFootsteps,
  FaFistRaised: MdOutlineSportsMartialArts,
  FaCricket: MdOutlineSportsCricket,
  FaCompactDisc: GiFrisbee,
  FaBowlingBall: FaBowlingBall,
  FaBowArrow: GiBowArrow,
  FaWater: FaWater,
  FaFish: FaFish,
  FaSailboat: FaSailboat,
  FaWeight: GiWeightLiftingUp,
  FaBars: FaDumbbell
};

interface ExerciseLogEntry {
    icon: IconName;
    name: string;
    caloriesBurned: number;
    notes: string;
    duration: string;
    sets: [],
    createdAt: Date,
    id: string
  
  }

const initialState: SearchState = {
    activeTab: 'summary',
    recipeModal: false,
    recipe: {},
    exerciseLog: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setRecipeModal: (state, action) => {
            state.recipeModal = action.payload
        },
        setRecipe: (state, action) => {
            state.recipe = action.payload
        },
        setExerciseLog: (state, action) => {
            state.exerciseLog = action.payload
        }
    }
})

export const {setActiveTab, setRecipeModal, setRecipe, setExerciseLog} = searchSlice.actions;

export default searchSlice.reducer

