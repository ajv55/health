

export default function ContactHeader() {


  return (
    <div className=' w-full h-screen bg-center bg-cover flex flex-col gap-5 justify-center items-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/contactus.jpg")'}} >
        <h1 className="lg:text-8xl text-6xl text-center text-white font-bold tracking-wide">Get in Touch</h1>
        <p className="lg:text-5xl text-2xl text-center text-white font-medium lg:p-0 p-1 tracking-wider">Your Partner in Health and Fitness</p>
    </div>
  )
}
