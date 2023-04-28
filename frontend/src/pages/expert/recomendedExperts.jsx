import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ConsulatntBtn,
  Imgdiv,
  MainActiveDev,
  Points,
  Profission,
  RecomendedExpertSection,
  RecomendedTitle,
  Value,
  ValueCount,
  ViewProfileBtn,
} from "./elements";
import img from "../../assets/images/icon-quote.png";
import img2 from "../../assets/images/member1.png";
import img4 from "../../assets/images/expert-detail/1.png";
import img7 from "../../assets/images/expert-detail/2.png";
import img6 from "../../assets/images/expert-detail/3.png";
import img8 from "../../assets/images/expert-detail/5.png";
import { MamberName } from "../homeComp/elements";
const RecomendedExperts = () => {
  const data = [
    {
      img: img4,
      name: "Dr. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img7,
      name: "EN. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img6,
      name: "EN. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img8,
      name: "EN. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
  ];

  return (
    <RecomendedExpertSection>
      <Container>
        <RecomendedTitle>Recommended experts</RecomendedTitle>

        <Row>
          {data.map((item) => (
            <Col lg={3}>
              <MainActiveDev>
                <Imgdiv>
                  <img src={item.img} />
                </Imgdiv>
                <MamberName>{item.name}</MamberName>
                <Profission>{item.profission}</Profission>
                <ConsulatntBtn>{item.consultantbtn}</ConsulatntBtn>
                <ViewProfileBtn>{item.viewprofilebtn}</ViewProfileBtn>
              </MainActiveDev>
            </Col>
          ))}
        </Row>
      </Container>
    </RecomendedExpertSection>
  );
};

export default RecomendedExperts;
