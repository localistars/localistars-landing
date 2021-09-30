import React, { useRef } from 'react'
import Slider from "react-slick"
import { Col, Container, Row } from 'react-bootstrap'
import TestimonialCard from './Components/Card'
 import Testimonial from "./style"
import testiMonialUserImg2 from "~image/it-services/user-circle-2.png";
import testiMonialUserImg3 from "~image/it-services/user-circle-3.png";
import testiMonialUserImg1 from "~image/it-services/user-circle-4.png";
export default function TestimonialSection(){
const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 2,
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
            settings: 'unslick'
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
    <Container className="container">
    <Row className="justify-content-center">
        <Col xs="12" className="col-12 col-lg-8 col-xl-9 col-xxl-7 text-center">
            <Testimonial.Box mb="30px" mbSM="40px" mbLG="100px">
                <Testimonial.Subtitle as="h6" fontColor="#ff5722" mb="30px">Testimonial</Testimonial.Subtitle>
                <Testimonial.Title as="h2">We Care About Our Customers Experience Too</Testimonial.Title>
            </Testimonial.Box>
            
        </Col>
        
    </Row>
    <Testimonial.SliderWrapper>
        <Slider 
        ref={elSlider}
        className="testimonial-slider row"
        {...sliderConfig1}
        >
            <Col className="col-lg-4 col-md-12">
                <TestimonialCard text="But the majorityThere are many variations passages of Lorem lpsum available,  have suffered alteration in some form, by injected or randomised." title="Snow Doe" image={testiMonialUserImg1}/>
            </Col>
            <Col className="col-lg-4 col-md-12">
                <TestimonialCard text="Injected or randomised. There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by " title="John Doe" image={testiMonialUserImg2}/>
            </Col>
            <Col className="col-lg-4 col-md-12">
                <TestimonialCard text="There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected or randomised." title="Jack Jill" image={testiMonialUserImg3}/>
            </Col>
        </Slider>
    </Testimonial.SliderWrapper>
    
    </Container>
</Testimonial>
)
}