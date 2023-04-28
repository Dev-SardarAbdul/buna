import React from "react";
import {
  MissionMainWrapper,
  MissionSection,
  MissionText,
  MissionWrapper,
  MissioTitle,
  VisionWrapper,
} from "../elements";
import img1 from "../../../assets/images/mission.png";
import img2 from "../../../assets/images/vision.png";
import { Row, Col, Container } from "react-bootstrap";
import { useAppSelector } from "../../../store/store";

const MissionComp = () => {
  const langData = useAppSelector((data) => data.langData);

  return (
    <MissionSection>
      <MissionMainWrapper>
        <div className="missionInner">
          <MissionWrapper>
            <div className={ langData.lang === "ltr" ? "d-flex gap-3 align-items-center missionMain":"d-flex gap-3 align-items-center missionArabicMain"}>
              <img src={img1} width={50} />

              {langData.lang === "rtl" ? (
                <MissioTitle>الرسالة</MissioTitle>
              ) : (
                <MissioTitle>Mission</MissioTitle>
              )}
            </div>
            {langData.lang === "rtl" ? (
              <MissionText  missionRtl>
                المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة
                المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء
                المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة
                العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين
                أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي
                في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف
                بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع.
              </MissionText>
            ) : (
              <MissionText>
                Welcome to the Institute for the Future of Work's Knowledge Hub.
                Here you will find a range of resources representing a wide
                range of perspectives on the future of work.The Hub surfaces
                different voices and forms of research to enable others to
                critically engage with key themes. Resources may not reflect the
                Institute's views.
              </MissionText>
            )}
          </MissionWrapper>
        </div>
        <div className="missionInner ">
          <VisionWrapper>
            <div className="d-flex gap-3 align-items-center visionMain ">
              <img src={img2} width={80} />
              {langData.lang === "rtl" ? (
                <MissioTitle visionTitle>الرؤية</MissioTitle>
              ) : (
                <MissioTitle visionTitle>Vision</MissioTitle>
              )}
            </div>
            {langData.lang === "rtl" ? (
              <MissionText visionArabic >
                المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة
                المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء
                المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة
                العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين
                أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي
                في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف
                بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع.
              </MissionText>
            ) : (
              <MissionText visionText>
                Welcome to the Institute for the Future of Work's Knowledge Hub.
                Here you will find a range of resources representing a wide
                range of perspectives on the future of work.The Hub surfaces
                different voices and forms of research to enable others to
                critically engage with key themes. Resources may not reflect the
                Institute's views.
              </MissionText>
            )}
          </VisionWrapper>
        </div>
      </MissionMainWrapper>
    </MissionSection>
  );
};

export default MissionComp;
