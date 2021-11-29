import React from 'react';
import { Link } from '~components';

import Card from './style';
export default function ProcessCard({
  title,
  text,
  image,
  icon,
  iconBackground,
  link,
  ...rest
}) {
  return (
    <Card {...rest}>
      <Card.Icon as="div">
        <span>{icon}</span>
      </Card.Icon>
      <Card.Title as="h3">{title}</Card.Title>
      {!link && <Card.Text as="p">{text}</Card.Text>}
      {link && <Card.Text as="p"><Link to={link}>{text}</Link></Card.Text>}
    </Card>
  );
}
