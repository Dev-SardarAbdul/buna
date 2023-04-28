import React, { useEffect, useState } from "react";
import ActiveMember from "./activeMember";
import ExpertComp from "./expert";
import ExpertAdviceComp from "./expertAdvice";
import ExploreComp from "./explore";
import HeroComp from "./hero";
import LatestArticleComp from "./latestArticle";
import LatestAudioContentComp from "./latestAudioContent";
import LatestConferenceComp from "./latestConference";
import Newsletter from "./newsletter";
import PlatformComp from "./platform";
import TraningProgramComp from "./traningProgram";
import WelcomeSection from "./welcomeSection";
import OnBoardModal from "../../components/modal/onBoardModal";
import { Button, Modal } from "antd";
import VideoLibraryComp from "./videoLibrary";


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
   let interval= setTimeout(() => {
      setIsModalOpen(true);
    }, 15000);

    return  ()=> clearInterval(interval)
  }, []);

  return (
    <div>
      <Modal
        centered
        footer={false}
        className="onBoardModal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <OnBoardModal />
      </Modal>

      <HeroComp />
      <ExploreComp />
      <PlatformComp />
      <WelcomeSection />
      <LatestArticleComp />
      <LatestAudioContentComp />
      <LatestConferenceComp />
      <VideoLibraryComp />
      <TraningProgramComp />
      <ExpertComp />
      <ExpertAdviceComp />
      <ActiveMember />
      <Newsletter />
    </div>
  );
};

export default HomePage;
