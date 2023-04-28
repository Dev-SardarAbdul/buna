import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  HeroImgWrapper,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroWrapper,
  LearnMoreBtn,
  SwiperWrraper,
} from "./elements";
import heroimg from "../../assets/images/heroimg.svg";
import { useAppSelector } from "../../store/store";
import headphone from "../../assets/images/headphone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
const HeroComp = () => {
  const langData = useAppSelector((data) => data.langData);
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  const breakpoints = {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4.5,
    },
  };

  return (
    <HeroSection>
      <Container>
        <SwiperWrraper heroSwiper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ type: "bullets", clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            watchSlidesProgress={true}
            preventClicks={true}
            preventClicksPropagation={true}
            noSwiping={true}
            noSwipingSelector={"button"}
            slideToClickedSlide={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Row>
                <Col lg={7}>
                  <HeroWrapper>
                    {langData.lang == "ltr" ? (
                      <HeroTitle>
                        Welcome to the knowledge
                        <br /> building platform
                      </HeroTitle>
                    ) : (
                      <HeroTitle>مرحبًا بكم في بوابة بُنى المعرفية</HeroTitle>
                    )}
                    {langData.lang == "ltr" ? (
                      <HeroText>
                        Welcome to the Knowledge Buildings platform of the EXPRO
                        website - the Authority for Spending Efficiency and
                        Government Projects. Here you will find a collection of
                        resources representing a wide range of perspectives on
                        the future of Arabic content. The hub presents different
                        voices and forms of research to enable others to engage{" "}
                        <br /> critically on key topics.
                      </HeroText>
                    ) : (
                      <HeroText>
                        ﺗﺳﮭل ﻋﻠﯾك ﺑواﺑﺔ ﺑﻧﻰ اﻟوﺻول ﻟﻣﺣﺗوى ﻋرﺑﻲ ﻣﺗﺧﺻص ﻓﻲ إدارة
                        اﻷﺻول واﻟﻣراﻓق ﻟﺗﺧﻠق ﻟك ﻣﺟﺗﻣﻊ ﻣﮭﻧﻲ ﺗﻌﻠﯾﻣﻲ ﻣﻊ اﻟﻌدﯾد ﻣن
                        اﻟﺧﺑراء و اﻟﻣﺧﺗﺻﯾن وﻣدراء اﻟﻣراﻓق ﻟﺗﺑﺎدل اﻟﻣﻌرﻓﺔ
                        واﻟﺧﺑرات وﻟﺣل اﻟﻣﺷﻛﻼت، كما ﺗﺗﯾﺢ ﻟك ﺑواﺑﺔ ﺑﻧﻰ اﻟوﺻول
                        ﻟﻣﻛﺗﺑﺔ ﻣﻌرﻓﯾﺔ ﻣﺟﺎﻧﯾﺔ ﻣن ﻣواد ﻣﺳﻣوﻋﺔ وﻣﻘروءة وﻣرﺋﯾﺔ أﯾﻧﻣﺎ
                        ﻛﻧت ..!
                      </HeroText>
                    )}
                    {langData.lang == "ltr" ? (
                      <LearnMoreBtn>Learn More</LearnMoreBtn>
                    ) : (
                      <LearnMoreBtn>اطلع على المزيد</LearnMoreBtn>
                    )}
                  </HeroWrapper>
                </Col>

                <Col lg={5}>
                  <HeroImgWrapper>
                    <img src={heroimg} className="img-fluid heroImg" />
                  </HeroImgWrapper>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                <Col lg={7}>
                  <HeroWrapper>
                    {langData.lang == "ltr" ? (
                      <HeroTitle>
                        Welcome to the knowledge
                        <br /> building platform
                      </HeroTitle>
                    ) : (
                      <HeroTitle>مرحبًا بكم في بوابة بُنى المعرفية</HeroTitle>
                    )}
                    {langData.lang == "ltr" ? (
                      <HeroText>
                        Welcome to the Knowledge Buildings platform of the EXPRO
                        website - the Authority for Spending Efficiency and
                        Government Projects. Here you will find a collection of
                        resources representing a wide range of perspectives on
                        the future of Arabic content. The hub presents different
                        voices and forms of research to enable others to engage{" "}
                        <br /> critically on key topics.
                      </HeroText>
                    ) : (
                      <HeroText>
                        ﺗﺳﮭل ﻋﻠﯾك ﺑواﺑﺔ ﺑﻧﻰ اﻟوﺻول ﻟﻣﺣﺗوى ﻋرﺑﻲ ﻣﺗﺧﺻص ﻓﻲ إدارة
                        اﻷﺻول واﻟﻣراﻓق ﻟﺗﺧﻠق ﻟك ﻣﺟﺗﻣﻊ ﻣﮭﻧﻲ ﺗﻌﻠﯾﻣﻲ ﻣﻊ اﻟﻌدﯾد ﻣن
                        اﻟﺧﺑراء و اﻟﻣﺧﺗﺻﯾن وﻣدراء اﻟﻣراﻓق ﻟﺗﺑﺎدل اﻟﻣﻌرﻓﺔ
                        واﻟﺧﺑرات وﻟﺣل اﻟﻣﺷﻛﻼت، كما ﺗﺗﯾﺢ ﻟك ﺑواﺑﺔ ﺑﻧﻰ اﻟوﺻول
                        ﻟﻣﻛﺗﺑﺔ ﻣﻌرﻓﯾﺔ ﻣﺟﺎﻧﯾﺔ ﻣن ﻣواد ﻣﺳﻣوﻋﺔ وﻣﻘروءة وﻣرﺋﯾﺔ أﯾﻧﻣﺎ
                        ﻛﻧت ..!
                      </HeroText>
                    )}
                    {langData.lang == "ltr" ? (
                      <LearnMoreBtn>Learn More</LearnMoreBtn>
                    ) : (
                      <LearnMoreBtn>اطلع على المزيد</LearnMoreBtn>
                    )}
                  </HeroWrapper>
                </Col>

                <Col lg={5}>
                  <HeroImgWrapper>
                    <img src={heroimg} className="img-fluid heroImg" />
                  </HeroImgWrapper>
                </Col>
              </Row>
            </SwiperSlide>
          </Swiper>
        </SwiperWrraper>
      </Container>
    </HeroSection>
  );
};

export default HeroComp;
