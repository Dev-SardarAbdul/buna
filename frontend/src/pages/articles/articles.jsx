import React, { useEffect, useState } from "react";
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
} from "./elements";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/images/article.svg";
import filterIcon from "../../assets/images/icons/filter.svg";
import { Select, Dropdown, Button } from "antd";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
import arrowDown from "../../assets/images/arrowDown.png";

import {
  GoBtn,
  NewsMaindev,
  NewsText,
  NewsTitle,
  SwiperWrraper,
} from "../homeComp/elements";
import CardComp from "../../components/card";
import {
  arbicarticlesCardData,
  articlesCardData,
  cardData,
} from "../../components/data";
import img2 from "../../assets/images/newsletter.svg";
import {
  FilterBtnWrapper,
  MainPagination,
  NewsLetter,
} from "../platform/styled";
import { useAppSelector } from "../../store/store";

import "swiper/css/effect-fade";
import supportIcon from "../../assets/images/Support EN.png";
import ImageSlider from "./imgSlider";
import TextSlider from "./textSlider";
import CustomPagination from "./customPagination";
const Articles = () => {
  const langData = useAppSelector((data) => data.langData);
  const [newFilter, setNewFilter] = useState(null);
  const items = [
    {
      key: "1",
      label: <p className="m-0"> Ascending </p>,
    },

    {
      key: "3",
      label: <p className="m-0">Descending</p>,
    },
  ];

  const filterdata = [
    {
      id: 1,
      name: "Prototyping",
    },
    {
      id: 2,

      name: "Product",
    },
    {
      id: 3,
      name: "Figma",
    },
    {
      id: 4,
      name: "WireFramework",
    },
    {
      id: 5,
      name: "Leadership",
    },
    {
      id: 6,
      name: "Prototyping",
    },
    {
      id: 7,
      name: "Prototyping",
    },
  ];

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

  const [newData, setNewData] = useState(null);
  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(articlesCardData);
    } else {
      setNewData(arbicarticlesCardData);
    }
  }, [langData]);

  let initialLimit = 5;
  const [limit, setLimit] = useState(initialLimit);

  const viewMoreBtn = () => {
    setLimit(newFilter.length);
  };
  const viewLessBtn = () => {
    setLimit(initialLimit);
  };

  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleFilterClick = (item) => {
    const isSelected = selectedFilter.some((filter) => filter.id === item.id);

    if (isSelected) {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter.id !== item.id)
      );
    } else {
      setSelectedFilter([...selectedFilter, item]);
    }
  };
  return (
    <ArticleSection>
      <div className="topContainer">
        <Container>
          <Row>
            <SwiperWrraper>
              <Row>
                <Col lg={7}>
                  <TextSlider langData={langData} />
                </Col>
                <Col lg={5}>
                  <ImageSlider />
                </Col>
                <CustomPagination />
              </Row>
            </SwiperWrraper>
          </Row>
        </Container>
      </div>

      <Container>
        <LatestSection>
          <div className="header-info">
            <LatestTitle>
              {" "}
              {langData.lang == "ltr" ? "Latest Articles" : "آخر المقالات"}{" "}
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
                style={{ border: "1px solid #F0F0F0", marginTop: "0.7rem" }}
              >
                <FilterTitle className="mt-2">
                  {" "}
                  {langData.lang == "ltr" ? "Filters" : "فرز"}{" "}
                </FilterTitle>

                <Text>
                  {" "}
                  {langData.lang == "ltr" ? "Keywords" : "الكلمات الدالة"}
                </Text>
                <div className="filter-info">
                  {newFilter?.slice(0, limit)?.map((item, index) => {
                    return (
                      <FilterName
                        key={item.id}
                        className={`mt-2 ${
                          selectedFilter.some((filter) => filter.id === item.id)
                            ? "activeFilter"
                            : ""
                        }`}
                        onClick={() => handleFilterClick(item)}
                      >
                        {item.name}
                      </FilterName>
                    );
                  })}
                </div>
                <button
                  className="viewBtn"
                  onClick={
                    limit == newFilter?.length ? viewLessBtn : viewMoreBtn
                  }
                >
                  {limit == newFilter?.length ? "View Less" : "View More"}
                  <img className="ms-1" src={arrowDown} alt="" />
                </button>
              </Col>

              <Col lg={9}>
                <Row>
                  {newData?.map((item) => (
                    <Col lg={4} md={6} sm={12} className="my-2">
                      <CardComp item={item} />
                    </Col>
                  ))}
                  <MainPagination defaultCurrent={1} total={50} />
                </Row>
              </Col>
            </Row>
          </div>
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
                  Subscribe to our newsletter to receive exclusive offer, latest
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
  );
};

export default Articles;
