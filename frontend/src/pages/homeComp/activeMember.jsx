import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ActivememberSection,
  Imgdiv,
  MainActiveDev,
  MamberName,
  Points,
  Profission,
  SwiperWrraper,
  Value,
  ValueCount,
} from "./elements";
import img from "../../assets/images/icon-quote.png";
import img2 from "../../assets/images/member1.png";
import expert from "../../assets/images/expertdetail.png";
import expert2 from "../../assets/images/expert2.png";

import useItems from "antd/es/menu/hooks/useItems";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const ActiveMember = () => {
  const langData = useAppSelector((data) => data.langData);

  const navigate = useNavigate();
  const data = [
    {
      img: img2,
      name: "Julian Harman",
      profission: "Professor",
      points: "Points",
      value: "400",
      count: "Activity count",
      number: "700",
    },
    {
      img: expert,
      name: "Julian Harman",
      profission: "Professor",
      points: "Points",
      value: "400",
      count: "Activity count",
      number: "700",
    },
    {
      img: expert2,
      name: "Julian Harman",
      profission: "Professor",
      points: "Points",
      value: "400",
      count: "Activity count",
      number: "700",
    },
    {
      img: img2,
      name: "Julian Harman",
      profission: "Professor",
      points: "Points",
      value: "400",
      count: "Activity count",
      number: "700",
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const breakpoints = {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1.5,
    },
    // when window width is >= 640px
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  };

  useEffect(() => {
    if (swiper) {
      console.log(swiper);
    }
  }, [swiper]);
  return (
    <ActivememberSection>
      <Container>
        <div className="info">
          <img src={img} className="img-fluid" />
          {langData.lang == "ltr" ? (
            <span>Most active members</span>
          ) : (
            <span>الأعضاء الاكثر تفاعلاً</span>
          )}
        </div>
        <Row>
          <SwiperWrraper>
            <Swiper
              breakpoints={breakpoints}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              navigation={false}
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
              {data.map((item) => (
                <Col lg={4}>
                  <SwiperSlide>
                    <MainActiveDev>
                      <Imgdiv>
                        <img src={item.img} height={200} />
                      </Imgdiv>
                      <MamberName>{item.name}</MamberName>
                      <Profission>{item.profission}</Profission>
                      <div className="data">
                        <Points>{item.points}</Points>
                        <Value>{item.value}</Value>
                      </div>
                      <div className="data">
                        <Points>{item.count}</Points>
                        <ValueCount>{item.number}</ValueCount>
                      </div>
                    </MainActiveDev>
                  </SwiperSlide>
                </Col>
              ))}
            </Swiper>
          </SwiperWrraper>
        </Row>
      </Container>
    </ActivememberSection>
  );
};

export default ActiveMember;
