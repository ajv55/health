'use client';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type FormData = {
  dietaryPreferences: string;
  allergies: string[];
  mealType: string;
  duration: string;
  nutritionalGoals: string;
};

const MealPlan: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dietaryPreferences: '',
    allergies: [],
    mealType: '',
    duration: '',
    nutritionalGoals: ''
  });
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const {data: session} = useSession();

  const stripeCustomerId = session?.user?.stripeCustomerId;

  console.log(isActive)

  useEffect(() => {
    const updatedIsActive = async () => {
        try {
            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({stripeCustomerId: stripeCustomerId})
            });
            if (response.ok) {
                const data = await response.json();
                setIsActive(data.isUserActive);
                // Update isUserActive based on the updated status from the backend
            } else {
                console.error('Failed to update isUserActive:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating isUserActive:', error);
        }
    };

    updatedIsActive();
}, [stripeCustomerId]);


  const handleUser = () => {
    if(isActive){
      // here is where i will allow the user to have access to the ai generate meal plans
      console.log('youre a paid memeber now lets gooooo!!!!')
    } else {
      router.push('/pricing')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        allergies: checked
          ? [...prevData.allergies, value]
          : prevData.allergies.filter((allergy) => allergy !== value)
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if(isActive){
        // here is where i will allow the user to have access to the ai generate meal plans
        console.log('youre a paid memeber now lets gooooo!!!!')
      } else {
        router.push('/pricing')
      }
  };


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Generate Your Meal Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietaryPreferences">
            Dietary Preferences
          </label>
          <select
            id="dietaryPreferences"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Preference</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Allergies
          </label>
          <div className="flex flex-wrap">
            {['Nuts', 'Dairy', 'Soy'].map((allergy) => (
              <label key={allergy} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  name="allergies"
                  value={allergy}
                  checked={formData.allergies.includes(allergy)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {allergy}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealType">
            Meal Type
          </label>
          <select
            id="mealType"
            name="mealType"
            value={formData.mealType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Meal Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
            Duration (days)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nutritionalGoals">
            Nutritional Goals
          </label>
          <select
            id="nutritionalGoals"
            name="nutritionalGoals"
            value={formData.nutritionalGoals}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Goal</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Muscle gain">Muscle gain</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded-lg font-bold">
          Generate Meal Plan
        </button>
      </form>
    </div>
  );
};

export default MealPlan;


