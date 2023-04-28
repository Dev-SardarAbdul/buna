import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import {
  ExploreBtn,
  LatestAudioSection,
  PlatformTitle,
  SwiperWrraper,
  TabsDiv,
} from "./elements";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Tabs } from "antd";

import {
  arabiclatestaudiocardData,
  latestaudiocardData,
} from "../../components/data";
import AudioCardcomp from "../../components/card/card2";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const LatestAudioContentComp = () => {
  const [swiper, setSwiper] = useState(null);

  const langData = useAppSelector((data) => data.langData);

  const navigate = useNavigate();
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
      setNewData(latestaudiocardData);
    } else {
      setNewData(arabiclatestaudiocardData);
    }
  }, [langData]);
  return (
    <LatestAudioSection>
      <Container>
        <div className="platform-header">
          {langData.lang == "ltr" ? (
            <PlatformTitle>Latest Audiovisual Content</PlatformTitle>
          ) : (
            <PlatformTitle>المحتوى المرئي والمسموع</PlatformTitle>
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
              tab={langData.lang == "ltr" ? "All Categories" : " كل الفئات"}
              key="1"
            >
              <SwiperWrraper>
                <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={15}
                  navigation={true}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  noSwiping={true}
                  noSwipingSelector={"button"}
                  slideToClickedSlide={false}
                  dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                  key={langData.lang}
                >
                  {newData &&
                    newData.map((item,index) => (
                      <Col lg={3}>
                        <SwiperSlide>
                          <AudioCardcomp item={item} index={index} newData={newData} setNewData={setNewData} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                langData.lang == "ltr" ? "Asset Management" : " إدارة الأصول"
              }
              key="2"
            >
              <SwiperWrraper>
                <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={15}
                  navigation={true}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  noSwiping={true}
                  noSwipingSelector={"button"}
                  slideToClickedSlide={false}
                  dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                  key={langData.lang}
                >
                  {newData &&
                    newData.map((item) => (
                      <Col lg={3}>
                        <SwiperSlide>
                          <AudioCardcomp item={item} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                langData.lang == "ltr" ? "Contract Management" : " إدارة العقود"
              }
              key="3"
            >
              <SwiperWrraper>
                <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={15}
                  navigation={true}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  noSwiping={true}
                  noSwipingSelector={"button"}
                  slideToClickedSlide={false}
                  dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                  key={langData.lang}
                >
                  {newData &&
                    newData.map((item) => (
                      <Col lg={3}>
                        <SwiperSlide>
                          <AudioCardcomp item={item} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                langData.lang == "ltr" ? "Risk Management" : " إدارة المخاطر"
              }
              key="4"
            >
              <SwiperWrraper>
                <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={15}
                  navigation={true}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  noSwiping={true}
                  noSwipingSelector={"button"}
                  slideToClickedSlide={false}
                  dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                  key={langData.lang}
                >
                  {newData &&
                    newData.map((item) => (
                      <Col lg={3}>
                        <SwiperSlide>
                          <AudioCardcomp item={item} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                langData.lang == "ltr"
                  ? "Safety and Security"
                  : " الأمن والسلامة"
              }
              key="5"
            >
              <SwiperWrraper>
                <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={15}
                  navigation={true}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  noSwiping={true}
                  noSwipingSelector={"button"}
                  slideToClickedSlide={false}
                  dir={langData.lang == "ltr" ? "ltr" : "rtl"}
                  key={langData.lang}
                >
                  {newData &&
                    newData.map((item) => (
                      <Col lg={3}>
                        <SwiperSlide>
                          <AudioCardcomp item={item} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
          </Tabs>
        </TabsDiv>
      </Container>
    </LatestAudioSection>
  );
};

export default LatestAudioContentComp;
