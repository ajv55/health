import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import style from '@/app/style.module.css';

export default function Page() {
  return (
    <div className={`${style.background}`}>
        <Nav />
        <div className=" text-white py-20 px-10 text-center">
          <h1 className="text-6xl text-indigo-400 font-bold mt-20 mb-4">Why You Should Eat Good Food Sources of Fiber Every Day</h1>
          <p className="text-3xl text-gray-500">For Optimal Health, Plus How to Track Them</p>
        </div>

        <div className="max-w-6xl bg-gray-100 rounded-lg mx-auto p-10 mb-20">
      <h2 className="text-4xl text-indigo-600 font-semibold mb-6">The Importance of Fiber</h2>
      <p className="mb-4 text-xl">
        Dietary fiber, also known as roughage or bulk, includes the parts of plant foods your body can&#39;t digest or absorb.
        Unlike other food components, such as fats, proteins, or carbohydrates — which your body breaks down and absorbs — 
        fiber isn&#39;t digested by your body. Instead, it passes relatively intact through your stomach, small intestine, 
        and colon and out of your body.
      </p>
      <p className="mb-4 text-xl">
        Fiber is commonly classified into two categories: soluble, which dissolves in water, and insoluble, which doesn&#39;t. 
        Soluble fiber can help lower glucose levels as well as help lower blood cholesterol. Insoluble fiber can help food 
        move through your digestive system, promoting regularity and helping prevent constipation.
      </p>
      <h2 className="text-4xl text-indigo-600 font-semibold mb-6">Health Benefits of Fiber</h2>
      <p className="mb-4 text-xl">
        A diet rich in fiber can provide many health benefits, including:
      </p>
      <ul className="list-disc text-lg list-inside mb-4">
        <li>Normalizes bowel movements. Dietary fiber increases the weight and size of your stool and softens it. A bulky stool is easier to pass, decreasing your chance of constipation.</li>
        <li>Helps maintain bowel health. A high-fiber diet may lower your risk of developing hemorrhoids and small pouches in your colon (diverticular disease).</li>
        <li>Lowers cholesterol levels. Soluble fiber found in beans, oats, flaxseed, and oat bran can help lower total blood cholesterol levels by lowering low-density lipoprotein, or &quot;bad&quot; cholesterol levels.</li>
        <li>Helps control blood sugar levels. In people with diabetes, fiber — particularly soluble fiber — can slow the absorption of sugar and help improve blood sugar levels.</li>
        <li>Aids in achieving healthy weight. High-fiber foods tend to be more filling than low-fiber foods, so you&#39;re likely to eat less and stay satisfied longer. And high-fiber foods tend to take longer to eat and to be less &quot;energy dense,&quot; which means they have fewer calories for the same volume of food.</li>
      </ul>
      <h2 className="text-4xl text-indigo-600 font-semibold mb-6">Tracking Your Fiber Intake</h2>
      <p className="mb-4 text-xl">
        Keeping track of your fiber intake can be simple with the help of modern technology. Several apps and websites can help you monitor your daily fiber consumption. Here are a few tips on how to track your fiber intake:
      </p>
      <ol className="list-decimal text-lg list-inside mb-4">
        <li>Read nutrition labels. Check the fiber content of packaged foods by reading the nutrition labels.</li>
        <li>Use a food diary app. Apps like MyFitnessPal, Cronometer, and Yazio can help you log your meals and track your fiber intake.</li>
        <li>Plan your meals. Include fiber-rich foods such as fruits, vegetables, whole grains, legumes, nuts, and seeds in your daily diet.</li>
        <li>Consult with a nutritionist. A registered dietitian or nutritionist can provide personalized advice and help you create a balanced meal plan.</li>
      </ol>
    </div>

    <Footer />
    </div>
  )
}
