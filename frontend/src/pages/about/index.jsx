import React from "react";
import GoalComp from "./goal";
import HeroComp from "./hero";
import MissionComp from "./mission/vision";
import Steeringcommitee from "./steeringcommitee";
import SupriviosryCommitee from "./supriviosryCommitee";
import TargetedUsers from "./targetedUsers";
import MainActivity from "./mainActivity";

const MainAboutComp = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroComp />
      <MissionComp />
      <GoalComp />
      <TargetedUsers />
      <MainActivity />
      <SupriviosryCommitee />
      <Steeringcommitee />
    </div>
  );
};

export default MainAboutComp;
