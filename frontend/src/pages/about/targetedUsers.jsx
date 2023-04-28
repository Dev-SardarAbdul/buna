import React from "react";
import {
  TargetedUserContainer,
  TargetedUsersHeader,
  TargetedUsersWrapper,
} from "./elements";
import { Col, Container, Row } from "react-bootstrap";
import targetedIcon from "../../assets/images/targetedIcon.png";
import employeesIcon from "../../assets/images/employeesIcon.png";
import studentIcon from "../../assets/images/studentIcon.png";
import universitiesIcon from "../../assets/images/universitiesIcon.png";
import assetIcon from "../../assets/images/assetIcon.png";

const usersData = [
  {
    id: 1,
    name: "Employees",
    icon: employeesIcon,
  },
  {
    id: 2,
    name: "Students",
    icon: studentIcon,
  },
  {
    id: 3,
    name: "Entities and Universities",
    icon: universitiesIcon,
  },
  {
    id: 4,
    name: "Interested In Asset Management",
    icon: assetIcon,
  },
];

function TargetedUsers() {
  return (
    <TargetedUsersWrapper>
      <Container>
        <TargetedUsersHeader>
          <img className="img-fluid icon" src={targetedIcon} />
          <span>Targeted Users</span>
        </TargetedUsersHeader>
        <Row>
          {usersData.map((item) => (
            <Col md={6} xl={3}>
              <TargetedUserContainer>
                <img className="img-fluid bottomIcon" src={item.icon} />
                <p className="userName">{item.name}</p>
              </TargetedUserContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </TargetedUsersWrapper>
  );
}

export default TargetedUsers;
