import React, { useRef } from 'react'
import Slider from "react-slick"
import TestiomialCard from './Component/Card'
import Testimonial from './style'
import TestimonialData from '~data/startup/testimonial'
import { Container, Row, Col } from 'react-bootstrap'
export default function TestimonialSection(){
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding:false,
    autoPlay:true,
    slide:false,
    responsive: [
        {
            breakpoint: 20000,
            settings: 'unslick'
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
<Testimonial backgroundColor="#e6f8f9">
  <Container>
    <Row className="align-items-center justify-content-center ">
      <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7 text-center">
        <Testimonial.Box mbLG="50px">
          <Testimonial.Subtitle mb="20px" fontColor="#5034fc" as="h6">Testimonial</Testimonial.Subtitle>
          <Testimonial.Title fontColor="#262729" as="h2">What The People Thinks About Us</Testimonial.Title>
        </Testimonial.Box>
      </Col>
    </Row>
    <Testimonial.SliderWrapper>
        <Slider 
        ref={elSlider}
        className="testimonial-slider row"
        {...sliderConfig1}
        >
        {TestimonialData.testimonial.map(({icon, image, userName,userPosition,text,id })=>{
        return(
             <Col xs="12" className="col-lg-4 col-md-12" key={id}>
              <TestiomialCard
                icon={icon}
                image={image}
                userName={userName}
                userPosition={userPosition}
                text={text}
                />
            </Col>
          )
        })}</Slider>
        </Testimonial.SliderWrapper>
  </Container>
</Testimonial>

)
}