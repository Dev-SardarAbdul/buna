import React, { useEffect, useState } from "react";
import {
  MainPagination,
  MainWrapper,
  FilterBtnWrapper,
  NewsLetter,
} from "./styled";
import { Col, Container, Row } from "react-bootstrap";
import { Select, Dropdown, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import {
  cardData,
  articlesCardData,
  latestaudiocardData,
  arbicarticlesCardData,
  arabiclatestaudiocardData,
} from "../../components/data";
import CardComp from "../../components/card";
import AudioCardcomp from "../../components/card/card2";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
import filterIcon from "../../assets/images/icons/filter.svg";
import sortIcon from "../../assets/images/icons/sort.svg";
import { useAppSelector } from "../../store/store";

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

const MainSection = () => {
  const langData = useAppSelector((data) => data.langData);

  
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(articlesCardData);
    } else {
      setNewData(arbicarticlesCardData);
    }
  }, [langData]);

  const [audiolatest, setAudiolatest] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setAudiolatest(latestaudiocardData);
    } else {
      setAudiolatest(arabiclatestaudiocardData);
    }
  }, [langData]);

  return (
    <Container>
      <MainWrapper>
        <div className="filterdDiv">
          <div>
            <h2 className="">{langData.lang=="ltr" ? "Selected Articles":"تعرف على خبرائنا"} </h2>
          </div>
          <FilterBtnWrapper>
            <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={filterIcon} alt="" /> {langData.lang=="ltr" ? "Filter By":"فرز حسب"}
                </button>
              </Dropdown>
            </div>
            {     <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={sortIcon} alt="" />  {langData.lang=="ltr" ? "Sorted By":"ترتيب حسب"}
                </button>
              </Dropdown>
            </div> }
        
          </FilterBtnWrapper>
        </div>
        <Row>
          {newData?.map((item) => (
            <Col lg={3} className="my-2">
              <CardComp item={item} />
            </Col>
          ))}
        </Row>
        <MainPagination defaultCurrent={1} total={50} />

        <div className="filterdDiv">
          <div>
            <h2 className="">{langData.lang=="ltr" ? " Selected Podcasts":"مختارات مسموعة"}</h2>
          </div>
          <FilterBtnWrapper>
          <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={filterIcon} alt="" /> {langData.lang=="ltr" ? "Filter By":"فرز حسب"}
                </button>
              </Dropdown>
            </div>
            {     <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={sortIcon} alt="" />  {langData.lang=="ltr" ? "Sorted By":"ترتيب حسب"}
                </button>
              </Dropdown>
            </div> }
        
          </FilterBtnWrapper>
        </div>
        <Row>
          {audiolatest?.map((item) => (
            <Col lg={3} className="my-2">
              <AudioCardcomp item={item} />
            </Col>
          ))}
        </Row>

        <MainPagination defaultCurrent={1} total={50} />

     
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
                      ? " Enter Address"
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
      </MainWrapper>
    </Container>
  );
};

export default MainSection;
