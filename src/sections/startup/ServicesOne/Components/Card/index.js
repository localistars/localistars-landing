import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, text,to,iconBackground,...rest}){
return(
<Card itemCenter={true} backgroundColor="#fff" iconBackground={iconBackground} {...rest}>
  <Card.Icon as="div">
    <i className={icon} />
  </Card.Icon>
  <Card.Title as="h4">{title}</Card.Title>
  <Card.Text >{text}</Card.Text>
</Card>
)
}