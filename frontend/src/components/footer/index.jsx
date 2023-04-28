import React from "react";
import {
  FooterSection,
  FooterText,
  LastText,
  Menu1,
  SocilaIcon,
} from "./elements";
import logo from "../../assets/images/footerlogo.svg";
import expoLogo from "../../assets/images/expo.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useAppSelector } from "../../store/store";
const Footer = () => {
  const langData = useAppSelector((data) => data.langData);

  return (
    <FooterSection>
      <Container>
        <div className="footer-data">
          <Row>
            <Col lg={2}>
              <Menu1>
                <h5 className="title"> {langData.lang == "ltr" ? "Platform" : "المنصة"} </h5>
                <div className="mt-3">
                  <p> {langData.lang == "ltr" ? "About buna" : " عن بُنى"} </p>
                  <p>
                    {" "}
                    {langData.lang == "ltr"
                      ? "Supporting entities"
                      : " الجهات الداعمة"}{" "}
                  </p>
                </div>
              </Menu1>
            </Col>

            <Col lg={2}>
              <Menu1>
                <h5 className="title">
                  {langData.lang == "ltr"
                    ? "Digital library"
                    : "المكتبة الرقمية"}
                </h5>
                <div className="mt-3">
                  <p className="subTitle">
                    {langData.lang == "ltr"
                      ? "Digital content"
                      : "المحتوى الرقمي"}
                  </p>
                  <p>
                    {langData.lang == "ltr" ? "Articles" : " مشورة الخبراء"}
                  </p>
                  <p>
                    {langData.lang == "ltr"
                      ? "Expert Advice"
                      : "  أسئلة فنية وعن المنصة "}
                  </p>
                  <p>
                    {langData.lang == "ltr"
                      ? "Q&A About Platform"
                      : " أسئلة فنية وعن المنصة "}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="subTitle">
                    {" "}
                    {langData.lang == "ltr"
                      ? "Digital encounters"
                      : "المحتوى المرئي والمسموع"}{" "}
                  </p>
                  <div className="mt-3">
                    <p>
                      {" "}
                      {langData.lang == "ltr" ? "Podcasts" : " المدونة الصوتية"}
                    </p>
                    <p> {langData.lang == "ltr" ? "Courses" : " الدورات"}</p>
                    <p>
                      {" "}
                      {langData.lang == "ltr"
                        ? "Recorded meeting"
                        : " اللقاءات المسجلة"}
                    </p>
                    <p>
                      {" "}
                      {langData.lang == "ltr"
                        ? "Video clips and Visuals"
                        : " مقاطع الفيديو/ المرئيات و (الرسوم المتحركة)"}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="subTitle">
                    {langData.lang == "ltr"
                      ? "Knowledge library"
                      : "المكتبة المعرفية"}
                  </p>
                  <div className="mt-3">
                    <p>
                      {" "}
                      {langData.lang == "ltr"
                        ? " Guidelines and procedures"
                        : " الادلة والاجراءات"}
                    </p>
                    <p>
                      {" "}
                      {langData.lang == "ltr"
                        ? "Assets and Facility Management"
                        : " الدليل الوطني لادارة الاصول والمرافق"}{" "}
                    </p>
                    <p>
                      {" "}
                      {langData.lang == "ltr"
                        ? "Recommended books"
                        : " الكتب الموصى بها"}{" "}
                    </p>
                  </div>
                </div>
              </Menu1>
            </Col>

            <Col lg={2}>
              <Menu1>
                <h5 className="title">
                  {" "}
                  {langData.lang == "ltr"
                    ? "Top News"
                    : "آخر الأخبار"}{" "}
                </h5>
                <div className="mt-3">
                  <h4 className="title"> {langData.lang == "ltr" ? "Experts" : "الخبراء"} </h4>
                  {/* <h4> {langData.lang=="ltr" ? "Events" :""} </h4> */}
                  {/* 
                  <h4>{langData.lang=="ltr" ? "Reach us through" :""} </h4> */}
                </div>

                {/* <div className="mt-3">
                <p>About buna</p>
                <p>Supporting entities</p>
              </div> */}
              </Menu1>
            </Col>

            <Col lg={3}>
              <div className="img-wrapper">
                <img src={logo} />
              </div>
              {langData.lang == "ltr" ? (
                <FooterText>
                  Welcome to the Knowledge Buildings platform of the EXPRO
                  website - the Government Projects and Spending Efficiency
                  Authority. Here you will find a collection of resources
                  representing a wide range of perspectives on the future of
                  Arabic content.
                </FooterText>
              ) : (
                <FooterText>
                  مرحبًا بكم في منصة بُنى المعرفة التابعة لموقع إكسبرو - هيئة
                  كفاءة الإنفاق والمشروعات الحكومية. ستجد هنا مجموعة من الموارد
                  التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل المحتوى
                  العربي. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين
                  الآخرين من المشاركة بشكل نقدي في الموضوعات الرئيسية.
                </FooterText>
              )}
                <h5 className="socialTitle">
                  {" "}
                  {langData.lang == "ltr"
                    ? "Reach Us Through"
                    : "تواصل معنا"} 
                </h5>
              <SocilaIcon>
                
                <div className="icon">
                  <FaFacebookF fontSize={20} color="#224292" />
                </div>
                {/* <FiFacebook /> */}
                <div className="icon">
                  <AiFillInstagram fontSize={20} color="#224292" />
                </div>
                <div className="icon">
                  <AiOutlineTwitter fontSize={20} color="#224292" />
                </div>
                <div className="icon">
                  <AiFillYoutube fontSize={20} color="#224292" />
                </div>
              </SocilaIcon>
              {langData.lang == "ltr" ? (
                <LastText>
                  All rights reserved to the Authority for Spending Efficiency
                  and Governmental Projects © {new Date().getFullYear()}
                </LastText>
              ) : (
                <LastText>
                  جميع الحقوق محفوظة لهيئة كفاءة الإنفاق والمشروعات الحكومية ©{" "}
                  {new Date().getFullYear()}
                </LastText>
              )}
            </Col>

            <Col lg={3}>
              <div className="img-wrapper">
                <img src={expoLogo} />
              </div>
               
            </Col>

            {/* <Col lg={2}></Col> */}
            {/* <div className="footer-data"> */}
          </Row>
        </div>
      </Container>
    </FooterSection>
  );
};

export default Footer;
