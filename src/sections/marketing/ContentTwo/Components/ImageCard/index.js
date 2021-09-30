import React from "react"
import Card from "./style"
export default function ImageCard({...rest}) {
  return (
    <Card {...rest}>
        <Card.SingleBlock border="3px">
          <Card.Title as="h3" >$271,824</Card.Title>
          <Card.Text fontColor="#25373f">Annual revenue</Card.Text>
        </Card.SingleBlock>
        <Card.SingleBlock>
          <Card.Title as="h3">$4,249</Card.Title>
          <Card.Text fontColor="#25373f">Savings using other services</Card.Text>
        </Card.SingleBlock>
        <Card.CardBlock bacgroundColor="#22cc74">
          <Card.Title as="h3" fontColor="#fff">$21,947</Card.Title>
          <Card.Text fontColor="#fff" >Savings using Fastland</Card.Text>
        </Card.CardBlock>
    </Card>
  )
}
