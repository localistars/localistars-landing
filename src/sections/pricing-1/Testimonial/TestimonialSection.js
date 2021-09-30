import React, { useRef } from "react"
import Slider from "react-slick"
import TestiomialCard from './Component/Card'
import Testimonial from './style'
import TestimonialData from '~data/services/testimonial'
import { Container, Row, Col } from 'react-bootstrap'
export default function TestimonialSection(){
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    centerPadding:false,
    autoPlay:true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  }
return(
<Testimonial backgroundColor="#f3f4f6">
  <Container>
    <Row>
      <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7">
        <Testimonial.Box mbLG="55px" mbSM="30px">
          <Testimonial.Subtitle fontColor="#ff1e38" as="h6">Testimonial</Testimonial.Subtitle>
          <Testimonial.Title mb="20px" as="h2">Don’t Just Take Our Words For It</Testimonial.Title>
        </Testimonial.Box>
      </Col>
    </Row>
    <Slider
          ref={elSlider}
          className="testimonial-slider row justify-content-center"
          {...sliderConfig1}
        >

        {TestimonialData.testimonial.map(({icon, image, userName,userPosition,text })=>{

          return(

            <TestiomialCard
              icon={icon}
              image={image}
              userName={userName}
              userPosition={userPosition}
              text={text}
            />
          )
        })}

    </Slider>
  </Container>
</Testimonial>
)
}