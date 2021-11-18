import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Hero from './style';
import { useTranslation } from 'next-i18next';
import prefix from '~lib/prefix';

export default function HeroSection() {
  const { t } = useTranslation('translations');

  return (
    <Hero backgroundColor="rgba(22, 92, 102, 0.8)">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Welcome content Area */}
          <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              <Hero.SubTitle fontColor="#b9b7b9" as="h3">
                {t('indexHeroTitle')}
              </Hero.SubTitle>
              <Hero.Title fontColor="#d8d7d8" as="h1">
                We connect clients{' '}
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                with translators
              </Hero.Title>
              <Hero.Text fontColor="#b9b7b9">
                localistars is the go-to marketplace for clients and translators
                to get translation jobs done.{' '}
                <br className="d-none d-md-block" />
                As client you'll find translators and as translator you'll find
                translation jobs. Direct contact, no middleman – just
                localistars working together!
              </Hero.Text>
              <Hero.ButtonGroup>
                <Hero.Button className="btn-red 🌱" as={Link} to="/translator">
                  Find a translator
                </Hero.Button>
                <Hero.Button
                  className="btn-green"
                  as={Link}
                  to="/translationjob"
                >
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
                <img
                  src={`${prefix}/image/index/translation-company.png`}
                  alt="content"
                />
              </Hero.ImageOne>

              <Hero.ImageTwo>
                <img
                  src={`${prefix}/image/index/translation-company-300.png`}
                  alt="content"
                />
              </Hero.ImageTwo>
            </Hero.ImageGroup>
          </Col>
          {/*/ .Welcome img Area */}
        </Row>
      </Container>
    </Hero>
  );
}
