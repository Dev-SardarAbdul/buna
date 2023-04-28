import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExpertAdviceSection, Swiperdiv } from "./elements";
import icon from "../../assets/images/quoteicon.svg";
import lightedMan from "../../assets/images/lightedMan.png";
import lightedMan2 from "../../assets/images/lightedMan2.png";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const englishData = [
  {
    id: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.`,
    name: "Julian Harman",
    profession: "Professor",
  },
  {
    id: 2,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.`,
    name: "Julian Harman",
    profession: "Professor",
  },
  {
    id: 3,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.`,
    name: "Julian Harman",
    profession: "Professor",
  },
];

const arabicData = [
  {
    id: 1,
    text: "منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.",
    name: "فهد المطوع",
    profession: "أستاذ جامعي - خبير خدمات مالية",
  },
  {
    id: 2,
    text: "منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.",
    name: "فهد المطوع",
    profession: "أستاذ جامعي - خبير خدمات مالية",
  },
  {
    id: 3,
    text: "منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.منصة إلكترونية شاملة لخدمات وزارة المالية التي تقدمها لمختلف الجهات الحكومية والقطاع الخاص تمكينًا للتحول الرقمي لخدمات الوزارة و تتضمن العديد من الخدمات الأساسية مثل إدارة العقود والميزانية والمدفوعات بالإضافة الى إدارة المنافسات والمشتريات والحقوق المالية.",
    name: "فهد المطوع",
    profession: "أستاذ جامعي - خبير خدمات مالية",
  },
];

const ExpertAdviceComp = () => {
  const [newData, setNewData] = useState(null);

  const langData = useAppSelector((data) => data.langData);
  const navigate = useNavigate();

  useEffect(() => {
    if (langData?.lang === "ltr") {
      setNewData(englishData);
    } else {
      setNewData(arabicData);
    }
  }, [langData]);
  return (
    <ExpertAdviceSection>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="textDiv">
              <img src={icon} className="img-fluid expertAdviceImg" />
              <br />
              {langData.lang == "ltr" ? (
                <p className="adviceText">
                  Experts <br />
                  Advice
                </p>
              ) : (
                <p className="adviceText">
                  نصيحة
                  <br />
                  خبير
                </p>
              )}
            </div>
          </Col>
          <Col lg={9}>
            <Swiperdiv>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={true}
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
                  newData.map((item) => (
                    <SwiperSlide>
                      <div
                        className={`adviceWrapper ${
                          langData?.lang === "rtl" && "rowReverseClass"
                        }`}
                      >
                        <img className="img-fluid firstMan" src={lightedMan} />
                        <img
                          className="img-fluid secondMan"
                          src={lightedMan2}
                        />
                        <div className="textContainer">
                          <p className="mainText">{item.text}</p>
                          <p className="name">{item.name}</p>
                          <p className="profession">{item.profession}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Swiperdiv>

            {/* <img src={expertadviceimg2} /> */}
          </Col>
        </Row>
      </Container>
    </ExpertAdviceSection>
  );
};

export default ExpertAdviceComp;
