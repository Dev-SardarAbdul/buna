import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import {
  ConseltBtn,
  Experience,
  ExpertSection,
  ExpertTitle,
  ExploreBtn,
  Name,
  SwiperWrraper,
} from "./elements";

import expert1 from "../../assets/images/expert1.png";
import expert2 from "../../assets/images/profile/img2.png";
import expert3 from "../../assets/images/profile/img3.png";
import expert4 from "../../assets/images/profile/img4.png";
import linkden from "../../assets/images/linkden.png";
import doticon from "../../assets/images/dot.png";
import expertFrench from "../../assets/images/profile/img3.png";
import newExpert from "../../assets/images/profile/img1.png";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import ExpertCard from "../../components/card/expertCard";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const ExpertComp = () => {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const html = document.querySelector("html");
    const style = window.getComputedStyle(html);
    setDirection(style.direction);
  }, []);
  const navigate = useNavigate();
  const data = [
    {
      img1: expert1,
      status: "Not Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expertFrench,
      status: "Available",
      name: "M. Ali Al-Harthy",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert2,
      status: "Not Available",
      name: "M. Abdullah Muqahwi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: newExpert,
      status: "Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert1,
      status: "Not Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert4,
      status: "Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: newExpert,
      status: "Not Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expertFrench,
      status: "Available",
      name: "M. Mohammed Qaraawi",
      experience: "Experience in Asset and Facilities Management",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
  ];

  const arabicdata = [
    {
      img1: expert1,
      status: "غير متاح",
      name: "م.بندر الزنيد",
      experience: "خبرة في إدارة الأصول والمرافق",
      btntext: "طلب استشارة",
      img2: linkden,
    },
    {
      img1: expert2,
      status: "اونلاين",
      name: "م.عبدالله المقهوي",
      experience: "خبرة في إدارة الأصول والمرافق",
      btntext: "طلب استشارة",
      img2: linkden,
    },
    {
      img1: expert2,
      status: "غير متاح",
      name: "م.عبدالله المقهوي",
      experience: "خبرة في إدارة الأصول والمرافق",
      btntext: "طلب استشارة",
      img2: linkden,
    },
    {
      img1: expert4,
      status: "اونلاين",
      name: "م.عبدالله المقهوي",
      experience: "خبرة في إدارة الأصول والمرافق",
      btntext: "طلب استشارة",
      img2: linkden,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // when window width is >= 640px
    576: {
      slidesPerView: 1.1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3.1,
    },
  };

  useEffect(() => {
    if (swiper) {
      console.log(swiper);
    }
  }, [swiper]);

  const [newData, setNewData] = useState(null);

  const langData = useAppSelector((data) => data.langData);

  useEffect(() => {
    if (langData?.lang === "ltr") {
      setNewData(data);
    } else {
      setNewData(arabicdata);
    }
  }, [langData]);

  return (
    <ExpertSection>
      <Container>
        <div className="platform-header">
          {langData?.lang == "ltr" ? (
            <ExpertTitle>A Buna expert has become closer to you</ExpertTitle>
          ) : (
            <ExpertTitle>خبير بُنى صار أقرب لك</ExpertTitle>
          )}
          <ExploreBtn onClick={()=>
          {
            navigate("/buna-expert");
          }}>
            {langData?.lang == "ltr" ? "View More" : "عرض الكل"}
          </ExploreBtn>
        </div>
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
            dir={langData.lang == "ltr" ? "ltr" : "rtl"}
            key={langData.lang}
            grabCursor={true}
            // sw={true}
            // grabCursor={true}
            // noSwipingSelector={"button"}
            // slideToClickedSlide={false}
          >
            {newData &&
              newData.map((item) => (
                <SwiperSlide className="mt-4">
                  <ExpertCard item={item} langData={langData} />
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperWrraper>
      </Container>
    </ExpertSection>
  );
};

export default ExpertComp;
