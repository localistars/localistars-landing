import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Hero from './style';
import { useTranslation, Trans } from 'next-i18next';
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
                {t('hero.subTitle')}
              </Hero.SubTitle>
              <Hero.Title fontColor="#d8d7d8" as="h1">
                <Trans i18nKey="hero.title">
                  We connect clients 
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  with translators
                </Trans>
              </Hero.Title>
              <Hero.Text fontColor="#b9b7b9">
                <Trans i18nKey="hero.text">
                  localistars is the go-to marketplace for clients and translators
                  to get translation jobs done.
                  <br className="d-none d-md-block" />
                  As client you'll find translators and as translator you'll find
                  translation jobs. Direct contact, no middleman – just
                  localistars working together!
                </Trans>
              </Hero.Text>
              <Hero.ButtonGroup>
                <Hero.Button className="btn-red 🌱" as={Link} to="/translator">
                  {t('hero.findTranslator')}
                </Hero.Button>
                <Hero.Button
                  className="btn-green"
                  as={Link}
                  to="/translationjob"
                >
                  {t('hero.findTranslationJob')}
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
