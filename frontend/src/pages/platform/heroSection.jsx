import React from "react";
import { HeroWrapper } from "./styled";
import platformBg from "../../assets/images/platformBg.jpg";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
const HeroSection = () => {
  const langData = useAppSelector((data) => data.langData);
  return (
    <HeroWrapper>
      <Container>
        <div>
          <h1>
            {langData.lang == "ltr"
              ? " Selection from platform"
              : "مختارات من البوابة"}
          </h1>
          {langData.lang == "ltr" ? (
            <p>
              Welcome to the Institute for the Future of Work's Knowledge Hub.
              Here you will find a range of resources representing a wide range
              of perspectives on the future of work.The Hub surfaces different
              voices and forms of research to enable others to critically engage
              with key themes. Resources may not reflect the Institute's views.
            </p>
          ) : (
            <p>
              مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
              مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
              العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
              من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد
              آراء المعهد.
            </p>
          )}
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
