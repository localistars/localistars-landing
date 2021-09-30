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
    <Card>
      <Card.Body backgroundColor="#fff">
        <Card.Text>{text}</Card.Text>
        <Card.UserBlock>
          <Card.Image>
            <img src={image.src} alt="Testimonial" />
          </Card.Image>
          <Card.UserTexts>
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.UserPosition>{userPosition}</Card.UserPosition>
          </Card.UserTexts>
        </Card.UserBlock>
      </Card.Body>
      <Card.Icon>
        <i className={icon} />
      </Card.Icon>
    </Card>
  );
}
