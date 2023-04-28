import React, { useEffect, useState } from "react";
import { DigitalLibraryWrapper, HeroWrapper } from "./styled";
import { Col, Container, Row } from "react-bootstrap";
import arrow from "../../assets/images/icons/arrow.svg";
import info from "../../assets/images/icons/info.svg";
import assetIcon from "../../assets/images/icons/assetIcon.svg";
import enginnerDept from "../../assets/images/icons/enginner.svg";
import supplyIcon from "../../assets/images/icons/supply.svg";
import contactIcon from "../../assets/images/icons/contact.svg";
import energyIcon from "../../assets/images/icons/energy.svg";
import risk from "../../assets/images/icons/risk.svg";

import articleImg from "../../assets/images/digitalImg.svg";
import { useAppSelector } from "../../store/store";

const NationalDirectory = () => {
  const langData = useAppSelector((data) => data.langData);
  let categoryData = [
    {
      icon: assetIcon,
      title: "Asset Management",
      arrow: arrow,
    },
    {
      icon: info,
      title: "Financial Planning",
      arrow: arrow,
    },
    {
      icon: enginnerDept,
      title: "Operating Administration",
      arrow: arrow,
    },
    {
      icon: info,
      title: "Maintenance Management",
      arrow: arrow,
    },
    {
      icon: supplyIcon,
      title: "Supply Chain Management",
      arrow: arrow,
    },
    {
      icon: contactIcon,
      title: "Contract Management",
      arrow: arrow,
    },
    {
      icon: risk,
      title: "Risk Management",
      arrow: arrow,
    },
    {
      icon: energyIcon,
      title: "Energy Management",
      arrow: arrow,
    },
  ];

  let categoryArabicDatData = [
    {
      icon: assetIcon,
      title: "إدارة الأصول",
      arrow: arrow,
    },
    {
      icon: info,
      title: "التخطيط المالي",
      arrow: arrow,
    },
    {
      icon: enginnerDept,
      title: "إدارة التشغيل",
      arrow: arrow,
    },
    {
      icon: contactIcon,
      title: "إدارة الصيانة",
      arrow: arrow,
    },
    {
      icon: supplyIcon,
      title: "إدارة سلاسل الإمداد",
      arrow: arrow,
    },
    {
      icon: risk,
      title: "إدارة المخاطر",
      arrow: arrow,
    },
    {
      icon: info,
      title: "ادارة العقود",
      arrow: arrow,
    },
    {
      icon: energyIcon,
      title: "إدارة الطاقة والاستدامة",
      arrow: arrow,
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

  return (
    <DigitalLibraryWrapper>
      <HeroWrapper>
        <Container>
          <div>
            <h1>
              {langData.lang == "ltr"
                ? "National directory manual of assets and facilities management"
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
      <Container>
        <Row className="my-5">
          <Col lg={3}>
            <p className="title">
              {langData.lang == "ltr" ? "Directory Categories" : "أهداف الدليل"}
            </p>

            <div className="categoryWrapper">
              {newCategoryData?.map((item) => (
                <div className="categoryInnerWrapper">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="IconWrapper">
                      <img
                        className="digitalLibraryIcon"
                        src={item.icon}
                        alt=""
                      />
                    </div>

                    <p className="info "> {item.title}</p>
                  </div>

                  <div>
                    <img className="" src={item.arrow} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={9} className=" ">
            <div className="libraryDetails">
              <p className="libraryInfo">
                {langData.lang == "ltr"
                  ? "The National Directory of Assets and Facilities Management"
                  : "الدليل الوطني لإدارة الأصول والمرافق"}
              </p>
              <div className="libraryDivWithImg">
                <div className="textLibrary">
                  <ul>
                    {langData?.lang == "ltr" ? (
                      <li>
                        <a href="#">Prototypes</a> allow designers to experiment
                        with various ideas and solutions. They give the designer
                        freedom to test multiple potential scenarios, while
                        adjusting along the way to optimize the usability of the
                        end product.
                      </li>
                    ) : (
                      <li>
                        استكشاف الأفكار الجديدة. تسمح النماذج الأولية للمصممين
                        بتجربة الأفكار والحلول المختلفة. إنها تمنح المصمم حرية
                        اختبار عدة سيناريوهات محتملة، مع التعديل على طول الطريق
                        لتحسين قابلية استخدام المنتج النهائي.
                      </li>
                    )}
                    {langData?.lang == "ltr" ? (
                      <li>
                        <strong>Discovering problems.</strong> Prototypes are a
                        great way to further understand the problem the user is
                        facing. They empower designers to better understand the
                        product or system by literally engaging with them and
                        observing what works and what doesn’t.
                      </li>
                    ) : (
                      <li>
                        اكتشاف المشاكل. تعد النماذج الأولية طريقة رائعة لفهم
                        المشكلة التي يواجهها المستخدم بشكل أكبر. إنها تمكن
                        المصممين من فهم المنتج أو النظام بشكل أفضل من خلال
                        التفاعل معهم حرفيًا ومراقبة ما يصلح وما لا يصلح.
                      </li>
                    )}

                    {langData?.lang == "ltr" ? (
                      <li>
                        Discovering problems. Prototypes are a great way to
                        further understand the problem the user is facing. They
                        empower designers to better understand the product or
                        system by literally engaging with them and observing
                        what works and what doesn’t.
                      </li>
                    ) : (
                      <li>
                        اكتشاف المشاكل. تعد النماذج الأولية طريقة رائعة لفهم
                        المشكلة التي يواجهها المستخدم بشكل أكبر. إنها تمكن
                        المصممين من فهم المنتج أو النظام بشكل أفضل من خلال
                        التفاعل معهم حرفيًا ومراقبة ما يصلح وما لا يصلح.
                      </li>
                    )}

                    {langData.lang == "ltr" ? (
                      <li>
                        <strong>Engaging stakeholders and end users.</strong>{" "}
                        Prototypes allow designers to engage with stakeholders
                        and end users, which gives them the chance to become
                        involved in the process and feel a sense of ownership.
                        This will potentially aid in their “buy-in” and help
                        push the concept forward faster.
                      </li>
                    ) : (
                      <li>
                        تحديد مشاكل الاستخدام. يعد إنشاء نماذج أولية للمستخدمين
                        للتفاعل معها طريقة رائعة لتحديد المشكلات المحيطة بقابلية
                        استخدام منتجك. سيسمح هذا للمصمم بإجراء التغييرات اللازمة
                        قبل التطوير.
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <img src={articleImg} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </DigitalLibraryWrapper>
  );
};

export default NationalDirectory;
