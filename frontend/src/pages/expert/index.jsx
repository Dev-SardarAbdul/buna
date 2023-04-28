import React from "react";
import WelcomeSection from "../homeComp/welcomeSection";
import HeroComp from "./hero";
import MeetExpert from "./meetExpert";
import Newsletter from "./newsletter";
import RecomendedExperts from "./recomendedExperts";

const BunaExpertComp = () => {
  return (
    <div>
      <HeroComp />
      <MeetExpert />
      <WelcomeSection />
      {/* <RecomendedExperts /> */}
      <Newsletter />
    </div>
  );
};

export default BunaExpertComp;
