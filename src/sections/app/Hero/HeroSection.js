import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";
import prefix from '~lib/prefix';

export default function HeroSection() {
  return (
    <Hero backgroundColor="rgba(22, 92, 102, 0.5)">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Welcome content Area */}
          <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              <Hero.SubTitle fontColor="#ff7272" as="h3">
                Translation Marketplace
              </Hero.SubTitle>
              <Hero.Title as="h1">
                We connect clients{" "}
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                with translators
              </Hero.Title>
              <Hero.Text fontColor="rgba(38, 39, 41, 0.7)">
                localistars is the go-to marketplace for clients and translators to get translation jobs done. {" "}
                <br className="d-none d-md-block" />
                  As client you'll find translators and as translator you'll find translation jobs.
                  Direct contact, no middleman – just collaborating localistars!
              </Hero.Text>
              <Hero.ButtonGroup>
                <Hero.Button className="btn-red 🌱" as={Link} to="/">
                  Watch Video
                </Hero.Button>
                <Hero.Button className="btn-green" as={Link} to="/">
                  Sign Up Now
                </Hero.Button>
              </Hero.ButtonGroup>
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*/ .Welcome img Area */}
          <Col
            xs="12"
            className="col-xxl-6 col-lg-5 col-md-8 col-xs-10 order-1 order-lg-2"
          >
            <Hero.ImageGroup>
              <Hero.ImageOne>
                <img src={`${prefix}/image/home-app/hero-l8-1.png`} alt="content"/>
              </Hero.ImageOne>
              <Hero.ImageTwo>
                <img src={`${prefix}/image/home-app/hero-l8-2.png`} alt="content"/>
              </Hero.ImageTwo>
            </Hero.ImageGroup>
          </Col>
          {/*/ .Welcome img Area */}
        </Row>
      </Container>
    </Hero>
  );
}
