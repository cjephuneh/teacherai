"use client"
import { LandingNavbar } from "../../components/landing_navbar";
import { LandingHero } from "../../components/landing_hero";
import { LandingContent } from "../../components/landing_content";
import  Footer  from "../../components/footer";
import Proof from "@/components/proof";
import { BubbleChat } from 'flowise-embed-react'
import HowItWorks from "@/components/hiw";

const LandingPage = () => {
  
  return ( 
    <div className="h-full bg-red">
      <BubbleChat chatflowid="ab912ece-da19-4721-ba72-6acd787adead" apiHost="http://20.101.5.154:3000" />
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