import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Experience,
  Name,
  SteeringCommiteeSection,
  SteeringText,
  SteeringTitle,
} from "./elements";
import img from "../../assets/images/steeringimg.svg";
import img2 from "../../assets/images/steeringmember.svg";
import logo1 from "../../assets/images/logo.png";
import steeringmember1 from "../../assets/images/about-us/img1.png";
import steeringmember2 from "../../assets/images/about-us/img2.png";
import steeringmember3 from "../../assets/images/about-us/img3.png";
import steeringmember4 from "../../assets/images/about-us/img4.png";
import steeringmember5 from "../../assets/images/about-us/img5.png";
import steeringmember6 from "../../assets/images/about-us/img6.png";
import steeringmember7 from "../../assets/images/about-us/img7.png";
import steeringmember8 from "../../assets/images/about-us/img8.png";
import starImg from "../../assets/images/star.png";
import aboutUs1 from "../../assets/images/aboutUs1.png";
import aboutUs2 from "../../assets/images/aboutUs2.png";
import aboutUs3 from "../../assets/images/aboutUs3.png";
import aboutUs4 from "../../assets/images/aboutUs4.png";
import aboutUs5 from "../../assets/images/aboutUs5.png";
import aboutUs6 from "../../assets/images/aboutUs6.png";
import aboutUs7 from "../../assets/images/aboutUs7.png";
import aboutUs8 from "../../assets/images/aboutUs8.png";
import aboutUslogo1 from "../../assets/images/aboutUslogo1.png";
import aboutUslogo2 from "../../assets/images/aboutUslogo2.png";
import aboutUslogo3 from "../../assets/images/aboutUslogo3.png";
import aboutUslogo4 from "../../assets/images/aboutUslogo4.png";
import aboutUslogo5 from "../../assets/images/aboutUslogo5.png";
import aboutUslogo6 from "../../assets/images/aboutUslogo6.png";
import aboutUslogo7 from "../../assets/images/aboutUslogo7.png";

import { useAppSelector } from "../../store/store";

