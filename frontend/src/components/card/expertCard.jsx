import React from "react";
import Card from "react-bootstrap/Card";
import { ExpertCardWrapper } from "./styled";
import { GoPrimitiveDot } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";

function ExpertCard({ item, langData }) {
  return (
    <ExpertCardWrapper>
      <Card>
        <div className="wrapper">
          <div className="imgDiv">
            <img className="img-fluid cardImg" src={item.img1} />
          </div>
          <div
            className={`cardText ${langData.lang === "rtl" && "arabicText"}`}
          >
            <p
              className={`status ${
                (item.status === "Available" || item.status === "اونلاين") &&
                "available"
              }`}
            >
              <GoPrimitiveDot />
              <span>{item.status}</span>
            </p>
            <p className="name">{item.name}</p>
            <p className="experience">{item.experience}</p>
            <div className="btnDiv">
              <button className="askBtn">{item.btntext}</button>
              <div className="socialIconDiv">
                <FaLinkedinIn className="socialIcon" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </ExpertCardWrapper>
  );
}

export default ExpertCard;
