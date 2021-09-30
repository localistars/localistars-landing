import React from "react"
import Card from "./style"
export default function ImageCard({...rest}) {
  return (
    <Card {...rest}>
      <Card.CounterBlock>
        <Card.Counter>68%</Card.Counter>
        <Card.CounterBlockIcon>
          <i className="fa fa-arrow-up" />
        </Card.CounterBlockIcon>
      </Card.CounterBlock>
        <Card.Text>
          Extra growth for your company.
        </Card.Text>
    </Card>
  )
}
