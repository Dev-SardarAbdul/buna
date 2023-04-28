import React from "react";
import { HeroSection, HeroText, HeroTitle } from "./elements";
import { Container, Row, Col } from "react-bootstrap";
import headphone from "../../assets/images/headphone.png";
import { useAppSelector } from "../../store/store";

const HeroComp = () => {
  const langData = useAppSelector((data) => data.langData);

  return (
    <HeroSection>
      <Container>
        <Row>
          <Col xl={8}>
            <HeroTitle>
              {langData.lang == "ltr"
                ? ` Buna Experts become closer  
              to you!`
                : "خبراء بوابة بُنى أصبحوا أقرب إليك!"}
            </HeroTitle>
            <HeroText>
              {langData.lang == "ltr"
                ? ` Welcome to the Institute for the Future of Work's Knowledge Hub.
                Here you will find a range of resources representing a wide range
                of perspectives on the future of work.The Hub surfaces different
                voices and forms of research to enable others to critically engage
                with key themes. Resources may not reflect the Institute's views.`
                : "مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد آراء المعهد."}
            </HeroText>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default HeroComp;
