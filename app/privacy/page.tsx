import Nav from "../components/nav";
import PrivacyHeader from "../components/privacyComponents/privacyHeader";
import PrivacyInfo from "../components/privacyComponents/privacyInfo";


export default function Page() {
  return (
    <div  className="w-full bg-center bg-cover flex flex-col justify-center items-center">
        <Nav/>
        <PrivacyHeader />
        <PrivacyInfo />
        
    </div>
  )
}
