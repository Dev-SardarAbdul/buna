import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DataDiv, GoalSection, GoalTitle } from "./elements";
import img from "../../assets/images/goalimg.svg";
import img1 from "../../assets/images/goal1.svg";
import img2 from "../../assets/images/goal2.svg";
import img3 from "../../assets/images/goal3.svg";
import img4 from "../../assets/images/goal4.svg";
import { useAppSelector } from "../../store/store";
import { Col } from "react-bootstrap";

const GoalComp = () => {
  const langData = useAppSelector((data) => data.langData);

  const data = [
    {
      image1: img1,
      title: "Raise awareness of the field of public facilities management",
      text: "Welcome to the Institute for the Future of Work's Knowledge Hub. Here you will find a range of resources representing a wide range of perspectives on the future of work.The Hub surfaces different voices and forms of research to enable others to critically engage with key themes. Resources may not reflect the Institute's views.",
    },
    {
      image1: img2,
      title: "Knowledge enrichment for those interested and specialist",
      text: "Welcome to the Institute for the Future of Work's Knowledge Hub. Here you will find a range of resources representing a wide range of perspectives on the future of work.The Hub surfaces different voices and forms of research to enable others to critically engage with key themes. Resources may not reflect the Institute's views.",
    },
  ];

  const arabicData = [
    {
      image1: img1,
      title: "رفع الوعي بمجال إدارة المرافق العامة",
      text: "المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع، محتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع.",
    },
    {
      image1: img2,
      title: "الإثراء المعرفي للمهتمين والمتخصصين",
      text: "المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع، محتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع.",
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
    <GoalSection>
      <Container>
        <div className="d-flex gap-3 title">
          <img src={img} width={45} />
          {langData.lang == "ltr" ? (
            <GoalTitle>Goals</GoalTitle>
          ) : (
            <GoalTitle> الأهداف الرئيسية</GoalTitle>
          )}
        </div>
        <Row>
          {newData &&
            newData.map((item) => (
              <Col lg={6}>
                <DataDiv>
                  <div className="img-wrapper">
                    <img src={item.image1} />
                  </div>
                  <p className="title">{item.title}</p>
                  <p>{item.text}</p>
                </DataDiv>
              </Col>
            ))}
        </Row>
      </Container>
    </GoalSection>
  );
};

export default GoalComp;
