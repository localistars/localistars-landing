import React from 'react';
import { Link } from '~components';
import Card from './style';
export default function TestimonialCard({
  userImage,
  userName,
  Box,
  text,
  userPosition,
  Icon,
  ...rest
}) {
  return (
    <Card>
      <Card.Body>
        <Card.UserInfo>
          <Card.Image>
            <img src={userImage} alt />
          </Card.Image>
          <Card.UserBody>
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.Position as="p">{userPosition}</Card.Position>
          </Card.UserBody>
        </Card.UserInfo>
        <Card.Icon>
          <i class="fa fa-quote-left"></i>
        </Card.Icon>
      </Card.Body>
      <Card.Text as="p">{text}</Card.Text>
    </Card>
  );
}
