import React from "react";
import Card from "react-bootstrap/Card";
import {
  BookSeatBtn,
  BookSeatDiv,
  CardTag,
  ConferencesCardSection,
} from "./styled";
import { BsBookmarks } from "react-icons/bs";

function ConferencesCard({ item, index }) {
  return (
    <ConferencesCardSection>
      <Card>
        <div className="imgDiv">
          <Card.Img variant="top" src={item.img} />
          <p className="conferenceDate">
            18 <br />
            May
          </p>
        </div>
        <Card.Body>
          <CardTag
            className={
              (item.staus === "Online" || item.staus === "اونلاين") &&
              "onlineTag "
            }
          >
            {item.staus}
          </CardTag>
          <Card.Title>{item.title}</Card.Title>

          <p className="conferencePlace">{item.text}</p>
          <p className="conferenceTime">{item.time}</p>
          <BookSeatDiv>
            <BookSeatBtn>{item.buttonText}</BookSeatBtn>
            <BsBookmarks className="bookmarkIcon" />
          </BookSeatDiv>
        </Card.Body>
      </Card>
    </ConferencesCardSection>
  );
}

export default ConferencesCard;
