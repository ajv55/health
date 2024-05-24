import BottomTilt from "../bottomTilt";
import Footer from "../footer";
import Tilt from "../tilt";


export default function Exercises() {
  return (
    <div className="w-full flex flex-col justify-start  items-start relative h-[12rem]">
        <div className='-z-10 absolute -top-64 left-0 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300  h-[25rem] w-full'>
            <BottomTilt/>
        </div>

        <p className="mt-24 lg:mt-20 lg:text-3xl text-2xl lg:w-[65%] p-2 w-full">Welcome to <span className="font-bold">Fitness Fundamentals</span>, your go-to resource for <span className="font-bold">beginner-friendly</span> exercises to kickstart your fitness journey. Whether you&#39;re <span className="font-bold">new</span> to working out or looking to refresh your routine, mastering these <span className="font-bold">five essential</span> exercises will lay a <span className="font-bold">solid foundation</span> for building strength and improving overall fitness.</p>

        {/* exercise section */}
        <div className=" w-full relative">
            {/* first exercise */}
            <div className=" rounded-lg p-6 shadow-md shadow-zinc-900">
                <h2 className="lg:text-6xl text-4xl font-bold mb-4">Bodyweight Squats</h2>
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
            <div className=" rounded-lg p-6 shadow-md shadow-zinc-900">
                <h2 className="lg:text-6xl text-4xl font-bold mb-4">Push-Ups</h2>
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

                <div className=" -z-10 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-300   w-full lg:h-[30rem] h-[47rem] lg:top-1/2 top-[94rem] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                    <Tilt />
                    <BottomTilt />
                </div>

                {/* third exercise */}
                <div className=" rounded-lg  p-6 shadow-md shadow-zinc-900">
                    <h2 className="lg:text-6xl text-4xl text-white font-bold mb-4">Plank</h2>
                    <p className="text-white lg:text-2xl text-xl mb-4">The plank is an isometric exercise that targets the core muscles, including the abdominals, obliques, and lower back.</p>
                    <ol className="list-decimal text-white text-lg pl-6">
                        <li className="mb-2">
                        <p className="text-white">Begin in a push-up position, then lower yourself onto your forearms, keeping your elbows directly beneath your shoulders.</p>
                        </li>
                        <li className="mb-2">
                        <p className="text-white">Keep your body in a straight line from head to heels, engaging your core muscles to hold the position.</p>
                        </li>
                        <li className="mb-2">
                        <p className="text-white">Aim to hold the plank for 30 seconds to a minute, focusing on maintaining proper form and breathing steadily.</p>
                        </li>
                    </ol>
                    </div>

                    {/* fourth exercise */}
                    <div className=" rounded-lg p-6 shadow-md shadow-zinc-900">
                        <h2 className="lg:text-6xl text-4xl font-bold mb-4">Lunges</h2>
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
                        <div className=" rounded-lg p-6 shadow-md shadow-zinc-900">
                        <h2 className="lg:text-6xl text-4xl font-bold mb-4">Dumbbell Rows</h2>
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

        <p className=" mt-20 lg:text-4xl text-2xl text-center text-balance tracking-wide">Thank you for visiting Fitness Fundamentals! Remember to consult with a fitness professional before starting any new exercise program, especially if you have any <span className="font-bold">pre-existing health conditions</span> or concerns. Stay tuned for more beginner-friendly workouts and tips to help you reach your fitness goals.</p>

        <Footer/>
    </div>
  )
}
