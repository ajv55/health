

type PushupProps = {
    name?: string
}

export default function Plank({name}: PushupProps) {
  return (
    <div className='w-full rounded-3xl flex flex-col justify-evenly p-1 items-center  h-full bg-cover bg-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/plank.gif")'}}>
        <h1 className='text-white text-5xl font-extrabold'>{name}</h1>
        <p className='text-center text-white text-2xl  font-light tracking-wide'>To perform a plank properly, start by <span className="text-3xl font-extrabold text-emerald-300">getting into a push-up position</span> with your hands directly under your shoulders and your body forming a <span className="text-3xl font-extrabold text-emerald-700">straight line from head to heels</span>. Engage your <span className="text-3xl font-extrabold text-emerald-500">core muscles</span>, <span className="text-3xl font-extrabold text-emerald-500">glutes</span>, and <span className="text-3xl font-extrabold text-emerald-500">thighs</span> to maintain this alignment throughout the exercise. <span className="text-red-500 text-3xl font-extrabold">Avoid</span> sagging your hips or lifting your hips <span className="text-3xl font-extrabold text-emerald-300">too high</span>. Keep your neck in <span className="text-3xl font-extrabold text-emerald-300">line with your spine</span> and your gaze slightly ahead of you. Hold the plank position for as long as you can <span className="text-3xl font-extrabold text-emerald-400">while maintaining proper</span> form and breathing steadily. Aim to gradually increase your plank duration over time as your <span className=" text-emerald-500 font-extrabold text-3xl">core strength improves</span>.</p>
    </div>
  )
}
