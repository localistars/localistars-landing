import React, { useRef } from "react"
import Slider from "react-slick"
import TestimonialWidget from "./Components/Widget"
import Testimonial from './style'
import data from "~data/marketing/TestimonialSliderData"
import { Container } from "react-bootstrap"

const TestimonialSection = ({ ...rest }) => {
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 200000,
        settings: "unslick"
      },
      {
        breakpoint: 1200,
        settings: "unslick"
      },
      {
        breakpoint: 992,
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
  return (
    <Testimonial {...rest}>
      <Container>
        <Testimonial.SliderWrapper>
          <Slider
            ref={elSlider}
            className="testimonial-slider testimonial-slider--l1"
            {...sliderConfig1}
            className="row"
          >
            {data.map((item, index) => {
              return (
                <Testimonial.Box className="col-lg-4 slide-item-inner"
                key={"marketingts" + index}>
                <TestimonialWidget
                  text={item.text}
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  reviewStar={item.reviewStar}
                />
                </Testimonial.Box>
              )
            })}
          </Slider>
        </Testimonial.SliderWrapper>
      </Container>
    </Testimonial>
  )
}

export default TestimonialSection
