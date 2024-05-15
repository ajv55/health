import BottomTilt from "../components/bottomTilt";
import EssentialHeader from "../components/essentialComponents/essentialHeader";
import Exercises from "../components/essentialComponents/exercises";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Tilt from "../components/tilt";


export default function Page() {
  return (
    <div className="w-full relative">
        <Nav />
        <EssentialHeader />
        
        <Exercises />
    </div>
  )
}
