import React, { useEffect, useState } from "react";
import { SwiperWrraper } from "../homeComp/elements";
import {
  ArticleSection,
  FeaturedTitle,
  FeauturedText,
  FilterName,
  FilterTitle,
  LatestSection,
  LatestTitle,
  ReadmoreBtn,
  Text,
} from "../articles/elements";
import { Container, Row, Col } from "react-bootstrap";
import { PodcastWrapper } from "./element";

import img2 from "../../assets/images/newsletter.svg";
import img from "../../assets/images/podcasts/heroImg.svg";

import CardComp from "../../components/card";
import {
  FilterBtnWrapper,
  MainPagination,
  NewsLetter,
} from "../platform/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
import { Dropdown } from "antd";
import filterIcon from "../../assets/images/icons/filter.svg";
import headphone from "../../assets/images/headphone.png";
import {
  arabiclatestaudiocardData,
  articlesCardData,
  latestaudiocardData,
} from "../../components/data";
import AudioCardcomp from "../../components/card/card2";
import { useAppSelector } from "../../store/store";
import LatestPressConferenceComp from "../../components/card/card3";
import { IoIosArrowDown } from "react-icons/io";
import PodcastCards from "../../components/card/podcastCard";

const Podcasts = () => {
  const items = [
    {
      key: "1",
      label: <p className="m-0">Ascending</p>,
    },

    {
      key: "3",
      label: <p className="m-0">Descending</p>,
    },
  ];

  const filterdata = [
    {
      name: "Prototyping",
    },
    {
      name: "Product",
    },
    {
      name: "Figma",
    },
    {
      name: "WireFramework",
    },
    {
      name: "Leadership",
    },
    {
      name: "Prototyping",
    },
    {
      name: "Prototyping",
    },
  ];

  const contentformatdata = [
    {
      name: "Any",
    },
    {
      name: "Article",
    },
    {
      name: "Video",
    },
  ];

  const datefilterdata = [
    {
      name: "Any",
    },
    {
      name: "Last 7 days",
    },
    {
      name: "Last month",
    },
  ];

  const langData = useAppSelector((data) => data.langData);
  const [newData, setNewData] = useState(null);
  const [newFilter, setNewFilter] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(latestaudiocardData);
    } else {
      setNewData(arabiclatestaudiocardData);
    }
  }, [langData]);

  const filterArabicdata = [
    {
      name: "خطط",
    },
    {
      name: "معايير",
    },
    {
      name: "برامج",
    },
    {
      name: "الهيئة الحكومية",
    },
    {
      name: "كفاءة الإنفاق",
    },
    {
      name: "تحقيق الكفاءة",
    },
    {
      name: "اختصاصات الهيئة",
    },
    {
      name: "الخطط والبرامج",
    },
    {
      name: "معايير",
    },
    {
      name: "اختصاص الهيئة",
    },
  ];

  useEffect(() => {
    if (langData.lang == "ltr") {
      setNewFilter(filterdata);
    } else {
      setNewFilter(filterArabicdata);
    }
  }, [langData]);

  return (
    <PodcastWrapper>
      <ArticleSection className="noPadding">
        <div className="podcastUpperWrapper">
          <Container>
            <Row>
              <Col lg={6}>
                <FeaturedTitle>
                  {langData.lang == "ltr"
                    ? "Find and listen your favourite Artist and Podcast here"
                    : "ابحث واستمع إلى مواضيعك المفضلة من هنا"}
                </FeaturedTitle>
                {langData.lang == "ltr" ? (
                  <FeauturedText>
                    Welcome to the Institute for the Future of Work's Knowledge
                    Hub. Here you will find a range of resources representing a
                    wide range of perspectives on the future of work.
                  </FeauturedText>
                ) : (
                  <FeauturedText>
                    مرحبًا بكم في مركز معرفة معهد مستقبل العمل. ستجد هنا مجموعة
                    من الموارد تمثل مجموعة واسعة من وجهات النظر حول مستقبل
                    العمل.
                  </FeauturedText>
                )}

                <ReadmoreBtn>
                  {langData.lang == "ltr" ? "Browse Podcast" : "تصفح البودكاست"}
                </ReadmoreBtn>
              </Col>

              <Col lg={6}>
                <div className="img imgWrapperDiv">
                  <img src={img} className="img-fluid " />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <LatestSection>
            <div className="header-info">
              <LatestTitle className="podcastText">
                {langData.lang == "ltr"
                  ? "Latest Podcasts"
                  : "المحتوى المرئي والمسموع"}{" "}
              </LatestTitle>
              <FilterBtnWrapper>
                <div>
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    <button className="d-flex filterBtn ">
                      {" "}
                      <img className="me-2" src={filterIcon} alt="" />{" "}
                      {langData.lang == "ltr" ? "Sorted By" : "ترتيب حسب"}
                    </button>
                  </Dropdown>
                </div>
              </FilterBtnWrapper>
            </div>

            <div className="filter-data">
              <Row>
                <Col
                  lg={3}
                  style={{ border: "1px solid #F0F0F0", marginTop: "2rem" }}
                >
                  <FilterTitle className="mt-2 borderBottom">
                    {" "}
                    {langData.lang == "ltr" ? "Filters" : "فرز"}{" "}
                  </FilterTitle>

                  <Text>Keywords</Text>
                  <div className="filter-info">
                    {newFilter?.map((item) => (
                      <FilterName className="mt-2">{item.name}</FilterName>
                    ))}
                  </div>
                  <button className="seeMoreBtn">
                    {langData.lang == "ltr" ? "See More" : "اظهار الكل"}
                    <IoIosArrowDown />
                  </button>

                  {/* {langData.lang == "ltr" && (
                    <>
                      <Text>Content format</Text>
                      <div className="filter-info">
                        {contentformatdata?.map((item) => (
                          <FilterName>{item.name}</FilterName>
                        ))}
                      </div>
                    </>
                  )} */}

                  {/* {langData.lang == "ltr" && (
                    <>
                      <Text>Date</Text>
                      <div className="filter-info">
                        {datefilterdata?.map((item) => (
                          <FilterName>{item.name}</FilterName>
                        ))}
                      </div>
                    </>
                  )} */}
                </Col>

                <Col lg={9}>
                  <Row>
                    {newData &&
                      newData.map((item, index) => (
                        <Col lg={4} sm={6}>
                          <PodcastCards item={item} />
                        </Col>
                      ))}
                  </Row>
                </Col>
              </Row>
            </div>
            <MainPagination defaultCurrent={1} total={50} className="my-5" />
          </LatestSection>

          <NewsLetter>
            <div className="newsLetterMain">
              <div>
                {langData?.lang == "ltr" ? (
                  <h2>Subscribe to Our Newsletter</h2>
                ) : (
                  <h2>اشترك في نشرتنا الإخبارية</h2>
                )}
                {langData?.lang == "ltr" ? (
                  <p>
                    Subscribe to our newsletter to receive exclusive offer,
                    latest
                    <br /> news and updates
                  </p>
                ) : (
                  <p>
                    اشترك في النشرة الإخبارية لدينا لتلقّي العروض الحصرية وآخر
                    الأخبار والتحديثات
                  </p>
                )}

                <div className="emailWrapper">
                  <input
                    type="email"
                    placeholder={
                      langData.lang == "ltr"
                        ? " Enter email"
                        : "أدخل عنوان البريد الإلكتروني"
                    }
                  />

                  {langData?.lang == "ltr" ? (
                    <button>Lets Go</button>
                  ) : (
                    <button>اشترك الآن</button>
                  )}
                </div>
              </div>
              <div>
                <img src={newsletterIcon} alt="" />
              </div>
            </div>
          </NewsLetter>
        </Container>
      </ArticleSection>
    </PodcastWrapper>
  );
};

export default Podcasts;
