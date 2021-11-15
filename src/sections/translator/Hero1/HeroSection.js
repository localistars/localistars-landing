import React from 'react'
import Image from "next/image";
import Hero from './style'
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from '~components'
import { SuperTag } from '~components';
// import TitleShape from "~image/project-management/l2-hero-shape.png"
// import HeroImage from "~image/project-management/l2-hero-image.png"
import HeroShapeOne from "../../../../public/image/project-management/l2-hero-shape-2.png"
import HeroShapeTwo from "../../../../public/image/project-management/l2-hero-shape-1.png"
export default function HeroSection(){
  return(
<Hero>
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-xl-8 col-lg-11">
        <Hero.ContentBlock mb="35px">
           <Hero.Title as="h1">Why should you choose <br /> a localistar translator?</Hero.Title>
          <Hero.Text> <SuperTag value="We provide a platform that removes the tedious parts of translations."/>
          </Hero.Text>
          <Hero.TitleShape>
            <img src="/image/translator/l2-hero-shape.png" alt="projects" className="w-100"/>
          </Hero.TitleShape>
        </Hero.ContentBlock>
       
      </Col>
      <Col xs="12" className="col-lg-5 col-md-7">
        <Hero.Image>
        <img src="/image/translator/l2-content-img-2.png" alt="content" className="w-100"/>
        </Hero.Image>
      </Col>
    </Row>
  </Container>
  <Hero.ImageShape01>
    <img src="/image/translator/l2-hero-shape-2.png" alt="shape 1" className="w-100"/>
  </Hero.ImageShape01>
  <Hero.ImageShape02>
    <img src="/image/translator/l2-hero-shape-1.png" alt="shape 1" className="w-100"/>
  </Hero.ImageShape02>
</Hero>
)
}
