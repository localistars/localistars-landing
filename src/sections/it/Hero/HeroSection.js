import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import Video from '~components/VideoModal'
import { Link } from '~components'
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style"
export default function HeroSection(){
return(
<Hero>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col xs="12" className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11">
        <div className="welcome-content welcome-content--l3">
          <Hero.Subtitle>Get Started</Hero.Subtitle>
          <Hero.Title>Make More Time <br className="d-none d-xs-block" /> For The Work That <br className="d-none d-xs-block" /> Matters Most</Hero.Title>
          <Hero.Text>When, while lovely valley teems with vapour around
            meand <br className="d-none d-sm-block" />
            meridian sun strikes the upper impenetroble.</Hero.Text>
          <Hero.BtnGroup>
            <Hero.Button className="btn-primary btn-1 text-white" as={Video} id="LWZ7iytIA6k">Watch
              Video</Hero.Button>
            <Hero.Button className="btn-electric-violet-2 btn-2" as={Link} to="/">Get Started</Hero.Button>
          </Hero.BtnGroup>
        </div>
      </Col>
      <Col xs="12" className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block">
          <ImageGroup/>
      </Col>
    </Row>
  </Container>
</Hero>

)
}