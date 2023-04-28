import React, { useEffect, useState } from "react";
import {
  ExploreBtn,
  MainCardWrapper,
  PlatformSection,
  PlatformTitle,
  SwiperWrraper,
  TabsDiv,
} from "./elements";
import { Col, Container } from "react-bootstrap";
import { Tabs } from "antd";
import Card from "../../components/card";
import CardComp from "../../components/card";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  arbicarticlesCardData,
  articlesCardData,
  cardData,
} from "../../components/data";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const PlatformComp = (props) => {
  const langData = useAppSelector((data) => data.langData);

  const navigate = useNavigate();

  const [swiper, setSwiper] = useState(null);

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

  useEffect(() => {
    if (swiper) {
      console.log(swiper);
    }
  }, [swiper]);

  const [newData, setNewData] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(articlesCardData);
    } else {
      setNewData(arbicarticlesCardData);
    }
  }, [langData]);
  return (
    <Container>
      <PlatformSection>
        <MainCardWrapper>
          <div className="platform-header">
            {langData.lang == "ltr" ? (
              <PlatformTitle>Selection from Platform</PlatformTitle>
            ) : (
              <PlatformTitle>مختارات من البوابة</PlatformTitle>
            )}

            {langData.lang == "ltr" ? (
              <ExploreBtn
                onClick={() => {
                  navigate("/platform");
                }}
              >
                Explore All
              </ExploreBtn>
            ) : (
              <ExploreBtn
                onClick={() => {
                  navigate("/platform");
                }}
              >
                عرض الكل
              </ExploreBtn>
            )}
          </div>
          <TabsDiv isRtl={langData.lang == "rtl"}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane
                tab={langData.lang == "ltr" ? "Articles " : "المقالات"}
                key="1"
              >
                <SwiperWrraper>
                  <Swiper
                    breakpoints={breakpoints}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={true}
                    onSwiper={setSwiper}
                    onSlideChange={() => console.log("slide change")}
                    watchSlidesProgress={true}
                    preventClicks={true}
                    preventClicksPropagation={true}
                    grabCursor={true}
                    noSwiping={true}
                    noSwipingSelector={"button"}
                    slideToClickedSlide={false}
                    spaceBetween={15}
                    dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                    key={langData.lang}
                  >
                    {newData &&
                      newData.map((item) => (
                        <Col lg={3}>
                          <SwiperSlide>
                            <CardComp item={item} />
                          </SwiperSlide>
                        </Col>
                      ))}
                  </Swiper>
                </SwiperWrraper>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  langData.lang == "ltr"
                    ? "Podcasts"
                    : " المحتوى المرئي والمسموع"
                }
                key="2"
              >
                <SwiperWrraper>
                  <Swiper
                    breakpoints={breakpoints}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    navigation={false}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    watchSlidesProgress={true}
                    preventClicks={true}
                    preventClicksPropagation={true}
                    noSwiping={true}
                    grabCursor={true}
                    noSwipingSelector={"button"}
                    slideToClickedSlide={false}
                    dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                    key={langData.lang}
                  >
                    {newData &&
                      newData.map((item) => (
                        <Col lg={3}>
                          <SwiperSlide>
                            <CardComp item={item} />
                          </SwiperSlide>
                        </Col>
                      ))}
                  </Swiper>
                </SwiperWrraper>
              </Tabs.TabPane>
            </Tabs>
          </TabsDiv>
        </MainCardWrapper>
      </PlatformSection>
    </Container>
  );
};

export default PlatformComp;
