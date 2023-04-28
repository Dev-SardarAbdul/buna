import React, { useEffect, useState } from "react";
import {
  NationalWrapper,
  HeroWrapper,
  RightColDiv,
  CardWrapper,
  UnorderedList,
} from "./styled";
import { Col, Container, Row } from "react-bootstrap";
import arrow from "../../assets/images/icons/arrow.svg";
import info from "../../assets/images/icons/info.svg";
import articleImg from "../../assets/images/digitalImg.svg";
import digitalAsset from "../../assets/images/digitalAsset.jpg";

import circle from "../../assets/images/icons/circle.svg";
import circle2 from "../../assets/images/icons/circle2.svg";
import circle3 from "../../assets/images/icons/circle3.svg";
import gallery from "../../assets/images/galleryImg.png";
import assetIcon from "../../assets/images/icons/assetIcon.svg";
import buisnessIcon from "../../assets/images/icons/buisnessAsset.svg";
import energyManagement from "../../assets/images/icons/energyManagement.svg";
import contractManagement from "../../assets/images/icons/contractManagement.svg";
import riskManagement from "../../assets/images/icons/riskManagement.svg";
import supplyChain from "../../assets/images/icons/supplyChain.svg";
import enginnerDept from "../../assets/images/icons/enginner.svg";
import downloadIcon from "../../assets/images/icons/download.svg";
import { useAppSelector } from "../../store/store";
import { UserOutlined } from "@ant-design/icons";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "antd";
import PdfCard from "../../components/card/pdfCard";
import { GoPrimitiveDot } from "react-icons/go";

