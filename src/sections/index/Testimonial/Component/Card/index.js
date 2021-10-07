import React from "react";
import Card from "./style";
export default function TestiomialCard({
  userName,
  userPosition,
  text,
  icon,
  image,
  ...rest
}) {
  return (
    <Card
      hoverbackground="#5034fc"
      elemColor="#262729"
      backgroundColor="#fff"
      {...rest}
    >
      <Card.Top mb="20px">
        <Card.UserBlock>
          <Card.Image mr="10px">
            <img src={image} alt="Testimonial" />
          </Card.Image>
          <Card.Box>
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.UserPosition>{userPosition}</Card.UserPosition>
          </Card.Box>
        </Card.UserBlock>
        <Card.Icon>
          <i className={icon} />
        </Card.Icon>
      </Card.Top>
      <Card.Text>{text}</Card.Text>
    </Card>
  );
}
