'use client';
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
import FeatureCard from "./components/mainPage/featureCard";
import FeatureForWeight from "./components/mainPage/featureForWeight";
import WeightLossSuccess from "./components/mainPage/weightLoss";
import MissionSection from "./components/mainPage/missionSection";
import HowItWorksComponent from "./components/mainPage/howItWorks";
import Thanks from "./components/mainPage/thanks";
import Chatbot from "./components/chatbot";
import { useState } from "react";

export default  function Home() {

  const [visible, setVisible] = useState(false);



  return (
    <div className="w-full relative  flex flex-col justify-center items-center">
      <Nav />
      <Header />
      {/* <Features/> */}
      <FeatureCard />
      {/* <Why /> */}
      <WeightLossSuccess />
      {/* <About/> */}
      <MissionSection />
      {/* <How /> */}
      <HowItWorksComponent />
      <Resource />
      <Contact />
      <Thanks />
      <Footer />
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        Chat
      </button>
      <Chatbot visible={visible} closeChat={() => setVisible(false)} />
    </div>
  );
}
