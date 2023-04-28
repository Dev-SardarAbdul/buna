import React, { useState, useRef, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Row, Col, Dropdown } from "react-bootstrap";

import { Navbar, Container, Nav } from "react-bootstrap";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Switch } from "antd";

import digitalContentIcons from "../../assets/images/icons/navbar/digitalContent.svg";
import audiovisualsIcon from "../../assets/images/icons/navbar/audiovisuals.svg";
import knowledgeIcon from "../../assets/images/icons/navbar/knowledge.svg";
import articleIcon from "../../assets/images/icons/navbar/article.svg";

import podcasts from "../../assets/images/icons/navbar/podcasts.svg";

import expertsIcon from "../../assets/images/icons/navbar/expert.svg";
import courses from "../../assets/images/icons/navbar/courses.svg";
import recording from "../../assets/images/icons/navbar/recording.svg";
import webinar from "../../assets/images/icons/navbar/webinar.svg";
import events from "../../assets/images/icons/navbar/events.svg";
import infographics from "../../assets/images/icons/navbar/infographics.svg";
import quidelinesIcon from "../../assets/images/icons/navbar/quidelines.svg";
import directoryIcon from "../../assets/images/icons/navbar/directory.svg";
import recommendedIcon from "../../assets/images/icons/navbar/recommended.svg";
import qaIcon from "../../assets/images/icons/navbar/qa.svg";

// search
import img1 from "../../assets/images/search/img1.jpg";
import img2 from "../../assets/images/search/img2.jpg";
import img3 from "../../assets/images/search/img3.jpg";
import img4 from "../../assets/images/search/img4.jpg";
import img5 from "../../assets/images/search/img5.jpg";
import img6 from "../../assets/images/search/img6.jpg";
import img7 from "../../assets/images/search/img7.jpg";
import img8 from "../../assets/images/search/img8.jpg";
import { ReactComponent as SearchIcon } from "../../assets/images/search/icon.svg";

// search

import {
  Button,
  CustomCaret,
  MegaDropdownContainer,
  NavDiv,
  NavbarWrapper,
  SearchDropdownDiv,
  SearchInput,
  SearchedList,
  StyledDropdownItem,
  StyledLink,
  StyledNavDropdown,
} from "./styled";

import logo from "../../assets/images/logo.svg";
import buna from "../../assets/images/buna.svg";
import supporting from "../../assets/images/supporting.svg";
import searchIcon from "../../assets/images/searchIcon.svg";

import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import {} from "../data";
import { useAppSelector } from "../../store/store";

