import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Col, Container } from "react-bootstrap";
import {
  ExploreBtn,
  LatestConferenceSection,
  PlatformTitle,
  SwiperWrraper,
} from "./elements";
import LatestPressConferenceComp from "../../components/card/card3";
import {
  videoLibraryData,
  videoLibraryArabicData,
} from "../../components/data";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import VideoLibraryCard from "../../components/card/videoLibraryCard";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const VideoLibraryComp = () => {
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
      setNewData(videoLibraryData);
    } else {
      setNewData(videoLibraryArabicData);
    }
  }, [langData]);
  return (
    <LatestConferenceSection className="librarySection">
      <Container>
        <div className="platform-header">
          {langData.lang == "ltr" ? (
            <PlatformTitle>Video Library</PlatformTitle>
          ) : (
            <PlatformTitle>مكتبة الفيديو</PlatformTitle>
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
        <div className="mt-4">
          <SwiperWrraper>
            <Swiper
              breakpoints={breakpoints}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              navigation={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              watchSlidesProgress={true}
              grabCursor={true}
              preventClicks={true}
              preventClicksPropagation={true}
              noSwiping={true}
              noSwipingSelector={"button"}
              slideToClickedSlide={false}
              dir={langData.lang == "ltr" ? "ltr" : "rtl"}
              key={langData.lang}
            >
              {newData &&
                newData.map((item, index) => (
                  <Col lg={3}>
                    <SwiperSlide>
                      <VideoLibraryCard item={item} langData={langData} />
                    </SwiperSlide>
                  </Col>
                ))}
            </Swiper>
          </SwiperWrraper>
        </div>
      </Container>
    </LatestConferenceSection>
  );
};

export default VideoLibraryComp;
