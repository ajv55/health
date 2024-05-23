import Image from "next/image";
import Header from "./components/mainPage/header";
import Features from "./components/mainPage/features";
import Why from "./components/mainPage/why";
import About from "./components/mainPage/about";
import How from "./components/mainPage/how";
import Testimonial from "./components/mainPage/testimonial";
import Contact from "./components/mainPage/contact";
import Footer from "./components/footer";
import User from "./components/user";
import Nav from "./components/nav";
import Resource from "./components/mainPage/resource";

export default  function Home() {



  return (
    <div className="w-full relative  flex flex-col justify-center items-center">
      <Nav />
      <Header />
      <Features/>
      <Why />
      <About/>
      <How />
      <Resource />
      <Contact />
      <p className="text-center font-bold  mt-28 tracking-wider lg:text-5xl text-3xl w-full lg:w-[85%]">Thank you for visiting FitGenius &#45; your trusted partner in <span className="lg:text-7xl text-4xl font-extrabold bg-gradient-to-br from-orange-800 via-orange-200 to-orange-400 bg-clip-text text-transparent">achieving your fitness goals</span>. Ready to start your journey to a healthier, happier you? <span className="lg:text-6xl text-4xl font-extrabold underline hover:cursor-pointer bg-gradient-to-tr from-blue-900 via-blue-300 to-blue-600 bg-clip-text text-transparent">Sign up now</span> and let&#39;s get moving together! Remember, every step counts towards a <span className="font-extrabold lg:text-6xl text-4xl bg-gradient-to-br from-red-800 via-red-200 to-red-500 bg-clip-text text-transparent">brighter, fitter future</span>. See you on the other side!</p>
      <Footer /> 
    </div>
  );
}