const NationalCategoryDetails = () => {
  const langData = useAppSelector((data) => data.langData);
  const [cardValue, setCardValue] = useState(false);

  const cardData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
  ];

  let categoryData = [
    {
      id: 1,
      icon: assetIcon,
      title: "Asset Management",
      arrow: arrow,
    },
    {
      id: 2,
      icon: info,
      title: "Financial Planning",
      arrow: arrow,
    },

    {
      id: 3,
      icon: buisnessIcon,
      title: "Operation Administration",
      arrow: arrow,
    },
    {
      id: 4,
      icon: enginnerDept,
      title: "Maintenance Management",
      arrow: arrow,
    },
    {
      id: 5,
      icon: supplyChain,
      title: "Supply Chain Management",
      arrow: arrow,
    },
    {
      id: 6,
      icon: contractManagement,
      title: "Contract Management",
      arrow: arrow,
    },
    {
      id: 7,
      icon: riskManagement,
      title: "Risk Management",
      arrow: arrow,
    },
    {
      id: 8,
      icon: energyManagement,
      title: "Energy Management and...",
      arrow: arrow,
    },
    {
      id: 9,
      icon: assetIcon,
      title: "Asset Management",
      arrow: arrow,
    },
    {
      id: 10,
      icon: info,
      title: "Financial Planning",
      arrow: arrow,
    },
    {
      id: 11,
      icon: buisnessIcon,
      title: "Operating Administration",
      arrow: arrow,
    },
    {
      id: 12,
      icon: enginnerDept,
      title: "Maintenance Management",
      arrow: arrow,
    },
    {
      id: 13,
      icon: supplyChain,
      title: "Supply Chain Management",
      arrow: arrow,
    },
    {
      id: 14,
      icon: contractManagement,
      title: "Contract Management",
      arrow: arrow,
    },
    {
      id: 15,
      icon: riskManagement,
      title: "Risk Management",
      arrow: arrow,
    },
    {
      id: 16,
      icon: energyManagement,
      title: "Energy Management and...",
      arrow: arrow,
    },
  ];

  let categoryArabicDatData = [
    {
      id: 1,
      icon: assetIcon,
      title: "إدارة الأصول",
      arrow: arrow,
    },
    {
      id: 2,
      icon: info,
      title: " تقييم حالة الاصول",
      arrow: arrow,
    },

    {
      id: 3,
      icon: buisnessIcon,
      title: "التخطيط المالي",
      arrow: arrow,
    },
    {
      id: 4,
      icon: enginnerDept,
      title: " إدارة العمليات التشغيلية",
      arrow: arrow,
    },
    {
      id: 5,
      icon: supplyChain,
      title: "إدارة الصيانة",
      arrow: arrow,
    },
    {
      id: 6,
      icon: contractManagement,
      title: "ضوابط العمل",
      arrow: arrow,
    },
    {
      id: 7,
      icon: riskManagement,
      title: "إدارة سلاسل الإمداد",
      arrow: arrow,
    },
    {
      id: 8,
      icon: energyManagement,
      title: "ادارة العقود",
      arrow: arrow,
    },
    {
      id: 9,
      icon: assetIcon,
      title: " الصحة و الأمن و البيئة",
      arrow: arrow,
    },
    {
      id: 10,
      icon: info,
      title: "الجودة",
      arrow: arrow,
    },
    {
      id: 11,
      icon: buisnessIcon,
      title: "إدارة المخاطر",
      arrow: arrow,
    },
    {
      id: 12,
      icon: enginnerDept,
      title: "إدارة الوثائق",
      arrow: arrow,
    },
    {
      id: 13,
      icon: supplyChain,
      title: "إدارة الطوارىء",
      arrow: arrow,
    },
    {
      id: 14,
      icon: contractManagement,
      title: "مراقبة الاداء",
      arrow: arrow,
    },
    {
      id: 15,
      icon: riskManagement,
      title: "دور ادارة الأصول ....",
      arrow: arrow,
    },
    {
      id: 16,
      icon: energyManagement,
      title: "إدارة الطاقة والاستدامة",
      arrow: arrow,
    },
  ];

  const orderedListData = [
    {
      id: 1,
      text: `The National Guide for Asset and Facilities Management issued by the Authority for Efficiency in Spending and Government Projects (EXPRO) consists of 17 volumes. vital sector.`,
    },
    {
      id: 2,
      text: `EXPRO thanks the members of the Advisory Committee for their efforts in reviewing the National Guide for Asset and Facilities Management and their recommendation to adopt and circulate it as a national methodology for managing the assets and facilities of government entities.`,
    },
    {
      id: 3,
      text: `Success Partners : Ministry of Finance, Ministry of Health, Ministry of Education, Ministry of Municipal and Rural Affairs and Housing, General Authority for State Real Estate, General Authority of Civil Aviation, Saudi Contractors Authority, Riyadh Chamber, Royal Commission for Jubail and Yanbu, Saudi Building Code, Ministry of Transport and Logistics.`,
    },
  ];

  const orderedListDataArabic = [
    {
      id: 1,
      text: `يتألف الدليل الوطني لإدارة الأصول والمرافق الصادر عن هيئة كفاءة الإنفاق والمشروعات الحكومية (اكسبرو) من 17 مجلداً، ويهدف إلى توحيد وتقييس العمليات والإجراءات الخاصة بأنشطة إدارة الأصول والمرافق في الجهات الحكومية بالمملكة العربية السعودية مما يسهم في تحسين وتقنين النفقات التشغيلية وتعزيز جودة الخدمات المقدمة في هذا القطاع الحيوية.`,
    },
    {
      id: 2,
      text: `تشكر اكسبرو أعضاء اللجنة الإستشارية على جهودهم في مراجعة الدليل الوطني لإدارة الأصول والمرافق وتوصيتهم بإعتماده وتعميمه كمنهجية وطنية لإدارة أصول ومرافق الجهات الحكومية بالمملكة.`,
    },
    {
      id: 3,
      text: ` شركاء النجاح :
      وزارة المالية , وزارة الصحة , وزارة التعليم , وزارة الشؤون البلدية والقروية والإسكان , الهيئة العامة لعقارات الدولة, الهيئة العامة للطيران المدني , الهيئة السعودية للمقاولين ,غرفة الرياض , الهيئة الملكية للجبيل وينبع ,كود البناء السعودي , وزارة النقل والخدمات اللوجستية.`,
    },
  ];

  const [newCategoryData, setNewCategoryData] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewCategoryData(categoryData);
    } else {
      setNewCategoryData(categoryArabicDatData);
    }
  }, [langData]);

  const [activeCategory, setActiveCategory] = useState(null);

  function handleItemClick(item) {
    setActiveCategory(item.id);
    setCardValue(true);
  }

  return (
    <NationalWrapper>
      <HeroWrapper>
        <Container>
          <div>
            <h1>
              {langData.lang == "ltr"
                ? "National directory  manual of assets and facilities management"
                : " الدليل الوطني لإدارة الأصول والمرافق"}
            </h1>
            {langData.lang == "ltr" ? (
              <p>
                Welcome to the Institute for the Future of Work's Knowledge Hub.
                Here you will find a range of resources representing a wide
                range of perspectives on the future of work.The Hub surfaces
                different voices and forms of research to enable others to
                critically engage with key themes. Resources may not reflect the
                Institute's views.
              </p>
            ) : (
              <p>
                مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
                مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول
                مستقبل العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث
                لتمكين الآخرين من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد
                لا تعكس الموارد آراء المعهد.
              </p>
            )}
          </div>
        </Container>
      </HeroWrapper>
      <Container className="bottomContainer">
        <Row className="my-5">
          <Col lg={3} className="categoryleftCol">
            <p className="title">
              {langData.lang == "ltr" ? "Directory Categories" : "أهداف الدليل"}
            </p>

            <div className="categoryWrapper">
              {newCategoryData?.map((item) => (
                <div
                  style={{ cursor: "pointer" }}
                  className={`categoryInnerWrapper ${
                    item.id === activeCategory ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <div
                      className={`IconWrapper ${
                        item.id === activeCategory ? "active" : ""
                      }`}
                    >
                      <img className="infoIcon" src={item.icon} alt="" />
                    </div>

                    <p className="info"> {item.title}</p>
                  </div>

                  <div
                    className={langData.lang == "rtl" && "libraryMarginRight"}
                  >
                    <img src={item.arrow} alt="" />
                  </div>
                </div>
              ))}
            </div>
            {/* <button className="downLoadBtn">
              <div className="d-flex align-items-center justify-content-between">
                <p style={{ margin: 0 }}>
                  {" "}
                  {langData.lang == "ltr"
                    ? "Download Manual"
                    : "تحميل الدليل"}{" "}
                </p>
                <img src={downloadIcon} alt="" style={{ marginLeft: "10px" }} />
              </div>
            </button> */}
          </Col>
          <Col lg={9} className="categoryrightCol">
            {!cardValue ? (
              <>
                <RightColDiv>
                  <div className="libraryDetails">
                    {langData.lang === "ltr" ? (
                      <p className="libraryInfo paddingBottom">
                        The National Directory of Asset and Facilities
                        Management
                      </p>
                    ) : (
                      <p className="libraryInfo paddingBottom">
                        الدليل الوطني لإدارة الأصول ومالمرافق
                      </p>
                    )}
                  </div>

                  <Row className="mt-5">
                    <Col lg={7}>
                      <UnorderedList>
                        <span className="contentDot">•</span>

                        {langData.lang === "ltr" ? (
                          <p>
                            The National Guide for Asset and Facilities
                            Management issued by the Authority for Efficiency in
                            Spending and Government Projects (EXPRO) consists of
                            17 volumes. vital sector.
                          </p>
                        ) : (
                          <p>
                            يتألف الدليل الوطني لإدارة الأصول والمرافق الصادر عن
                            هيئة كفاءة الإنفاق والمشروعات الحكومية (اكسبرو) من
                            17 مجلداً، ويهدف إلى توحيد وتقييس العمليات
                            والإجراءات الخاصة بأنشطة إدارة الأصول والمرافق في
                            الجهات الحكومية بالمملكة العربية السعودية مما يسهم
                            في تحسين وتقنين النفقات التشغيلية وتعزيز جودة
                            الخدمات المقدمة في هذا القطاع الحيوية.
                          </p>
                        )}
                      </UnorderedList>
                      <UnorderedList className="marginDiv">
                        <span className="contentDot">•</span>

                        {langData.lang === "ltr" ? (
                          <p>
                            EXPRO thanks the members of the Advisory Committee
                            for their efforts in reviewing the National Guide
                            for Asset and Facilities Management and their
                            recommendation to adopt and circulate it as a
                            national methodology for managing the assets and
                            facilities of government entities.
                          </p>
                        ) : (
                          <p>
                            تشكر اكسبرو أعضاء اللجنة الإستشارية على جهودهم في
                            مراجعة الدليل الوطني لإدارة الأصول والمرافق وتوصيتهم
                            بإعتماده وتعميمه كمنهجية وطنية لإدارة أصول ومرافق
                            الجهات الحكومية بالمملكة.
                          </p>
                        )}
                      </UnorderedList>
                    </Col>
                    <Col lg={5}>
                      <img className="img-fluid galleryImg" src={gallery} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <UnorderedList className="marginDiv">
                        <span className="contentDot">•</span>

                        {langData.lang === "ltr" ? (
                          <p>
                            Success Partners : Ministry of Finance, Ministry of
                            Health, Ministry of Education, Ministry of Municipal
                            and Rural Affairs and Housing, General Authority for
                            State Real Estate, General Authority of Civil
                            Aviation, Saudi Contractors Authority, Riyadh
                            Chamber, Royal Commission for Jubail and Yanbu,
                            Saudi Building Code, Ministry of Transport and
                            Logistics.
                          </p>
                        ) : (
                          <p>
                            شركاء النجاح : وزارة المالية , وزارة الصحة , وزارة
                            التعليم , وزارة الشؤون البلدية والقروية والإسكان ,
                            الهيئة العامة لعقارات الدولة, الهيئة العامة للطيران
                            المدني , الهيئة السعودية للمقاولين ,غرفة الرياض ,
                            الهيئة الملكية للجبيل وينبع ,كود البناء السعودي ,
                            وزارة النقل والخدمات اللوجستية.
                          </p>
                        )}
                      </UnorderedList>
                    </Col>
                  </Row>
                </RightColDiv>
              </>
            ) : (
              <>
                <RightColDiv>
                  <div className="libraryDetails">
                    <p className="libraryInfo">
                      {langData.lang == "ltr"
                        ? "Asset Management"
                        : "إدارة الأصول"}
                    </p>
                    <p className="loremText">lorem ipsum</p>
                    <div className="searchDiv mt-2">
                      <Input
                        placeholder="Search"
                        prefix={<AiOutlineSearch />}
                        size="large"
                      />
                      <button className="searchBtn">Search</button>
                    </div>
                  </div>
                </RightColDiv>
                <CardWrapper>
                  <Row>
                    {cardData.map((item, index) => (
                      <Col sm={6} lg={3}>
                        <PdfCard item={item} indecx={index} />
                      </Col>
                    ))}
                  </Row>
                </CardWrapper>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </NationalWrapper>
  );
};

export default NationalCategoryDetails;
