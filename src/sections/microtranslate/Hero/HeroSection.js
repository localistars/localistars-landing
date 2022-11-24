import React from 'react';
import Hero from './style';
import { Col, Container, Row } from 'react-bootstrap';
import { SuperTag } from '~components';
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
              <Hero.Title as="h1">
                <Trans i18nKey="microtranslate.hero.title">
                  What is micro translate <br /> and how does it work?
                </Trans>
              </Hero.Title>
              <Hero.Text>
                <SuperTag value={t('microtranslate.hero.description')} />
              </Hero.Text>
              <Hero.TitleShape>
                <img
                  src={`${prefix}/image/microtranslate/l2-hero-shape.png`}
                  alt="projects"
                  className="w-100"
                />
              </Hero.TitleShape>
            </Hero.ContentBlock>
          </Col>
          <Col xs="12" className="col-lg-5 col-md-7">
            <Hero.Image>
              <img
                src={`${prefix}/image/microtranslate/l2-content-img-2.png`}
                alt="content"
                className="w-100"
              />
            </Hero.Image>
          </Col>
        </Row>
      </Container>
      <Hero.ImageShape01>
        <img
          src={`${prefix}/image/microtranslate/l2-hero-shape-1.png`}
          alt="shape 1"
          className="w-100"
        />
      </Hero.ImageShape01>
      <Hero.ImageShape02>
        <img
          src={`${prefix}/image/microtranslate/l2-hero-shape-2.png`}
          alt="shape 1"
          className="w-100"
        />
      </Hero.ImageShape02>
    </Hero>
  );
}
