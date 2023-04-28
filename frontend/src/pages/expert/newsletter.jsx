import React from "react";
import {
  GoBtn,
  NewsletterSection,
  NewsMaindev,
  NewsText,
  NewsTitle,
} from "./elements";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/images/newsletter.svg";
import { NewsLetter } from "../platform/styled";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
const Newsletter = () => {
  return (
    <NewsletterSection>
      <Container>
        {/* <Row>
                <Col lg={3}>
                </Col>
                <Col lg={5}>
                    <NewsMaindev>
                    <NewsTitle>Subscribe to our Newsletter</NewsTitle>
                    <NewsText>Subscribe to our newsletter to receive exclusive offer, latest<br/> news and updates</NewsText>
                    <div className='info'>
                    <input type="email" placeholder='enter email' />
                    <GoBtn>Lets Go</GoBtn>
                    </div>
                    </NewsMaindev>
                </Col>

                <Col lg={3}>
                <img src={img} />
                </Col>
            </Row> */}
        <NewsLetter>
          <div className="newsLetterMain">
            <div>
              <h2 className="detailSubscribe">Subscribe to Our Newsletter</h2>
              <p className="subscribeText">
                Subscribe to our newsletter to receive exclusive offer, latest
                news and updates
              </p>
              <div className="emailWrapper">
                <input
                  className="email"
                  type="email"
                  placeholder="Email Address"
                />
                <button>Lets Go</button>
              </div>
            </div>
            <div>
              <img src={newsletterIcon} alt="" />
            </div>
          </div>
        </NewsLetter>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter;