const MainNavbar = ({ handleToggleDirection }) => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [IsDigitalMegaDropdown, setIsDigitalMegaDropdown] = useState(false);
  console.log("IsDigitalMegaDropdown", IsDigitalMegaDropdown);

  const [digitalContent, setDigitalContent] = useState(true);
  const [audioVisuals, setAudioVisuals] = useState(false);
  const [knowledge, setKnowledge] = useState(false);

  let searchDropdownRef = useRef(null);
  let searchInputRef = useRef(null);
  let digitalDropdownRef = useRef(null);
  let digitalSelectDropdownRef = useRef(null);
  let spanRef = useRef(null);

  console.log("digitalSelectDropdownRef", digitalSelectDropdownRef);

  let digitalMainDropdownRef = useRef();

  // useEffect(() => {
  //   if (searched) {
  //     setShowDropdown(true);
  //   } else {
  //     setShowDropdown(false);
  //   }
  // }, [searched]);

  let digitalContentData = [
    {
      icon: articleIcon,
      title: "Articles",
      link: "/article",
    },
    {
      icon: expertsIcon,
      title: "Expert Advice",
      link: "/expert-detail",
    },
    {
      icon: qaIcon,
      title: "Q&A",
    },
  ];

  let digitalArabicContentData = [
    {
      icon: articleIcon,
      title: "مقالات",
      link: "/article",
    },
    {
      icon: expertsIcon,
      title: "نصيحة خبير",
      link: "/expert-detail",
    },
    {
      icon: qaIcon,
      title: "سؤال وجواب",
    },
  ];

  let audioVisualsData = [
    {
      icon: podcasts,
      title: "Podcasts",
      link: "/podcasts",
    },
    {
      icon: courses,
      title: "Courses",
    },
    {
      icon: recording,
      title: "Recording Meetup",
    },
    {
      icon: webinar,
      title: "Record Webinar",
    },
    {
      icon: events,
      title: "Record Events",
    },
    {
      icon: infographics,
      title: "Video and Infographics",
    },
  ];

  let audioArabicVisualsData = [
    {
      icon: podcasts,
      title: "بودكاست",
      link: "/podcasts",
    },
    {
      icon: courses,
      title: "البرامج التدريبية",
    },
    {
      icon: recording,
      title: "لقاءات مسجّلة",
    },
    {
      icon: webinar,
      title: "ندوات مسجلة على الويب",
    },
    {
      icon: events,
      title: "المؤتمرات المرفقة",
    },
    {
      icon: infographics,
      title: "مكتبة الفيديو",
    },
  ];

  let knowledgeData = [
    {
      icon: quidelinesIcon,
      title: "Guidelines and Procedure",
      link: "/digital-category",
    },
    {
      icon: directoryIcon,
      title: "National Directory / Manual of assets and facilities",
      link: "/digital-library",
    },
    {
      icon: recommendedIcon,
      title: "Recommended Books",
    },
  ];

  let knowledgeArabicData = [
    {
      icon: quidelinesIcon,
      title: "تحميل الأدلة والاجراءات",
      link: "/digital-category",
    },
    {
      icon: directoryIcon,
      title: "الدليل الوطني لإدارة الأصول والمرافق",
      link: "/digital-library",
    },
    {
      icon: recommendedIcon,
      title: "الكتب الموصى بها",
    },
  ];

  let searchList = [
    {
      icon: searchIcon,
      title: "The Amazing Deal",
    },
    {
      icon: searchIcon,
      title: "The Deal",
    },
    {
      icon: searchIcon,
      title: "Latest Detals",
    },
  ];

  let searchArabicList = [
    {
      icon: searchIcon,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },
    {
      icon: searchIcon,
      title: "البرامج والمعايير للهيئة",
    },
    {
      icon: searchIcon,
      title: "الخطط الجديدة للهيئة",
    },
  ];

  const [searchNewData, setSearchNewData] = useState(null);
  const [articleNewData, setArticleNewData] = useState(null);
  const [podcastsNewData, setPodcastsNewData] = useState(null);
  const [videosNewData, setVideosNewData] = useState(null);

  const [isDigitalDropdown, setIsDigitalDropdown] = useState(false);
  console.log("isDigitalDropdown", digitalDropdownRef);

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setShowDropdown(false);
  };

  const articlesData = [
    {
      img: img1,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img2,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img3,
      title: "The Amazonian Era and Gigification of Work",
    },
  ];

  const articlesArabicData = [
    {
      img: img1,
      title: "البرامج والمعايير ذات الصلة باختصاصات الهيئة",
    },

    {
      img: img2,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },

    {
      img: img3,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },
  ];

  const podcastData = [
    {
      img: img4,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img5,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img6,
      title: "The Amazonian Era and Gigification of Work",
    },
  ];

  const podcastArabicData = [
    {
      img: img4,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },

    {
      img: img5,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },

    {
      img: img6,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },
  ];

  const videosData = [
    {
      img: img7,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img8,
      title: "The Amazonian Era and Gigification of Work",
    },

    {
      img: img1,
      title: "The Amazonian Era and Gigification of Work",
    },
  ];

  const videosArbicData = [
    {
      img: img7,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },

    {
      img: img8,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },

    {
      img: img1,
      title: "هيئة الإنفاق والمشروعات الحكومية",
    },
  ];

  const langData = useAppSelector((data) => data.langData);

  useEffect(() => {
    if (langData.lang == "ltr") {
      setArticleNewData(articlesData);
      setPodcastsNewData(podcastData);
      setVideosNewData(videosData);
      setSearchNewData(searchList);
    } else {
      setArticleNewData(articlesArabicData);
      setPodcastsNewData(podcastArabicData);
      setVideosNewData(videosArbicData);
      setSearchNewData(searchArabicList);
    }
  }, [langData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (searchDropdownRef?.current &&
          searchDropdownRef?.current.contains(event?.target)) ||
        (searchInputRef?.current &&
          searchInputRef?.current.contains(event?.target))
      ) {
        return;
      } else {
        setShowDropdown(false);
        setIsDigitalMegaDropdown(false);
      }
      // if (
      //   !digitalSelectDropdownRef?.current &&
      //   !digitalSelectDropdownRef?.current?.contains(event?.target)

      //   ||

      // ) {
      //   setIsDigitalMegaDropdown(false);
      // }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchDropdownRef]);

  const navigateDigitalHandle = (item) => {
    setIsDigitalMegaDropdown(false);

    if (digitalDropdownRef) {
      const purElem =
        digitalDropdownRef?.current.querySelector(".dropdown-menu");
      purElem.onclick = null; // Remove the onclick event
      purElem.classList.remove("show");

      const items = digitalDropdownRef?.current.querySelector(".nav-item");

      items.classList.remove("show");
      items.onclick = null; // Remove the onclick event

      const toggle =
        digitalDropdownRef?.current.querySelector(".dropdown-toggle");
      toggle.classList.remove("show");
      toggle.setAttribute("aria-expanded", false);
      toggle.onclick = null; // Remove the onclick event

      spanRef?.current.click();
      navigate(item.link);
    }
  };

  return (
    <NavbarWrapper>
      <div className="navbarMain">
        <span ref={spanRef}></span>
        <Navbar bg="light" expand="xl">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <StyledNavDropdown
                  className="firstDropdown"
                  title={
                    <>
                      {langData.lang == "ltr" ? "Buna Platform " : "بوابة بُنى"}
                      <CustomCaret />
                    </>
                  }
                  id="basic-nav-dropdown"
                  onChange={() => {
                    setShowDropdown(false);
                  }}
                  isBunaPlatformRtl={langData.lang == "rtl" && true}
                >
                  <MegaDropdownContainer className="eventsNav pt-0 mt-0 ">
                    <Row>
                      <Col xs="12" md="12" className="text-left">
                        <StyledDropdownItem>
                          <Link
                            to="/about-us"
                            style={{ textDecoration: "none" }}
                          >
                            <StyledLink className="nav-link" role="button">
                              <img
                                className={
                                  langData.lang == "rtl" ? "ms-4" : "me-3 "
                                }
                                src={buna}
                                alt=""
                              />

                              {langData.lang == "ltr"
                                ? " About Buna"
                                : "نبذة عن بنى"}
                            </StyledLink>
                          </Link>
                        </StyledDropdownItem>
                        <StyledDropdownItem style={{ marginTop: "10px" }}>
                          <Link
                            to="/supporting-entities"
                            style={{ textDecoration: "none" }}
                          >
                            <StyledLink className="nav-link" role="button">
                              <img
                                className={
                                  langData.lang == "rtl" ? "ms-3" : "me-3 "
                                }
                                src={supporting}
                                alt=""
                              />
                              {langData.lang == "ltr"
                                ? "Supporting Entities"
                                : "الجهات الداعمة"}
                            </StyledLink>
                          </Link>
                        </StyledDropdownItem>
                      </Col>
                    </Row>
                  </MegaDropdownContainer>
                </StyledNavDropdown>

                <div ref={digitalDropdownRef}>
                  <StyledNavDropdown
                    title={
                      <>
                        {langData.lang == "ltr"
                          ? "Digital Library"
                          : "المكتبة الرقمية"}{" "}
                        <CustomCaret />
                      </>
                    }
                    id="basic-nav-dropdown"
                    digitalLibrary
                    isDigitalRtl={langData.lang == "rtl" && true}
                    // show={IsDigitalMegaDropdown}
                    // onClick={() => {
                    //   setIsDigitalMegaDropdown(!IsDigitalMegaDropdown);
                    // }}
                    // ref={digitalMainDropdownRef}
                  >
                    <MegaDropdownContainer className="eventsNav pt-0 mt-0">
                      <Row>
                        <Col xs="12" md="12" className="text-left">
                          <Row>
                            <Col lg={5}>
                              <NavDiv
                                className={digitalContent ? "active" : ""}
                                onClick={() => {
                                  setDigitalContent(true);
                                  setAudioVisuals(false);
                                  setKnowledge(false);
                                  setIsDigitalDropdown(true);
                                }}
                              >
                                <div className="d-flex gap-3">
                                  <img src={digitalContentIcons} alt="" />
                                  <span className="megaPara">
                                    {langData.lang == "ltr"
                                      ? "Digital Content"
                                      : "المحتوى الرقمي"}
                                  </span>
                                </div>
                                <div>
                                  <RxCaretRight
                                    className={
                                      digitalContent
                                        ? "navIcon active"
                                        : "navIcon"
                                    }
                                  />
                                </div>
                              </NavDiv>
                              <NavDiv
                                className={audioVisuals ? "active" : ""}
                                onClick={() => {
                                  setDigitalContent(false);
                                  setAudioVisuals(true);
                                  setKnowledge(false);
                                }}
                              >
                                <div className="d-flex gap-3">
                                  <img src={audiovisualsIcon} alt="" />
                                  <span className="megaPara">
                                    {langData.lang == "ltr"
                                      ? "Audiovisuals"
                                      : "المحتوى المرئي والمسموع"}
                                  </span>
                                </div>
                                <div>
                                  <RxCaretRight
                                    className={
                                      audioVisuals
                                        ? "navIcon active"
                                        : "navIcon"
                                    }
                                  />
                                </div>
                              </NavDiv>
                              <NavDiv
                                className={knowledge ? "active" : ""}
                                onClick={() => {
                                  setDigitalContent(false);
                                  setAudioVisuals(false);
                                  setKnowledge(true);
                                }}
                              >
                                <div className="d-flex gap-3">
                                  <img src={knowledgeIcon} alt="" />
                                  <span className="megaPara">
                                    {langData.lang == "ltr"
                                      ? "Knowledge Library"
                                      : "المكتبة المعرفية"}
                                  </span>
                                </div>
                                <div>
                                  <RxCaretRight
                                    className={
                                      knowledge ? "navIcon active" : "navIcon"
                                    }
                                  />
                                </div>
                              </NavDiv>
                            </Col>
                            <Col lg={7}>
                              {digitalContent && langData.lang == "ltr"
                                ? digitalContentData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div style={{ cursor: "pointer" }}>
                                        <img src={item.icon} />
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(5px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                        {/* </Link> */}
                                      </div>
                                    </div>
                                  ))
                                : digitalContent &&
                                  digitalArabicContentData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div>
                                        <div style={{ cursor: "pointer" }}>
                                          <img src={item.icon} />
                                        </div>
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(10px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))}

                              {audioVisuals && langData.lang == "ltr"
                                ? audioVisualsData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div>
                                        <div style={{ cursor: "pointer" }}>
                                          <img src={item.icon} />
                                        </div>
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(5px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))
                                : audioVisuals &&
                                  audioArabicVisualsData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div>
                                        <div style={{ cursor: "pointer" }}>
                                          <img src={item.icon} />
                                        </div>
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(10px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                              {knowledge && langData.lang == "ltr"
                                ? knowledgeData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div>
                                        <div style={{ cursor: "pointer" }}>
                                          <img src={item.icon} />
                                        </div>
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(5px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))
                                : knowledge &&
                                  knowledgeArabicData.map((item) => (
                                    <div
                                      className="d-flex align-items-center gap-2"
                                      onClick={() => {
                                        navigateDigitalHandle(item);
                                      }}
                                    >
                                      <div>
                                        <div style={{ cursor: "pointer" }}>
                                          <img src={item.icon} />
                                        </div>
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            transform: "translateY(5px)",
                                            cursor: "pointer",
                                          }}
                                          className="megaPara"
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </MegaDropdownContainer>
                  </StyledNavDropdown>
                </div>

                <Nav.Link href="#link">
                  {langData.lang == "ltr" ? "Events" : "الفعاليات"}
                </Nav.Link>
                <div ref={searchInputRef}>
                  <SearchInput
                    placeholder={
                      langData.lang == "ltr"
                        ? "Searched keyword, Hashtags..."
                        : "ابحث ... "
                    }
                    prefix={
                      <SearchOutlined
                        className="site-form-item-icon"
                        color="rgba(15, 17, 52, 0.6)"
                      />
                    }
                    smallScreen
                    isRtlDataSearch={langData.lang == "ltr" ? false : true}
                    onFocus={() => {
                      setShowDropdown(true);
                    }}
                    onChange={(e) => {
                      // setSearched(e.target.value);
                      setShowDropdown(true);
                    }}
                    value={searched}
                  />
                </div>

                <div className="d-flex flex-row-reverse mx-4 align-items-center">
                  <div ref={searchInputRef}>
                    <SearchInput
                      placeholder={
                        langData.lang == "ltr"
                          ? "Searched keyword, Hashtags..."
                          : "ابحث ..."
                      }
                      prefix={
                        <SearchOutlined className="site-form-item-icon" />
                      }
                      largerScreen
                      isRtlDataSearch={langData.lang == "ltr" ? false : true}
                      onChange={(e) => {
                        setSearched(e.target.value);
                      }}
                      onFocus={() => {
                        setShowDropdown(true);
                      }}
                      value={searched}
                    />
                  </div>

                  <StyledNavDropdown
                    className="pr-2 py-2 align-text-top mx-md-0 mx-lg-0  mx-xxl-4"
                    id="basic-nav-dropdown"
                    show={showDropdown}
                    searchDropdown
                  >
                    <MegaDropdownContainer
                      className="eventsNav pt-0 mt-0"
                      ref={searchDropdownRef}
                    >
                      <Row>
                        <Col xs="12" md="12" className="text-left">
                          <Row>
                            <Col lg={9}>
                              <SearchDropdownDiv>
                                <section>
                                  <p className="text-muted heading">
                                    {" "}
                                    {langData.lang == "ltr"
                                      ? "Article"
                                      : "مقالات"}{" "}
                                  </p>
                                  <Row>
                                    {articleNewData?.map((item) => (
                                      <Col lg={4}>
                                        <div className="d-flex align-items-center my-3 my-md-0">
                                          <div>
                                            <img
                                              src={item.img}
                                              width={100}
                                              height={100}
                                            />
                                          </div>
                                          <div>
                                            <p className="title">
                                              {item.title}
                                            </p>
                                          </div>
                                        </div>
                                      </Col>
                                    ))}
                                  </Row>
                                </section>
                                <section>
                                  <p className="text-muted heading">
                                    {langData.lang == "ltr"
                                      ? "Podcasts"
                                      : "محتوى مرئي ومسموع"}{" "}
                                  </p>
                                  <Row>
                                    {podcastsNewData?.map((item) => (
                                      <Col lg={4}>
                                        <div className="d-flex align-items-center  my-3 my-md-0">
                                          <div>
                                            <img
                                              src={item.img}
                                              width={100}
                                              height={100}
                                            />
                                          </div>
                                          <div>
                                            <p className="title">
                                              {item.title}
                                            </p>
                                          </div>
                                        </div>
                                      </Col>
                                    ))}
                                  </Row>
                                </section>
                                <section>
                                  <p className="text-muted heading">
                                    {langData.lang == "ltr"
                                      ? "Videos"
                                      : "مقاطع فيديو"}{" "}
                                  </p>
                                  <Row>
                                    {videosNewData?.map((item) => (
                                      <Col lg={4}>
                                        <div className="d-flex align-items-center  my-3 my-md-0">
                                          <div>
                                            <img
                                              src={item.img}
                                              width={100}
                                              height={100}
                                            />
                                          </div>
                                          <div>
                                            <p className="title">
                                              {item.title}
                                            </p>
                                          </div>
                                        </div>
                                      </Col>
                                    ))}
                                  </Row>
                                </section>
                              </SearchDropdownDiv>
                            </Col>
                            <Col lg={3}>
                              <SearchedList>
                                <div className="rightCol ms-3">
                                  {searchNewData?.map((item) => (
                                    <div className="d-flex  gap-1">
                                      <div>
                                        <img src={item.icon}></img>
                                      </div>
                                      <div>
                                        <p>{item.title}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </SearchedList>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </MegaDropdownContainer>
                  </StyledNavDropdown>
                </div>
              </Nav>
              <div className="btnDiv">
                <Button login>
                  {langData.lang == "ltr" ? "Login" : "حسابي"}{" "}
                </Button>
                <Button register>
                  {langData.lang == "ltr" ? "Register" : "تسجيل"}{" "}
                </Button>
                <div className="mt-3 ps-1">
                  <Switch className="" onChange={handleToggleDirection} />
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </NavbarWrapper>
  );
};

export default MainNavbar;
