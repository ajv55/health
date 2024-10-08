import BottomTilt from "../bottomTilt";
import Footer from "../footer";
import Tilt from "../tilt";
import style from '@/app/style.module.css'


export default function Exercises() {
  return (
    <div className={`${style.background} w-full flex flex-col justify-start  items-start relative h-[12rem]`}>

        <p className="mt-24 lg:ml-4 mb-8 lg:text-4xl text-gray-500 text-2xl lg:w-full lg:text-center p-2 w-full">Welcome to <span className="font-bold text-indigo-400">Fitness Fundamentals</span>, your go-to resource for <span className="font-bold text-indigo-400">beginner-friendly</span> exercises to kickstart your fitness journey. Whether you&#39;re <span className="font-bold text-indigo-400">new</span> to working out or looking to refresh your routine, mastering these <span className="font-bold text-indigo-400">five essential</span> exercises will lay a <span className="font-bold text-indigo-400">solid foundation</span> for building strength and improving overall fitness.</p>


        {/* exercise section */}
        <div className=" max-w-6xl mx-auto flex flex-col gap-8 relative">
            {/* first exercise */}
            <div className=" rounded-lg p-6  shadow-md shadow-indigo-900">
                <h2 className="lg:text-6xl text-4xl font-bold text-indigo-600 mb-4">Bodyweight Squats</h2>
                <p className="text-gray-700 lg:text-2xl text-xl mb-4">Bodyweight squats are a fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and calves.</p>
                <ol className="list-decimal text-lg pl-6">
                    <li className="mb-2">
                    <p className="text-gray-700">Stand with your feet shoulder-width apart and your arms extended in front of you or placed on your hips.</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700">Lower your body by bending your knees and pushing your hips back, keeping your chest up and your back straight.</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700">Aim to lower until your thighs are parallel to the ground, then push through your heels to return to the starting position.</p>
                    </li>
                </ol>
                </div>


            {/* second exercise */}
            <div className=" rounded-lg p-6 shadow-md shadow-indigo-900">
                <h2 className="lg:text-6xl text-4xl font-bold text-indigo-600 mb-4">Push-Ups</h2>
                <p className="text-gray-700 lg:text-2xl text-xl mb-4">Push-ups are a classic compound exercise that primarily works the chest, shoulders, and triceps, while also engaging the core muscles.</p>
                <ol className="list-decimal text-lg pl-6">
                    <li className="mb-2">
                    <p className="text-gray-700">Start in a plank position with your hands shoulder-width apart and your body in a straight line from head to heels.</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700">Lower your body until your chest nearly touches the floor, keeping your core engaged and your elbows close to your body.</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700">Push yourself back up to the starting position, maintaining a straight line from head to heels throughout the movement.</p>
                    </li>
                </ol>
                </div>

                

                {/* third exercise */}
                <div className=" rounded-lg  p-6 shadow-md shadow-indigo-900">
                    <h2 className="lg:text-6xl text-4xl text-indigo-600 font-bold mb-4">Plank</h2>
                    <p className=" lg:text-2xl text-xl mb-4">The plank is an isometric exercise that targets the core muscles, including the abdominals, obliques, and lower back.</p>
                    <ol className="list-decimal  text-lg pl-6">
                        <li className="mb-2">
                        <p className="">Begin in a push-up position, then lower yourself onto your forearms, keeping your elbows directly beneath your shoulders.</p>
                        </li>
                        <li className="mb-2">
                        <p className="">Keep your body in a straight line from head to heels, engaging your core muscles to hold the position.</p>
                        </li>
                        <li className="mb-2">
                        <p className="">Aim to hold the plank for 30 seconds to a minute, focusing on maintaining proper form and breathing steadily.</p>
                        </li>
                    </ol>
                    </div>

                    {/* fourth exercise */}
                    <div className=" rounded-lg p-6 shadow-md shadow-indigo-900">
                        <h2 className="lg:text-6xl text-4xl font-bold text-indigo-600 mb-4">Lunges</h2>
                        <p className="text-gray-700 lg:text-2xl text-xl mb-4">Lunges are a unilateral lower body exercise that targets the quadriceps, hamstrings, glutes, and calves, while also improving balance and coordination.</p>
                        <ol className="list-decimal text-lg  pl-6">
                            <li className="mb-2">
                            <p className="text-gray-700">Stand tall with your feet hip-width apart.</p>
                            </li>
                            <li className="mb-2">
                            <p className="text-gray-700">Step forward with one leg and lower your body until both knees are bent at a 90-degree angle, with your front thigh parallel to the ground and your back knee hovering just above the floor.</p>
                            </li>
                            <li className="mb-2">
                            <p className="text-gray-700">Push through your front heel to return to the starting position, then repeat on the other side.</p>
                            </li>
                        </ol>
                        </div>

                        {/* fifth exercise */}
                        <div className=" rounded-lg p-6 shadow-md shadow-indigo-900">
                        <h2 className="lg:text-6xl text-4xl font-bold text-indigo-600 mb-4">Dumbbell Rows</h2>
                        <p className="text-gray-700 lg:text-2xl text-xl  mb-4">Dumbbell rows are a compound exercise that primarily targets the muscles of the upper back, including the latissimus dorsi, rhomboids, and traps, while also engaging the biceps and forearms.</p>
                        <ol className="list-decimal text-lg pl-6">
                            <li className="mb-2">
                            <p className="text-gray-700">Hold a dumbbell in each hand and hinge forward at the hips, keeping your back flat and your core engaged.</p>
                            </li>
                            <li className="mb-2">
                            <p className="text-gray-700">Let the dumbbells hang straight down toward the floor.</p>
                            </li>
                            <li className="mb-2">
                            <p className="text-gray-700">Pull the dumbbells up toward your ribcage, squeezing your shoulder blades together at the top of the movement.</p>
                            </li>
                            <li className="mb-2">
                            <p className="text-gray-700">Lower the dumbbells back down with control and repeat for the desired number of repetitions.</p>
                            </li>
                        </ol>
                        </div>






        </div>

        <p className=" mt-20 lg:mb-20 mb-20 text-gray-500 lg:text-4xl text-2xl text-center text-balance tracking-wide">Thank you for visiting Fitness Fundamentals! Remember to consult with a fitness professional before starting any new exercise program, especially if you have any <span className="font-bold text-indigo-400">pre-existing health conditions</span> or concerns. Stay tuned for more beginner-friendly workouts and tips to help you reach your fitness goals.</p>

        <Footer/>
    </div>
  )
}
