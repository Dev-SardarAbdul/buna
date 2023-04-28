import React from "react";
import { CardSection } from "./styled";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/cardimg1.png";
import profileimg1 from "../../assets/images/profileimg1.png";
import { useNavigate } from "react-router-dom";
const CardComp = ({ item }) => {
  const navigate = useNavigate();

  return (
    <CardSection>
      <Card
        onClick={() => {
          navigate("/article/details");
        }}
      >
        <Card.Img variant="top" height={200} src={item.img} />
        <Card.Body>
           <p className="cardTitleP">{item.title}</p>
          {/* <Card.Title>{item.title}</Card.Title> */}
          <p className="cardTextPara" style={{ marginBottom: "0rem" }}>
            {item.text}
          </p>
          <hr style={{ border: "1px solid #F0F0F0", marginTop: "20px" }} />

          <div className="info">
            <div>
              <img
                width={30}
                height={30}
                src={item.profileimg}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="profile-info">
              <h5>{item.name}</h5>
              <p>{item.profission}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardSection>
  );
};

export default CardComp;
