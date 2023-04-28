import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MainSection, MainWrapper, Text, Title } from "./elements";
import img from "../../assets/images/entitiesimg1.png";

import expo from "../../assets/images/supporting/expo.png";
import mmrah from "../../assets/images/supporting/mmrah.png";
import mwan from "../../assets/images/supporting/mwan.png";
import newec from "../../assets/images/supporting/newec.png";
import nfcec from "../../assets/images/supporting/nfcec.png";
import sca from "../../assets/images/supporting/sca.png";
import seec from "../../assets/images/supporting/seec.png";
import spga from "../../assets/images/supporting/spga.png";
import wera from "../../assets/images/supporting/wera.png";
import supportIcon from "../../assets/images/Support EN.png";

import { useAppSelector } from "../../store/store";
const SupportingEntitesComp = () => {
  const langData = useAppSelector((data) => data.langData);

  const data = [
    {
      image: mwan,
      name: "MWAN",
      center: "National center of waste management",
      link: "https://mwan.gov.sa/",
    },
    {
      image: newec,
      name: "NWECC",
      center: "National center of waste management",
      link: "https://maee.gov.sa/",
    },
    {
      image: mmrah,
      name: "MMRAH",
      center: "Ministry of Muncipal Rural Affairs & Housing",
      link: "https://www.momrah.gov.sa/",
    },
    {
      image: expo,
      name: "EXPRO",
      center: "National center of waste management",
      link: "https://expro.gov.sa/",
    },
    {
      image: nfcec,
      name: "NCFEC",
      center: "National center of waste management",
      link: "https://ncec.gov.sa/",
    },
    {
      image: wera,
      name: "WERA",
      center: "Water & Electricity Regulatory Authority",
      link: "https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC155",
    },
    {
      image: seec,
      name: "SEEC",
      center: "Saudi Energy Efficiency Center",
      link: "https://www.seec.gov.sa/",
    },
    {
      image: mmrah,
      name: "MMRAH",
      center: "Ministry of Muncipal Rural Affairs & Housing",
      link: "https://www.saudieng.sa/Arabic/Pages/default.aspx",
    },
    {
      image: sca,
      name: "SCA",
      center: "Saudi Contractors Authority",
      link: "https://sca.sa/",
    },
    {
      image: spga,
      name: "SPGA",
      center: "State Properties General Authority",
      link: "https://spga.gov.sa/",
    },
  ];

  const arabicData = [
    {
      image: mwan,
      name: "MWAN",
      center: "المركز الوطني لإدارة النفايات",
    },
    {
      image: newec,
      name: "NWECC",
      center: "المركز الوطني لكفاءة وترشيد المياه",
    },
    {
      image: mmrah,
      name: "MMRAH",
      center: "وزارة الشؤون البلدية والقروية والإسكان",
    },
    {
      image: expo,
      name: "EXPRO",
      center: "هيئة كفاءة الإنفاق والمشروعات الحكومية",
    },
    {
      image: nfcec,
      name: "NCFEC",
      center: "المركز الوطني للرقابة على الالتزام البيئي",
    },
    {
      image: wera,
      name: "WERA",
      center: "هيئة تنظيم المياه والكهرباء",
    },
    {
      image: seec,
      name: "SEEC",
      center: "المركز السعودي لكفاءة الطاقة",
    },
    {
      image: mmrah,
      name: "MMRAH",
      center: "الهيئة السعودية للمهندسين",
    },
    {
      image: sca,
      name: "SCA",
      center: "الهيئة السعودية للمقاولين",
    },
    {
      image: spga,
      name: "SPGA",
      center: "الهيئة العامة لعقارات الدولة",
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
    <MainSection>
      <Container>
        {langData.lang == "ltr" ? (
          <Title>
            Supporting bodies in the areas
            <br /> of facilities management
          </Title>
        ) : (
          <Title>الجهات الداعمة في مجالات إدارة المرافق</Title>
        )}

        {langData.lang == "ltr" ? (
          <Text>
            Welcome to the Knowledge Structures portal of the Future of Work
            Institute. Here you will find a collection of resources representing
            a wide range of perspectives on the future of work. The hub presents
            different voices and forms of research to enable others to engage
            critically on key topics. Resources may not reflect the views of the
            Institute.
          </Text>
        ) : (
          <Text>
            مرحبًا بكم في بوابة بُنى المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
            مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
            العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
            من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد آراء
            المعهد.
          </Text>
        )}

        <Row>
          {newData?.map((item) => (
            <Col xl={3} sm={6} md={6}>
              <MainWrapper>
                <a
                  href={item.link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Card className="warpperCard">
                    <div className="img-wrapper">
                      <img src={item.image} style={{ cursor: "pointer" }} />
                    </div>
                    <div
                      style={{
                        border: "1px solid  #F0F0F0",
                        marginTop: "2.5rem",
                      }}
                    ></div>
                    <h5 className={langData.lang === "rtl" && "paddingRight"}>
                      {item.name}
                    </h5>
                    <p className={langData.lang === "rtl" && "paddingRight"}>
                      {item.center}
                    </p>
                  </Card>
                </a>
              </MainWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </MainSection>
  );
};

export default SupportingEntitesComp;
