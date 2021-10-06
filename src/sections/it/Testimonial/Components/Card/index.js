import React from 'react'
import Card from "./style"
export default function TestimonialCard({title,text,image,icon,iconBackground,UserPosition, ...rest}){
return(
  <Card backgroundColor="#fff">
  <Card.Image>
    <img src={image} alt="testimonial" />
  </Card.Image>
  <Card.Body>
    <Card.Text>{text}</Card.Text>
    <Card.UserBlock>
      <Card.UserInfo pr="15px">
        <Card.Title>{title}</Card.Title>
        <Card.UserPosition>{UserPosition}</Card.UserPosition>
      </Card.UserInfo>
      <Card.Rating pb="15px">
        <Card.RatingSingle active={true}>
          <i className="fa fa-star" />
        </Card.RatingSingle>
        <Card.RatingSingle>
          <i className="fa fa-star" />
        </Card.RatingSingle>
        <Card.RatingSingle>
          <i className="fa fa-star" />
        </Card.RatingSingle>
        <Card.RatingSingle>
          <i className="fa fa-star" />
        </Card.RatingSingle>
        <Card.RatingSingle>
          <i className="fa fa-star" />
        </Card.RatingSingle>
      </Card.Rating>
    </Card.UserBlock>
  </Card.Body>
</Card>

)
}
