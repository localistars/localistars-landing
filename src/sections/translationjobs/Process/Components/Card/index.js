import React from 'react'

import Card from "./style"
export default function ProcessCard({title,text,image,icon,iconBackground, ...rest}){
return(
    <Card {...rest}>
     <Card.Icon as="div">
        <span>{icon}</span>  
      </Card.Icon>
    <Card.Title as="h3">{title}</Card.Title>
    <Card.Text as="p">{text}</Card.Text>
  </Card>
)
}
