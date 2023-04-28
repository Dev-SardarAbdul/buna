import React from "react";
import { ModalWrapper } from "./styled";
import modalImg from "../../assets/images/modal.png";
import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
const OnBoardModal = () => {
  const langData = useAppSelector((data) => data.langData);
  return (
    <ModalWrapper>
      <Row className="align-items-center">
        <Col lg={6}>
          <img
            src={modalImg}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Col>
        <Col lg={6}>
          <div className="mx-3 contentWrapper">
            <h2 className="title">
              {langData.lang == "ltr"
                ? "Welcome to our onboard"
                : "مرحبا بكم في البوابة المعرفية بُنى"}{" "}
            </h2>
            {langData.lang == "ltr" ? (
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            ) : (
              <p className="description">
                لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
                كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن
                الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع
                وتدافعت عليه لعمل كتاب عينة. لقد صمد ليس فقط لخمسة قرون ، ولكن
                أيضًا القفزة في التنضيد الإلكتروني ، وظل دون تغيير جوهري.
              </p>
            )}

            <button className="registerBtn">
              {langData.lang == "ltr" ? "Register" : "سجّل الآن"}{" "}
            </button>
          </div>
        </Col>
      </Row>
    </ModalWrapper>
  );
};

export default OnBoardModal;
