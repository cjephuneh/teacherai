import { LandingNavbar } from "../../components/landing_navbar";
import { LandingHero } from "../../components/landing_hero";
import { LandingContent } from "../../components/landing_content";
import  Footer  from "../../components/footer";
import Proof from "@/components/proof";
import HowItWorks from "@/components/hiw";

const LandingPage = () => {
  return ( 
    <div className="h-full bg-red">
      <LandingNavbar />
      <LandingHero />
      <Proof/>
      <HowItWorks />
      <LandingContent />
      <Footer />
    </div>
   );
}
 
export default LandingPage;