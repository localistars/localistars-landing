import React from 'react'
import { Link } from '~components'
 import Card from "./style"
export default function PortfolioCard({to,image,title,text,...rest}){
return(
<Card as={Link} to={ to ? to : "/" } {...rest}>
      <img className="w-100" src={image} alt="portfolio" />
      <Card.InnerBlock backgroundColor="#fd346e">
        <Card.InnerIcon fontColor="#fff">
            <i className="fas fa-external-link-square-alt" />
        </Card.InnerIcon>
        <Card.Content>
          <Card.Title as="h3" fontColor="#fff">{title}</Card.Title>
          <Card.Text mt="15px" fontColor="#fff">{text}</Card.Text>
        </Card.Content>
      </Card.InnerBlock>
  </Card>
)
}