import React from 'react';
import { Link } from '~components';
import Card from './style';

export default function PricingCard({ title, pricetag, ...rest }) {
  return (
    <Card backgroundColor="#fff" {...rest}>
      <Card.Top>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>Monthly package</Card.Text>
        <Card.Price>
          <Card.PriceText alignSelf="flex-start">$</Card.PriceText>
          <Card.Amount>{pricetag}</Card.Amount>
          <Card.PriceText>/ Month</Card.PriceText>
        </Card.Price>
      </Card.Top>
      <Card.List>
        <Card.ListItem>Unlimited updates &amp; projects</Card.ListItem>
        <Card.ListItem>Custom permissions</Card.ListItem>
        <Card.ListItem>Custom instructors</Card.ListItem>
        <Card.ListItem>Custom designs &amp; features</Card.ListItem>
      </Card.List>
      <Card.Box>
        <Card.Button
          as="a"
          href="/#"
          className="btn-torch-red text-white"
          rounded={true}
          sizeX="180px"
          sizeY="56px"
        >
          Get Started
        </Card.Button>
      </Card.Box>
    </Card>
  );
}
