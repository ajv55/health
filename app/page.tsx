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
    </div>
  );
}
