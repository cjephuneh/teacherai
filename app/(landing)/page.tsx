import { LandingNavbar } from "../../components/landing_navbar";
import { LandingHero } from "../../components/landing_hero";
import { LandingContent } from "../../components/landing_content";

const LandingPage = () => {
  return ( 
    <div className="h-full bg-red">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;