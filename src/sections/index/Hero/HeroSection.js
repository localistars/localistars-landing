import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";
import { useTranslation } from 'next-i18next'

export default function HeroSection() {
  const { t } = useTranslation('translations')

  return (
    <Hero backgroundColor="rgba(22, 92, 102, 0.8)">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Welcome content Area */}
          <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              <Hero.SubTitle fontColor="rgba(38, 39, 41, 0.7)" as="h3">
                {t('indexHeroTitle')}
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
                  Direct contact, no middleman – just localistars working together!
              </Hero.Text>
              <Hero.ButtonGroup>
                <Hero.Button className="btn-red 🌱" as={Link} to="/translator">
                  Find a translator
                </Hero.Button>
                <Hero.Button className="btn-green" as={Link} to="/translationjob">
                  Find a translation job
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
                <img src="/image/home-app/hero-l8-1.png" alt="content"/>
              </Hero.ImageOne>
              
            </Hero.ImageGroup>
          </Col>
          {/*/ .Welcome img Area */}
        </Row>
      </Container>
    </Hero>
  );
}
