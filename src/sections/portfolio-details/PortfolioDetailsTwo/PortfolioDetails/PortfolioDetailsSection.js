import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import PortfolioDetails from './style';
import pimageOne from '../../../../../public/image/portfolio/portfolio-details-left-1.jpg';
import pimageTwo from '../../../../../public/image/portfolio/portfolio-details-left-2.jpg';
import pimageThree from '../../../../../public/image/portfolio/portfolio-details-left-3.jpg';
export default function PortfolioDetailsSection() {
  const elSlider = useRef();

  const sliderConfig1 = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    dots: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <PortfolioDetails backgroundColor="#f3f4f6">
      <Container>
        <PortfolioDetails.Box>
          <Row className="align-items-center">
            <Col xs="12" className="col-xl-6 col-lg-6">
              <PortfolioDetails.Content>
                <PortfolioDetails.Title as="h2">
                  PROJECT <br /> INFORMATION
                </PortfolioDetails.Title>
                <PortfolioDetails.Text>
                  Council are celebrating the incredible achievement of the
                  Companies and <br /> Stakeholders. Due to BIM's fast invasion
                  in all over the world specially in
                  <br /> the North America Region, we are one of the top 10
                  nominated Consultants <br /> for Council Architectural/Design
                  Practice of the Year Award.
                </PortfolioDetails.Text>
              </PortfolioDetails.Content>
            </Col>
            <Col xs="12" className="col-xl-4 offset-xl-2">
              <PortfolioDetails.Content>
                <PortfolioDetails.List as="ul">
                  <li>
                    <span>Project Name:</span>Systemio
                  </li>
                  <li>
                    <span>Client:</span>Minimalist International
                  </li>
                  <li>
                    <span>Finshing Date:</span>01 january, 2021
                  </li>
                  <li>
                    <span>Duration:</span>2 weeks
                  </li>
                  <li>
                    <span>Category:</span>Marketing, SEO
                  </li>
                </PortfolioDetails.List>
              </PortfolioDetails.Content>
            </Col>
          </Row>
        </PortfolioDetails.Box>
        <PortfolioDetails.SliderWrapper mt="50px" mtLG="80px">
          <Slider
            ref={elSlider}
            className="testimonial-slider"
            {...sliderConfig1}
          >
            <PortfolioDetails.Slide>
              <img src={pimageOne.src} loading="lazy" />
            </PortfolioDetails.Slide>
            <PortfolioDetails.Slide>
              <img src={pimageTwo.src} loading="lazy" />
            </PortfolioDetails.Slide>
            <PortfolioDetails.Slide>
              <img src={pimageThree.src} loading="lazy" />
            </PortfolioDetails.Slide>
            <PortfolioDetails.Slide>
              <img src={pimageThree.src} loading="lazy" />
            </PortfolioDetails.Slide>
            <PortfolioDetails.Slide>
              <img src={pimageThree.src} loading="lazy" />
            </PortfolioDetails.Slide>
          </Slider>
        </PortfolioDetails.SliderWrapper>
      </Container>
    </PortfolioDetails>
  );
}
