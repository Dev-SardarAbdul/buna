import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExploreSection, ExploreTitle, ExploreWrapper } from "./elements";
import exp1 from "../../assets/images/explore/img1.svg";
import exp2 from "../../assets/images/explore/img2.svg";
import exp3 from "../../assets/images/explore/img3.svg";
import exp4 from "../../assets/images/explore/img4.svg";
import exp5 from "../../assets/images/explore/img5.svg";
import exp6 from "../../assets/images/explore/img6.svg";
import exp7 from "../../assets/images/explore/img7.svg";
import exp8 from "../../assets/images/explore/img8.svg";
import { useAppSelector } from "../../store/store";

const ExploreComp = () => {
  const langData = useAppSelector((data) => data.langData);
  const data = [
    {
      image: exp1,
      text: "Asset Management",
    },
    {
      image: exp2,
      text: "Financial Planning",
    },
    {
      image: exp3,
      text: "Operating Administration",
    },
    {
      image: exp4,
      text: "Maintenance Management",
    },
    {
      image: exp5,
      text: "Supply Chain Management",
    },
    {
      image: exp6,
      text: "Contract Management",
    },
    {
      image: exp7,
      text: "Risk Management",
    },
    {
      image: exp8,
      text: "Energy Management & Sustainability",
    },
  ];

  const arabicData = [
    {
      image: exp1,
      text: "إدارة الأصول",
    },
    {
      image: exp2,
      text: "التخطيط المالي",
    },
    {
      image: exp3,
      text: "إدارة التشغيل",
    },
    {
      image: exp4,
      text: "إدارة الصيانة",
    },
    {
      image: exp5,
      text: "إدارة سلاسل الإمداد",
    },
    {
      image: exp6,
      text: "إدارة العقود",
    },
    {
      image: exp7,
      text: "إدارة المخاطر",
    },
    {
      image: exp8,
      text: "إدارة الطاقة والاستدامة",
    },
  ];

  const [newData, setNewData] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(data);
    } else {
      setNewData(arabicData);
    }
  }, [langData]);

  return (
    <ExploreSection>
      <Container>
        {langData.lang == "ltr" ? (
          <ExploreTitle>Explore BUNA by topic</ExploreTitle>
        ) : (
          <ExploreTitle>استكشف بوابة بُنى حسب الموضوع</ExploreTitle>
        )}
        <Row>
          {newData &&
            newData.map((item) => (
              <Col
                sm={12}
                md={4}
                xl={3}
                xxl={3}
             
                className="mt-4 d-flex justify-content-center"
              >
                <ExploreWrapper>
                  <img src={item.image} className="icon ms-2" />
                  <span>{item.text}</span>
                </ExploreWrapper>
              </Col>
            ))}
        </Row>
      </Container>
    </ExploreSection>
  );
};

export default ExploreComp;
