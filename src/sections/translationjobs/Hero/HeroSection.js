import React from 'react';
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from '~components';
import Hero from './style';
import prefix from '~lib/prefix';

export default function HeroSection() {
  return (
    <Hero
      overlay={`${prefix}/image/translationjobs/hero-overlay.png`}
      style={{
        backgroundImage: `url("${prefix}/image/translationjobs/freelancer.webp")`
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
            <Hero.Content>
              <Hero.Title as="h2" fontColor="#fff">
                Why should you become
                <br className="d-none d-sm-block" />a localistars translator?
              </Hero.Title>
              <Hero.Text fontColor="#fff">
                Our goal is to provide a platform that removes the tedious parts
                of translations. Are you a freelance translator or a translation
                agency, then localistars is for you!
              </Hero.Text>
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
        </Row>
      </Container>
    </Hero>
  );
}
