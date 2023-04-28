import React, { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import {
  SupervisorText,
  SupervisorTitle,
  SupervisorySection,
} from "./elements";
import img from "../../assets/images/supervisorimg.svg";
import { useAppSelector } from "../../store/store";
const SupriviosryCommitee = () => {
  const langData = useAppSelector((data) => data.langData);
  return (
    <SupervisorySection>
      <Container>
        <div className="d-flex gap-4">
          <img
            src={img}
            width={50}
            height={60}
            style={{ transform: "translateY(-5px)" }}
          />
          {langData.lang == "ltr" ? (
            <SupervisorTitle> Supervisory Committee</SupervisorTitle>
          ) : (
            <SupervisorTitle>اللجنة الإشرافية</SupervisorTitle>
          )}
        </div>
        {langData.lang == "ltr" ? (
          <SupervisorText>
            The CEO of the Government Projects and Spending Efficiency
            Authority, and after reviewing Cabinet Resolution No. 389 dated 11
            Rajab 1442 AH regarding the establishment of the authority, and
            after reviewing Cabinet Resolution No. 337 dated 06/25/1439 AH and
            the letter of His Highness the Secretary General of the Council of
            Ministers No. 3553 dated 11/3/1442 AH and the decision of the
            Steering Committee for the Localization of Operation and Maintenance
            Contracts to adopt the initiative of the Knowledge Platform for
            Asset and Facilities Management, and based on the powers conferred
            on it by law, decides the following:
            <p>
              First: A committee shall be formed under the name (the supervisory
              committee of the knowledge platform for facilities management).
            </p>
          </SupervisorText>
        ) : (
          <SupervisorText>
            إن الرئيس التنفيذي لهيئة كفاءة الإنفاق والمشروعات الحكومية، وبعد
            الاطلاع على قرار مجلس الوزراء رقم 389 وتاريخ 11 رجب ١٤٤٢ هجري بشأن
            إنشاء الهيئة، وبعد الاطلاع على قرار مجلس الوزراء رقم ٣٣٧ وتاريخ
            ٢٥/٠٦/١٤٣٩ هجري وخطاب سمو الأمين العام لمجلس الوزراء رقم ٣٥٥٣ وتاريخ
            ١١/٣/١٤٤٢ هجري وقرار اللجنة التوجيهية لتوطين عقود التشغيل والصيانة
            باعتماد مبادرة المنصة المعرفية لإدارة الأصول والمرافق، وبناءً على
            الصلاحيات الخولة له نظاماً، يقرر ما يلي:
            <p>
              أولاً: تشكل لجنة بمسمى (اللجنة الاشرافية للمنصة المعرفية لإدارة
              المرافق)
            </p>
          </SupervisorText>
        )}
      </Container>
    </SupervisorySection>
  );
};

export default SupriviosryCommitee;
