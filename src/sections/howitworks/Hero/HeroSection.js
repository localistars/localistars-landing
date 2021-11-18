import React from 'react';
import Hero from './style';
import { Col, Container, Row } from 'react-bootstrap';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';

export default function HeroSection() {
  const { t } = useTranslation('translations');

  return (
    <Hero>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-8 col-lg-11">
            <Hero.ContentBlock mb="35px">
              <Hero.Title as="h1">{t('how.hero.title')}</Hero.Title>
              <Hero.Title as="h2">{t('how.hero.title2')}</Hero.Title>
              <Hero.Text>
                <Trans i18nKey="how.hero.text">"Clients and translators welcome – <br className='d-none d-sm-block' />  together you get translation projects done."</Trans>
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
