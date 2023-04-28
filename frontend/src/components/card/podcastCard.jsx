import React from "react";
import { CardSection, PodcastCardSection } from "./styled";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PodcastCards = ({ item }) => {
  const navigate = useNavigate();

  return (
    <PodcastCardSection>
      <Card
        onClick={() => {
          navigate("/podcast-playing-video");
        }}
      >
        <Card.Img
          variant="top"
          height={200}
          style={{ height: "200px" }}
          src={item.img}
        />
        <Card.Body>
          <Card.Title className="audioCardTitle">{item.title}</Card.Title>
          <Card.Text className="audioCardText">{item.text}</Card.Text>
          <div className="audio-info">
            <span>{item.episode}</span>
            <span>{item.time}</span>
          </div>
          <div className="btnwrapper">
            <img src={item.playimg} />
            <span>{item.btntext}</span>
          </div>
        </Card.Body>
      </Card>
    </PodcastCardSection>
  );
};

export default PodcastCards;
