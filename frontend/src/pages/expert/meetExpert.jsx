import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expert1 from "../../assets/images/buna-expert/1.png";
import expert2 from "../../assets/images/buna-expert/2.png";
import expert3 from "../../assets/images/buna-expert/3.png";
import expert4 from "../../assets/images/buna-expert/4.png";
import expert5 from "../../assets/images/buna-expert/5.png";
import expert6 from "../../assets/images/buna-expert/6.png";
import expert7 from "../../assets/images/buna-expert/7.png";
import expert8 from "../../assets/images/buna-expert/8.png";
import expert9 from "../../assets/images/buna-expert/9.png";
import { GoPrimitiveDot } from "react-icons/go";

import linkden from "../../assets/images/linkden.png";
import filterIcon from "../../assets/images/icons/filter.svg";
import {
  ConseltBtn,
  Experience,
  MeetExpertSection,
  MeetTitle,
  Name,
  PaginationDiv,
} from "./elements";
import { Dropdown, Pagination } from "antd";

const MeetExpert = () => {
  const data = [
    {
      img1: expert1,
      status: "Not Available",
      name: "EN Mohammad Haddad",
      experience: "Agricultural Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert2,
      status: "Available",
      name: "EN. Saeed Haddad",
      experience: "Agricultural Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert3,
      status: "Not Available",
      name: "EN. Khalid Haddad",
      experience: "Software Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert4,
      status: "Available",
      name: "Dr. Leen Haddad",
      experience: "Design",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert5,
      status: "Not Available",
      name: "Dr. Mohammad Haddad",
      experience: "Aviation Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert6,
      status: "Available",
      name: "EN. Fahad Haddad",
      experience: "Aviation Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert7,
      status: "Not Available",
      name: "EN. Lama Haddad",
      experience: "Software Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert8,
      status: "Available",
      name: "Dr. Ahmad Haddad",
      experience: "Aviation Engineering",
      btntext: "Ask for a consultation",
      img2: linkden,
    },
    {
      img1: expert9,
      status: "Not Available",
      name: "Dr. Rama Haddad",
      experience: "Facilities Management",
      btntext: "Life Skills",
      img2: linkden,
    },
  ];

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const items = [
    {
      key: "1",
      label: <p className="m-0">Ascending</p>,
    },

    {
      key: "3",
      label: <p className="m-0">Descending</p>,
    },
  ];
  return (
    <MeetExpertSection>
      <Container>
        <div className="filterdDiv">
          {/* <div>
            <h2 className="">Selected Articles</h2>
          </div> */}
          <MeetTitle>Meet our Experts</MeetTitle>
          <div className="filterBtnMain">
            <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={filterIcon} alt="" /> Filter By
                </button>
              </Dropdown>
            </div>
            <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={filterIcon} alt="" /> Sorted By
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
        <Row>
          {data.map((item) => (
            <Col md={6} xl={4}>
              <div className="expert-info">
                <div>
                  <img
                    src={item.img1}
                    className="img-fluid"
                    style={{ minHeight: 160 }}
                  />
                </div>
                <div className="mt-2 meetExpertWrapper">
                  <div className="d-flex gap-1 statusWrapper">
                    <GoPrimitiveDot
                      color={
                        item.status === "Available" ? "#bccf0d" : "#c4c4c4"
                      }
                    />

                    <p
                      className={`expertStatus ${
                        item.status === "Available" && "availableColor"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                  <Name className="meetExpertsName">{item.name}</Name>
                  <Experience className="meetExpertExperience">
                    {item.experience}
                  </Experience>
                  <br />
                  <div className="d-flex gap-2 mt-1">
                    <ConseltBtn meetBtn >{item.btntext}</ConseltBtn>
                    <img src={item.img2} width={40} className="img-fluid" />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <PaginationDiv>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
        </PaginationDiv>
      </Container>
    </MeetExpertSection>
  );
};

export default MeetExpert;
