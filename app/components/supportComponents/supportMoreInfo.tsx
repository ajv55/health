import React from 'react'

export default function SupportMoreInfo() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md shadow-zinc-900 rounded-lg">
        <h1 className="text-5xl font-bold mb-6">Nutritional Guide</h1>

        <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-4">Basics of Nutrition</h2>
        <p className="mb-4 text-xl">Understanding nutrition is key to achieving your weight loss goals. Here&#39;s a quick guide:</p>
        
        <div className="mb-4">
            <h3 className="text-2xl font-semibold">Macronutrients:</h3>
            <ul className="list-disc text-lg list-inside ml-4">
            <li><span className="font-semibold">Carbohydrates:</span> Your body&#39;s main source of energy. Aim for complex carbs like whole grains and vegetables.</li>
            <li><span className="font-semibold">Proteins:</span> Essential for muscle repair and growth. Include lean meats, beans, and nuts in your diet.</li>
            <li><span className="font-semibold">Fats:</span> Necessary for overall health. Focus on healthy fats like those found in avocados, olive oil, and fish.</li>
            </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Balanced Diet Tips</h2>
        <ul className="list-disc text-xl list-inside ml-4">
            <li>Eat a Variety of Foods: Ensure you get all the necessary vitamins and minerals.</li>
            <li>Control Portion Sizes: Use our calorie tracker to avoid overeating.</li>
            <li>Stay Hydrated: Drink plenty of water throughout the day.</li>
        </ul>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Meal Plan</h2>
        <p className="mb-4 text-xl">Here&#39;s a sample daily meal plan to get you started:</p>
        
        <div className="mb-4">
            <h3 className="text-2xl font-semibold">Breakfast:</h3>
            <ul className="list-disc text-xl list-inside ml-4">
            <li>Greek yogurt with berries and honey</li>
            <li>A slice of whole-grain toast with avocado</li>
            </ul>
        </div>
        
        <div className="mb-4">
            <h3 className="text-2xl font-semibold">Lunch:</h3>
            <ul className="list-disc text-xl list-inside ml-4">
            <li>Grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and olive oil dressing</li>
            </ul>
        </div>
        
        <div className="mb-4">
            <h3 className="text-2xl font-semibold">Dinner:</h3>
            <ul className="list-disc text-xl list-inside ml-4">
            <li>Baked salmon with quinoa and steamed broccoli</li>
            </ul>
        </div>
        
        <div className="mb-4">
            <h3 className="text-2xl font-semibold">Snacks:</h3>
            <ul className="list-disc text-xl list-inside ml-4">
            <li>Apple slices with almond butter</li>
            <li>A handful of mixed nuts</li>
            </ul>
        </div>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Science-Based Techniques</h2>
        <p className="mb-4 text-xl">Our platform uses the latest scientific research to help you lose weight effectively:</p>
        <ul className="list-disc text-xl list-inside ml-4">
            <li>Personalized Calorie Goals: Based on your unique profile.</li>
            <li>Evidence-Based Workouts: Designed to maximize fat loss and improve fitness.</li>
            <li>Behavioral Tips: To help you make sustainable lifestyle changes.</li>
        </ul>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQ)</h2>
        
        <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: How accurate is the calorie tracking?</h3>
            <p className='text-xl'>A: Our database is regularly updated to ensure accuracy. For the best results, weigh and measure your food portions.</p>
        </div>
        
        <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: What if I miss a workout?</h3>
            <p className='text-lg'>A: Don&#39;t worry! Get back on track the next day. Consistency over time is what matters.</p>
        </div>
        
        <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: Can I eat my favorite foods?</h3>
            <p className='text-lg'>A: Yes! The key is moderation. Our system allows for flexibility so you can enjoy your favorite treats within your calorie limits.</p>
        </div>
        </section>
    </div>

  )
}
