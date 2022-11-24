import React from 'react';
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Hero from './style';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';
import { Link } from '~components';

export default function HeroSection() {
  const { t } = useTranslation('translations');

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
                <Trans i18nKey="creator.hero.title">
                  Why should you become
                  <br className="d-none d-sm-block" />a localistars translator?
                </Trans>
              </Hero.Title>
              <Hero.Text fontColor="#fff">
                {t('creator.hero.text')}
              </Hero.Text>

              <Hero.Subtitle style={{ paddingTop: 100 }} fontColor="#fff">
                <Trans i18nKey="creator.hero.microtranslate">
                  Check out also <Link to="/microtranslate">Micro translate</Link>!
                  <br className="d-none d-sm-block" />
                  The fastest way to offer translations.
                </Trans>
              </Hero.Subtitle>
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
        </Row>
      </Container>
    </Hero>
  );
}
