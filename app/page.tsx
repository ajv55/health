import Image from "next/image";
import Header from "./components/mainPage/header";
import Features from "./components/mainPage/features";
import Why from "./components/mainPage/why";
import About from "./components/mainPage/about";
import How from "./components/mainPage/how";
import Testimonial from "./components/mainPage/testimonial";
import Contact from "./components/mainPage/contact";

export default function Home() {
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header />
      <Features/>
      <Why />
      <About/>
      <How />
      <Testimonial />
      <Contact />
      <p className="text-center font-bold tracking-wider text-5xl w-[85%]">Thank you for visiting FitGenius &#45; your trusted partner in <span className="text-7xl font-extrabold bg-gradient-to-br from-orange-800 via-orange-200 to-orange-400 bg-clip-text text-transparent">achieving your fitness goals</span>. Ready to start your journey to a healthier, happier you? <span className="text-6xl font-extrabold underline hover:cursor-pointer bg-gradient-to-tr from-blue-900 via-blue-300 to-blue-600 bg-clip-text text-transparent">Sign up now</span> and let&#39;s get moving together! Remember, every step counts towards a <span className="font-extrabold text-6xl bg-gradient-to-br from-red-800 via-red-200 to-red-500 bg-clip-text text-transparent">brighter, fitter future</span>. See you on the other side!</p>
    </div>
  );
}
