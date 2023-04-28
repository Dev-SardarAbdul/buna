import React from "react";
import { Container } from "react-bootstrap";
import { AboutText, AboutTitle, ContactUsBtn, HeroSection } from "./elements";
import { useAppSelector } from "../../store/store";
import supportIcon from "../../assets/images/Support EN.png";
const HeroComp = () => {
  const langData = useAppSelector((data) => data.langData);

  return (
    <HeroSection>
      <Container>
        {langData.lang === "rtl" ? (
          <AboutTitle>نبذة عن بُنى</AboutTitle>
        ) : (
          <AboutTitle>About Buna</AboutTitle>
        )}
        {langData.lang === "rtl" ? (
          <AboutText>
            المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق
            بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي
            في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف
            بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة
            العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد
            المجتمع.
            <br />
            المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق
            بين أفراد المجتمع.المنصة العربية الأولى تهدف بإثراء المحتوى العربي
            في ادارة المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف
            بإثراء المحتوى العربي في ادارة المرافق بين أفراد المجتمع، المنصة
            العربية الأولى تهدف بإثراء المحتوى العربي في ادارة المرافق بين أفراد
            المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى العربي في ادارة
            المرافق بين أفراد المجتمع، المنصة العربية الأولى تهدف بإثراء المحتوى
            العربي في ادارة المرافق بين أفراد المجتمع.
          </AboutText>
        ) : (
          <AboutText>
            Welcome to the Institute for the Future of Work's Knowledge Hub.
            Here you will find a range of resources representing a wide range of
            perspectives on the future of work.The Hub surfaces different voices
            and forms of research to enable others to critically engage with key
            themes. Resources may not reflect the Institute's views.
          </AboutText>
        )}
        {langData.lang === "rtl " ? (
          <ContactUsBtn>تواصل معنا</ContactUsBtn>
        ) : (
          <ContactUsBtn>Contact Us</ContactUsBtn>
        )}
      </Container>
    </HeroSection>
  );
};

export default HeroComp;
