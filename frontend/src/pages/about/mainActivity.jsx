import React from "react";
import {
  MainActivityHeader,
  MainActivityWrapper,
  ImageWrapper,
} from "./elements";
import { Col, Container, Row } from "react-bootstrap";
import activityIcon from "../../assets/images/activityIcon.png";
import academicArticles from "../../assets/images/academicArticles.png";
import podcast from "../../assets/images/podcast.png";
import expertAdvice from "../../assets/images/expertAdvice.png";
import motionGraphics from "../../assets/images/motionGraphics.png";
import infographics from "../../assets/images/infoGraphics.png";
import askExpert from "../../assets/images/askExpert.png";
import careerCounselling from "../../assets/images/careerCounselling.png";
import publicationCourses from "../../assets/images/publicationCourses.png";

const activityData = [
  {
    id: 1,
    img: academicArticles,
    text: "Academic Articles",
  },
  {
    id: 2,
    img: podcast,
    text: "Podcast",
  },
  {
    id: 3,
    img: expertAdvice,
    text: "Expert Advice",
  },
  {
    id: 4,
    img: motionGraphics,
    text: "Motion Graphic",
  },
  {
    id: 5,
    img: infographics,
    text: "Infographic",
  },
  {
    id: 6,
    img: askExpert,
    text: "Ask an Expert",
  },
  {
    id: 7,
    img: careerCounselling,
    text: "Career Counseling Sessions",
  },
  {
    id: 8,
    img: publicationCourses,
    text: "Re-publication Courses",
  },
];

function MainActivity() {
  return (
    <MainActivityWrapper>
      <Container>
        <MainActivityHeader>
          <img className="img-fluid icon" src={activityIcon} />
          <span>Main Activity</span>
        </MainActivityHeader>
        <Row>
          {activityData.map((item) => (
            <Col md={6} xl={3}>
              <ImageWrapper>
                <img className="img-fluid infoImg" src={item.img} />
                <p className="imgText"> {item.text}</p>
              </ImageWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </MainActivityWrapper>
  );
}

export default MainActivity;
