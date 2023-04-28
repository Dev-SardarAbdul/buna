import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExpertDetailSection, Icon, Text, Title } from "./elements";
import {
  GoBtn,
  NewsletterSection,
  NewsMaindev,
  NewsText,
  NewsTitle,
} from "./elements";
import expert1 from "../../assets/images/expertdetail.png";
import img5 from "../../assets/images/consultanticon.svg";

// import expert1 from "../../assets/images/expert1.png";

import linkden from "../../assets/images/linkden.png";
import {
  ConseltBtn,
  Experience,
  MeetExpertSection,
  MeetTitle,
  Name,
  PaginationDiv,
} from "./elements";
import { AiOutlineUpload } from "react-icons/ai";
import {
  ConsulatntBtn,
  Imgdiv,
  MainActiveDev,
  Points,
  Profission,
  RecomendedExpertSection,
  RecomendedTitle,
  Value,
  ValueCount,
  ViewProfileBtn,
} from "./elements";
import img from "../../assets/images/icon-quote.png";
import img2 from "../../assets/images/member1.png";
import img4 from "../../assets/images/expert-detail/1.png";
import img7 from "../../assets/images/expert-detail/2.png";
import img6 from "../../assets/images/expert-detail/3.png";
import img8 from "../../assets/images/expert-detail/5.png";

import img3 from "../../assets/images/newsletter.svg";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
import { MamberName } from "../homeComp/elements";
import { NewsLetter } from "../platform/styled";
import { useAppSelector } from "../../store/store";
import supportIcon from "../../assets/images/Support EN.png";
const ExpertDetail = () => {
  const data = [
    {
      img: img4,
      name: "Dr. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img7,
      name: "EN. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img6,
      name: "EN. Julian Harman",
      profission: "Agricultural Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
    {
      img: img8,
      name: "EN. Julian Harman",
      profission: "Software Engineering",
      consultantbtn: "Consultation request",
      viewprofilebtn: "View profile",
    },
  ];

  const langData = useAppSelector((data) => data.langData);

  return (
    <ExpertDetailSection>
      <Container>
        <div className="top-data">
          <div className="expert-info">
            <div className="img-wrapper">
              <img src={expert1} />
            </div>
            <div className="mt-2">
              <div className="title">
                {" "}
                <span className="dots">&nbsp;</span>{" "}
                {langData.lang == "ltr" ? "Available" : "متاح"}{" "}
              </div>
              <div className="header-info">
                <Name>
                  {langData.lang == "ltr"
                    ? "EN Mohammed Al-Qaraawi"
                    : "م. محمد مطاوع"}
                </Name>
                <Icon>
                  <AiOutlineUpload fontSize={20} />
                </Icon>
              </div>
              <Experience className="meetExperience">
                {langData.lang == "ltr"
                  ? "Agricultural Engineering"
                  : "م. محمد مطاوع"}
              </Experience>

              <Experience className="meetExperience">
                {langData.lang == "ltr"
                  ? "Expro, Riyadh KSA"
                  : "اكسبرو، الرياض المملكة العربية السعودية"}
              </Experience>
              <br />
              <div className="d-flex gap-2 buttonWrapper">
                <ConseltBtn>
                  <span>
                    <img src={img5} width={15} />
                  </span>
                  &nbsp;&nbsp;
                  {langData.lang == "ltr"
                    ? "    Ask for a consultation"
                    : "اطلب استشارة"}
                </ConseltBtn>
                <img src={linkden} width={40} />
              </div>
            </div>
          </div>

          <Title>
            {" "}
            {langData.lang == "ltr"
              ? "Personal information"
              : "المعلومات الشخصية"}
          </Title>
          {langData.lang == "ltr" ? (
            <Text>
              Welcome to the Knowledge Center of the Future of Work Institute.
              Here you will find a collection of resources representing a wide
              range of perspectives on the future of work. The hub presents
              different voices and forms of research to enable others to engage
              critically on key topics. Resources may not reflect the views of
              the Institute.
            </Text>
          ) : (
            <Text>
              مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
              مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
              العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
              من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد
              آراء المعهد.
            </Text>
          )}

          <Title>
            {langData.lang == "ltr"
              ? " Skills and experiences"
              : " المهارات والخبرات"}
          </Title>
          {langData.lang == "ltr" ? (
            <Text>
              Welcome to the Knowledge Center of the Future of Work Institute.
              Here you will find a collection of resources representing a wide
              range of perspectives on the future of work. The hub presents
              different voices and forms of research to enable others to engage
              critically on key topics. Resources may not reflect the views of
              the Institute.
            </Text>
          ) : (
            <Text>
              مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
              مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
              العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
              من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد
              آراء المعهد.
            </Text>
          )}

          <Title>
            {langData.lang == "ltr" ? "Study and research" : "الدراسة والبحوث"}
          </Title>
          {langData.lang == "ltr" ? (
            <Text>
              Welcome to the Knowledge Center of the Future of Work Institute.
              Here you will find a collection of resources representing a wide
              range of perspectives on the future of work. The hub presents
              different voices and forms of research to enable others to engage
              critically on key topics. Resources may not reflect the
              Institute's views. Welcome to the Future of Work Institute's
              Knowledge Hub. Here you will find a collection of resources
              representing a wide range of perspectives on the future of work.
              The hub presents different voices and forms of research to enable
              others to participate critically in the matter.
            </Text>
          ) : (
            <Text>
              مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
              مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
              العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
              من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد
              آراء المعهد.مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل.
              ستجد هنا مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر
              حول مستقبل العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث
              لتمكين الآخرين من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا
              تعكس الموارد آراء المعهد.مرحبًا بكم في مركز المعرفة التابع لمعهد
              مستقبل العمل. ستجد هنا مجموعة من الموارد التي تمثل مجموعة واسعة من
              وجهات النظر حول مستقبل العمل. يعرض المحور أصواتًا وأشكالًا مختلفة
              من البحث لتمكين الآخرين من المشاركة بشكل نقدي في الموضوعات
              الرئيسية. قد لا تعكس الموارد آراء المعهد.
            </Text>
          )}
        </div>

        {/* <div className="mt-5">
          <RecomendedTitle> Recommended experts</RecomendedTitle>

          <Row>
            {data.map((item) => (
              <Col lg={3}>
                <MainActiveDev>
                  <Imgdiv>
                    <img src={item.img} />
                  </Imgdiv>
                  <MamberName>{item.name}</MamberName>
                  <Profission>{item.profission}</Profission>
                  <ConsulatntBtn>{item.consultantbtn}</ConsulatntBtn>
                  <ViewProfileBtn>{item.viewprofilebtn}</ViewProfileBtn>
                </MainActiveDev>
              </Col>
            ))}
          </Row>
        </div> */}

        <NewsLetter className="mt-5">
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
    </ExpertDetailSection>
  );
};

export default ExpertDetail;
