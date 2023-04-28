import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
 
 
import slides3 from "../../assets/images/slide2New.jpg";
import welcome1 from "../../assets/images/welcome11.jpg";
import welcome2 from "../../assets/images/welcome22.jpg";
import slidesRtl from "../../assets/images/slide2Rtl.jpg";
import welcome1Rtl from "../../assets/images/welcome1RTL.jpg";
import welcome2Rtl from "../../assets/images/welcome2RTL.jpg";
import { cardData } from "../../components/data";
import { SwiperWrraper, WelcomeWrapper } from "./elements";
import { useAppSelector } from "../../store/store";

const WelcomeSection = () => {
  const langData = useAppSelector((data) => data.langData);
  const [activeIndex, setActiveIndex] = useState(0);

  const [carouselData, setCarouselData] = useState(null);
  console.log("carouselData",carouselData,activeIndex)

  useEffect(() => {
    if (langData.lang === "ltr") {
      let initialValue = [
        { id: 1, src: slides3, alt: "Image 1" },
        { id: 2, src: welcome1, alt: "Image 2" },
        { id: 3, src: welcome2, alt: "Image 3" },
      ];
      setCarouselData(initialValue);
    } else {
      let initialValue = [
        { id: 1, src: slidesRtl, alt: "Image 1" },
        { id: 2, src: welcome1Rtl, alt: "Image 2" },
        { id: 3, src: welcome2Rtl, alt: "Image 3" },
      ];
      setCarouselData(initialValue);
    }
  }, [langData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  
    return () => clearInterval(interval);
  }, [carouselData]);
  
  

  const nextSlideHandle = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <WelcomeWrapper>
      <Container className="welcomeContainer">
        <div className="newWrapperCaraousel">
          <div className="wrapperDiv">
            {carouselData &&
              carouselData?.map((item, index) => (
                <div
                  key={item.id}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <div>
                    <img
                      src={item.src}
                      className="carouselImg"
                      alt={item.alt}
                      height={207}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div
            className="wrapperDivContent"
            style={{
              background:
                langData.lang == "ltr"
                  ? "linear-gradient(271.19deg, #00c2d2 1.99%, #224493 114.37%)"
                  : "linear-gradient(271.29deg, #224493 -13.81%, #00C2D2 87.37%)",
            }}
          >
            <div className="">
              <div className="p-3 ">
                <div className="  ">
                  <div className="welcomeFlexWrapper">
                    {langData.lang == "ltr" ? (
                      <p className="text-white mainTitle">
                        Welcome to the Buna Hub Knowledge platform of the EXPRO,
                        Expenditure & Projects Efficiency Authority....
                      </p>
                    ) : (
                      <p className="text-white mainTitle">
                        مرحبًا بكم في منصة بُنى المعرفة التابعة لموقع إكسبرو -
                        هيئة كفاءة الإنفاق والمشروعات الحكومية.
                      </p>
                    )}

                    <div>
                      {langData.lang == "ltr" ? (
                        <button className="seeMore">See More </button>
                      ) : (
                        <button className="seeMore">عرض المزيد </button>
                      )}
                    </div>
                  </div>
                  <div className=" carousel-dots">
                    {carouselData?.map((item, index) => (
                      <span
                        key={item.id}
                        className={`dot ${
                          index === activeIndex ? "active" : ""
                        }`}
                        onClick={nextSlideHandle}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Container>
    </WelcomeWrapper>
  );
};

export default WelcomeSection;