const Steeringcommitee = () => {
  const langData = useAppSelector((data) => data.langData);

  const data = [
    {
      img1: aboutUs2,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo2,
    },
    {
      img1: aboutUs3,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo3,
    },
    {
      img1: aboutUs4,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo4,
    },
    {
      img1: aboutUs5,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo5,
    },
    {
      img1: aboutUs6,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo6,
    },
    {
      img1: aboutUs7,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo7,
    },
    {
      img1: aboutUs8,
      status: "Member",
      name: "Dr. Mohammed hadad",
      experience: "MWAN President",
      img2: aboutUslogo2,
    },
  ];
  const arabicData = [
    {
      img1: aboutUs2,
      status: "Chairman",
      name: "د. عبدالله بن ناصر ابو اثنين",
      experience: "نائب وزير الموارد البشرية والتنمية الإجتماعية",
      img2: aboutUslogo2,
    },
    {
      img1: aboutUs3,
      status: "Member",
      name: "م. عبد الرزاق صبحي العوجان",
      experience: "الرئيس التنفيذي لهيئة كفاءة الإنفاق والمشروعات الحكومية",
      img2: aboutUslogo3,
    },
    {
      img1: aboutUs4,
      status: "Member",
      name: "أ. سامية المالكي",
      experience: "وكيل وزارة المالية للشؤون المالية والحسابية",
      img2: aboutUslogo4,
    },
    {
      img1: aboutUs5,
      status: "Member",
      name: "أ. سامية المالكي",
      experience: "وكيل وزارة المالية للشؤون المالية والحسابية",
      img2: aboutUslogo5,
    },
    {
      img1: aboutUs6,
      status: "Member",
      name: "أ. سامية المالكي",
      experience: "وكيل وزارة المالية للشؤون المالية والحسابية",
      img2: aboutUslogo6,
    },
    {
      img1: aboutUs7,
      status: "Member",
      name: "أ. سامية المالكي",
      experience: "وكيل وزارة المالية للشؤون المالية والحسابية",
      img2: aboutUslogo7,
    },
    {
      img1: aboutUs8,
      status: "Member",
      name: "أ. سامية المالكي",
      experience: "وكيل وزارة المالية للشؤون المالية والحسابية",
      img2: aboutUslogo2,
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
    <SteeringCommiteeSection>
      <Container>
        <div className="d-flex gap-4">
          <img src={img} width={50} />
          {langData.lang === "ltr" ? (
            <SteeringTitle>
              Steering Committee for the Localization of
              <br /> Operation and Maintenance Contracts Initiative
            </SteeringTitle>
          ) : (
            <SteeringTitle>
              اللجنة التوجيهية لمبادرة توطين عقود التشغيل والصيانة
            </SteeringTitle>
          )}
        </div>
        {langData.lang == "ltr" ? (
          <SteeringText>
            The committee supervises the localization of operation and
            maintenance through the development of policies and procedures that
            support localization and the implementation of initiatives related
            to Cabinet Resolution No. (337) dated 1/25/1439 AH and the study of
            the Ministry of Human Resources and Social Development for the
            operation and maintenance sector.
            <br />
            <br />
            The localization of the operation and maintenance sector is within
            the objectives of the Kingdom’s Vision 2030 aimed at raising the
            rates of localization in the promising sectors of the labor market,
            and given the diversity of the sector’s fields that may overlap with
            many supervisory authorities by nature on some activities, the
            steering committee was formed according to the directives of the
            Council of Ministers notified by the telegram of His Excellency the
            President Royal Court No. 15309 headed by His Excellency the Deputy
            Minister of Human Resources and Social Development for Labor, and
            the Council of Ministers directive was issued to the Steering
            Committee on 10/27/2020 AD to supervise the initiatives of the
            Ministry of Human Resources and Social Development study and Cabinet
            Resolution No. (337), until the year 2025 AD.
          </SteeringText>
        ) : (
          <SteeringText>
            تقوم اللجنة بالإشراف على توطين التشغيل والصيانة من خلال وضع السياسات
            والإجراءات الداعمة للتوطين وتنفيذ المبادرات المرتبطة بقرار مجلس
            الوزراء رقم (٣٣٧) وتاريخ ٢٥/١/١٤٣٩ هجري ودراسة وزارة الموارد البشرية
            والتنمية الاجتماعية لقطاع التشغيل والصيانة. يعد توطين قطاع التشغيل
            والصيانة ضمن مستهدفات رؤية المملكة 2030 الهادفة إلى رفع نسب التوطين
            في قطاعات سوق العمل الواعدة، ونظراً إلى تنوع مجالات القطاع التي قد
            تتداخل مع العديد من الجهات الإشرافية بطبيعتها على بعض الأنشطة تم
            تشكيل اللجنة التوجيهية بموجب توجيه مجلس الوزراء المبلغ ببرقية معالي
            رئيس الديوان الملكي رقم 15309 برئاسة معالي نائب وزير الموارد البشرية
            والتنمية الإجتماعية للعمل وصدر تويجه مجلس الوزراء للجنة التوجيهية
            بتاريخ 27/10/2020م للإشراف على مبادرات دراسة وزارة الموارد البشرية
            والتنمية الإجتماعية وقرار مجلس الوزراء رقم (337)، حتى عام 2025م.
          </SteeringText>
        )}

        <div className="steeringmember-info">
          <div className="d-flex gap-4">
            <img src={img2} width={50} />
            {langData.lang == "ltr" ? (
              <SteeringTitle>Steering Committee members</SteeringTitle>
            ) : (
              <SteeringTitle>أعضاء اللجنة التوجيهية</SteeringTitle>
            )}
          </div>
          <div className="top-card">
            <Col lg={6}>
              <div className="topexpertInfoWrapper">
                <div className="expert-info">
                  <div>
                    <img src={aboutUs1} className="img-fluid" />
                  </div>
                  <div className="expert-data">
                    <div className="chairmanStatus">
                      {" "}
                      <img src={starImg} width={20} alt="" /> <p>Chairman</p>{" "}
                    </div>
                    {langData.lang == "ltr" ? (
                      <Name>Dr. Mohammed hadad</Name>
                    ) : (
                      <Name>د. عبدالله بن ناصر ابو اثنين</Name>
                    )}

                    {langData.lang == "rtl" ? (
                      <Experience>
                        نائب وزير الموارد البشرية والتنمية الإجتماعية
                      </Experience>
                    ) : (
                      <Experience>MWAN President</Experience>
                    )}
                    <br />
                    <div>
                      <img
                        src={aboutUslogo1}
                        className=""
                        style={{ marginTop: "-18px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <Row>
            {newData?.map((item) => (
              <Col lg={6}>
                <div className="expertInfoWrapper">
                  <div className="expert-info">
                    <div>
                      <img src={item.img1} className="img-fluid" />
                    </div>
                    <div className="expert-data">
                      <div className="status">{item.status}</div>
                      <Name>{item.name}</Name>
                      <Experience>{item.experience}</Experience>
                      <br />
                      <div>
                        <img
                          src={item.img2}
                          className="img-fluid"
                          style={{ marginTop: "-18px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </SteeringCommiteeSection>
  );
};

export default Steeringcommitee;
