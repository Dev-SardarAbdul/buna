import React, { useEffect, useState } from "react";
import {
  GoBtn,
  NewsletterSection,
  NewsMaindev,
  NewsText,
  NewsTitle,
} from "./elements";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/images/newsletter.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
const Newsletter = () => {
  const langData = useAppSelector((data) => data.langData);
  const navigate = useNavigate();

  const [newData, setNewData] = useState(null);

  return (
    <NewsletterSection>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={5}>
            <NewsMaindev>
              {langData?.lang == "ltr" ? (
                <NewsTitle>Subscribe to our Newsletter</NewsTitle>
              ) : (
                <NewsTitle>اشترك في نشرتنا الإخبارية</NewsTitle>
              )}

              {langData?.lang == "ltr" ? (
                <NewsText>
                  Subscribe to our newsletter to receive exclusive offer, latest
                  <br /> news and updates
                </NewsText>
              ) : (
                <NewsText>
                  اشترك في النشرة الإخبارية لدينا لتلقّي العروض الحصرية وآخر
                  الأخبار والتحديثات
                </NewsText>
              )}
              <div className="info">
                <input
                  type="email"
                  placeholder={
                    langData.lang == "ltr"
                      ? " Enter email"
                      : "أدخل عنوان البريد الإلكتروني"
                  }
                />
                {langData?.lang == "ltr" ? (
                  <GoBtn>Lets Go</GoBtn>
                ) : (
                  <GoBtn>اشترك الآن</GoBtn>
                )}
              </div>
            </NewsMaindev>
          </Col>

          <Col lg={3} className="mt-3">
            <img className="img-fluid imgss" src={img} />
          </Col>
        </Row>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter;
