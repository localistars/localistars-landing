import React from 'react';
import Image from 'next/image';
import Hero from './style';
import { Col, Container, Row } from 'react-bootstrap';
import prefix from '~lib/prefix';
import { Form, Link } from '~components';
import { SuperTag } from '~components';

export default function HeroSection() {
  return (
    <Hero>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-8 col-lg-11">
            <Hero.ContentBlock mb="35px">
              <Hero.Title as="h1">Translation projects</Hero.Title>
              <Hero.Title as="h2">How localistars works</Hero.Title>
              <Hero.Text>
                {' '}
                <SuperTag value="Clients and translators welcome – <br className='d-none d-sm-block' />  together you get translation projects done." />
              </Hero.Text>
              <Hero.TitleShape>
                <img
                  src={`${prefix}/image/howitworks/shape-hero.png`}
                  alt="projects"
                  className="w-100"
                />
              </Hero.TitleShape>
            </Hero.ContentBlock>
          </Col>
          <Col xs="12" className="col-lg-5 col-md-7">
            <Hero.Text></Hero.Text>
          </Col>
        </Row>
      </Container>
      <Hero.ImageShape01>
        <img
          src={`${prefix}/image/howitworks/shape3-hero.png`}
          alt="shape 1"
          className="w-100"
        />
      </Hero.ImageShape01>
      <Hero.ImageShape02>
        <img
          src={`${prefix}/image/howitworks/shape2-hero.png`}
          alt="shape 1"
          className="w-100"
        />
      </Hero.ImageShape02>
    </Hero>
  );
}
