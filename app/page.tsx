import Image from "next/image";
import Header from "./components/mainPage/header";
import Features from "./components/mainPage/features";
import Why from "./components/mainPage/why";

export default function Home() {
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header />
      <Features/>
      <Why />
    </div>
  );
}
