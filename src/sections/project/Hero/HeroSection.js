import React from 'react'
import Image from "next/image";
import Hero from './style'
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from '~components'
import { SuperTag } from '~components';
import TitleShape from "~image/project-management/l2-hero-shape.png"
import HeroImage from "~image/project-management/l2-hero-image.png"
import HeroShapeOne from "~image/project-management/l2-hero-shape-2.png"
import HeroShapeTwo from "~image/project-management/l2-hero-shape-1.png"
export default function HeroSection(){
  return(
<Hero>
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-xl-8 col-lg-11">
        <Hero.ContentBlock mb="35px">
          <Hero.Title as="h1">The intelligent way to manage projects.</Hero.Title>
          <Hero.Text> <SuperTag value="Create custom landing pages with Fastland that<br className='d-none d-sm-block' /> converts more
            visitors than any website."/>
          </Hero.Text>
          <Hero.TitleShape>
            <Image src={TitleShape} placeholder="blur"  alt="projects"/>
          </Hero.TitleShape>
        </Hero.ContentBlock>
        {/* Newsletter */}
        <Hero.NewsletterBox>
          <Hero.Newsletter>
            <Form>
              <Hero.InputBox>
                <Form.Input placeholder="@ Enter your email" required />
                <Hero.Button  className=" btn btn-primary text-white">Start Now!</Hero.Button>
              </Hero.InputBox>
            </Form>
          </Hero.Newsletter>
        </Hero.NewsletterBox>
        {/*/ .Newsletter */}
      </Col>
      <Col xs="12" className="col-lg-5 col-md-7">
        <Hero.Image>
        <Image src={HeroImage} alt="content" placeholder="blur"/>
        </Hero.Image>
      </Col>
    </Row>
  </Container>
  <Hero.ImageShape01>
    <Image src={HeroShapeOne} alt="shape 1" placeholder="blur"/>
  </Hero.ImageShape01>
  <Hero.ImageShape02>
    <Image src={HeroShapeTwo} alt="shape 1" placeholder="blur"/>
  </Hero.ImageShape02>
</Hero>
)
}