import React from 'react'
import { Col, Row , Container } from 'react-bootstrap'
import { TestimonialPosts } from '~data'
import TestimonialCard from "./Component/Card"
import Testimonial from './style'
export default function TestimonialTwo(){
return(
<Testimonial backgroundColor="#f3f4f6">
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
        {/* Section Title */}
          <Testimonial.Subtitle as="h4">Testimonial</Testimonial.Subtitle>
          <Testimonial.Title as="h2">We Care About Our Customers Experience Too</Testimonial.Title>
        {/*/ .Section Title */}
      </Col>
    </Row>
    <Row className="justify-content-center">
        {TestimonialPosts.map(({ userImage, userName, userPosition, text, id }) => {
              return (
                <Col
                  xs="12"
                  className="col-lg-4 col-md-12"
                  key={id}
                >
                <TestimonialCard
                  userImage={userImage}
                  text={text}
                  userName={userName}
                  userPosition={userPosition}
                  />
              </Col>
              )
            })}
      <Col xs="12" className="">
      </Col>
    </Row>
    <Testimonial.ButtonGroups>
      <Testimonial.Button className="btn btn-primary btn--lg-2 text-white rounded-50 m-2" to="#">Submit your testimony</Testimonial.Button>
    </Testimonial.ButtonGroups>
  </Container>
</Testimonial>

)
}