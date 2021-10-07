import React from 'react'
import { SuperTag } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, text,to,...rest}){
return(
<Card itemCenter={true} {...rest}>
  <Card.Icon >
    <i className={icon} />
  </Card.Icon>
  <Card.Title as="h3">{title}</Card.Title>
  <Card.Text><SuperTag value={text}/> </Card.Text>
</Card>
)
}


