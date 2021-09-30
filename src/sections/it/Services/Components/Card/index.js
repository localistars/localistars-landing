import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, text,to,iconBackground,...rest}){
return(
  <Card as={Link} to={to}>
  <Card.Icon iconBackground={iconBackground}>
    <i className={icon} />
  </Card.Icon>
  <Card.Title as="h3">{title}</Card.Title>
  <Card.Text as="p">{text}</Card.Text>
</Card>
)
}