import React from "react";
import { Link } from "~components";
import Card from "./style";
export default function TestimonialCard({
  userImage,
  userName,
  text,
  userPosition,
  ...rest
}) {
  return (
    <Card>
      <Card.Image>
        <img src={userImage.src} alt="testomonial" />
      </Card.Image>
      <Card.Text as="p">{text}</Card.Text>
      <Card.Body>
        <Card.UserBody>
          <Card.Title as="h3">{userName}</Card.Title>
          <Card.Position as="p">{userPosition}</Card.Position>
        </Card.UserBody>
        <Card.Review>
          <li className="review-star__single">
            <i className="fa fa-star" />
          </li>
          <li className="review-star__single">
            <i className="fa fa-star" />
          </li>
          <li className="review-star__single">
            <i className="fa fa-star" />
          </li>
          <li className="review-star__single">
            <i className="fa fa-star" />
          </li>
          <li className="review-star__single">
            <i className="fa fa-star" />
          </li>
        </Card.Review>
      </Card.Body>
    </Card>
  );
}
