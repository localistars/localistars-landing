import React from 'react'
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import CounterBlock from './Components/CounterBlock'
import About from './style'
import prefix from '~lib/prefix';

export default function AboutSection({...rest}){
  return(
  <About  {...rest}>
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col xs="12" className="col-xl-5 col-lg-5 col-md-7 col-xs-8">
          <About.Image mb="30px" mbLG="0">
            <img src={`${prefix}/image/home-services/about-us-image-l4-1.png`} alt="about" className="w-100"/>
            <About.ImageInner>
              <img src={`${prefix}/image/home-services/about-us-image-l4-2.png`} alt="about" className="w-100"/>
            </About.ImageInner>
          </About.Image>
        </Col>
        <Col xs="12" className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-md-9 col-sm-11">
          <About.Box>
            <About.ContentTextBlock className="text-center text-lg-start">
              <About.Subtitle as="h6" fontColor="#6001d3">About us</About.Subtitle>
              <About.Title as="h2" mb="30px">We Are The Leader <br className="d-none d-xs-block"/>in Web Design</About.Title>
              <About.Text>A powerful web design is the one where the user is encouraged<br className="d-none d-sm-block d-lg-none d-xxl-block"/> to stay on the site and not bounce to some other  simple tips
              <br className="d-none d-sm-block d-lg-none d-xxl-block"/> that will improve the bounce rate tremendously.
              </About.Text>
              <About.Text>A powerful web design is the one where the user is encouraged<br className="d-none d-sm-block d-lg-none d-xxl-block"/> to stay on the site and not bounce to some other  simple tips
              <br className="d-none d-sm-block d-lg-none d-xxl-block"/> that will improve the bounce rate tremendously.
              </About.Text>
            </About.ContentTextBlock>
            <CounterBlock mt="50px"/>
          </About.Box>
        </Col>
      </Row>
    </Container>
  </About>
  )
}