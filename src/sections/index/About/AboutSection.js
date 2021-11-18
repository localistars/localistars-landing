import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './components/SectionTitle';
import Widget from './components/widget';
import About from './style';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';

export default function AboutSection() {
  const { t } = useTranslation('translations');

  return (
    <About backgroundColor="#f2f5fb">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <SectionTitle
              subTitle={t('index.section.subTitle')}
              title={t('index.section.title')}
              titleProps={{ mb: '50px' }}
              subTitleProps={{ mb: '15px' }}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-2 order-lg-1">
            <Widget
              directionXS="row-reverse"
              title={t('index.findBest.title')}
              icon="fa fa-directions"
              text={
                <Trans i18nKey="index.findBest.text">
                  Client: Choose the best fitting translators.
                  <br />
                  Translator: Bid for suitable translation jobs of clients.
                  <br />
                  As client you accept bids based on price and experience of the
                  translator. As translator you cherry-pick the projects you
                  want to work on.
                </Trans>
              }
            />
            <Widget
              directionXS="row-reverse"
              title={t('index.directContact.title')}
              icon="fa fa-user-friends"
              text={t('index.directContact.text')}
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-lg-4 col-md-8 col-xs-9 order-1 order-lg-2 text-center"
          >
            <About.ImageContent>
              <img
                src={`${prefix}/image/index/about-mobile-img1.png`}
                alt="about mobile"
              />
              <About.Shape>
                <img
                  src={`${prefix}/image/index/green-shape.png`}
                  alt="green shape"
                />
              </About.Shape>
            </About.ImageContent>

            <About.ImageContent2>
              <img
                src={`${prefix}/image/index/about-mobile-img-350.png`}
                alt="about mobile"
              />
              <About.Shape>
                <img
                  src={`${prefix}/image/index/green-shape-300.png`}
                  alt="shape"
                />
              </About.Shape>
            </About.ImageContent2>
          </Col>
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-3">
            <Widget
              directionXS="row"
              title={t('index.contentCentric.title')}
              icon="fa fa-book-open"
              text={t('index.contentCentric.text')}
            />
            <Widget
              directionXS="row"
              title={t('index.riskFree.title')}
              icon="fa fa-credit-card"
              text={t('index.riskFree.text')}
            />
          </Col>
        </Row>
      </Container>
    </About>
  );
}
