import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, text,to,iconBackground,...rest}){
return(
<Card itemCenter={true} backgroundColor="#fff" {...rest}>
  <Card.Icon as="div" background={iconBackground} >
    <i className={icon} />
  </Card.Icon>
  <Card.Title as="h4">{title}</Card.Title>
  <Card.Text >{text}</Card.Text>
  <Card.Button as={Link} to={to?to:"/"}>Learn More <i className="fa fa-angle-right" /></Card.Button>
</Card>
)
}
