
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

export default  function Home() {



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
    </div>
  );
}
