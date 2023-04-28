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

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const LatestArticleComp = () => {
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

  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (swiper) {
      if (langData?.lang == "ltr") {
        swiper.rtlTranslate = "ltr";
      } else {
        swiper.rtlTranslate = "rtl";
      }
    }
  }, [swiper, langData]);

  const [newData, setNewData] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(articlesCardData);
    } else {
      setNewData(arbicarticlesCardData);
    }
  }, [langData]);
  return (
    <PlatformSection className="articleBG">
      <Container>
        <div className="platform-header">
          {langData.lang == "ltr" ? (
            <PlatformTitle>Latest Articles</PlatformTitle>
          ) : (
            <PlatformTitle>آخر المقالات</PlatformTitle>
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
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  grabCursor={true}
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
                          <CardComp item={item} />
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
                  navigation={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  grabCursor={true}
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
                          <CardComp item={item} />
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
                  navigation={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  grabCursor={true}
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
                          <CardComp item={item} />
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
                  navigation={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  grabCursor={true}
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
                  navigation={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  watchSlidesProgress={true}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  grabCursor={true}
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
                          <CardComp item={item} />
                        </SwiperSlide>
                      </Col>
                    ))}
                </Swiper>
              </SwiperWrraper>
            </Tabs.TabPane>
          </Tabs>
        </TabsDiv>
      </Container>
    </PlatformSection>
  );
};

export default LatestArticleComp;
