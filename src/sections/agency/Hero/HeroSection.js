import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from '~components/VideoModal'
import herol5Img from "../../../../public/image/home-agency/hero-l5-bg.jpg";
import herol5ImgOverlay from "../../../../public/image/home-agency/hero-bg-overlay.png";
import Hero from "./style"
export default function HeroSection(){
return(
<Hero backgroundImage={herol5Img.src} backgroundOverlay={herol5ImgOverlay.src}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-xs-11 order-2 order-lg-1">
        <Hero.Content mb="40px" mbMD="40px" mt="30px" mtLG="0">
        <Hero.Subtitle as="h3" fontColor="#fee856" mb="28px">Try our 14 days free trial</Hero.Subtitle>
        <Hero.Title as="h1" fontColor="#fff">The right consultation partner for your business</Hero.Title>
          <Hero.Text>When, while lovely valley teems with vapour around
            meand <br className="d-none d-sm-block" />
            meridian sun strikes the upper impenetroble.</Hero.Text>
          <Hero.Video mt="40px">
            <Video id="LWZ7iytIA6k" className="video-block">
              <i className="fa fa-play" />
              <span className="btn-text">Watch 1 min video testimony from<br className="d-none d-xs-block" /> our satisfied customers</span>
            </Video>
          </Hero.Video>
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>
)
}