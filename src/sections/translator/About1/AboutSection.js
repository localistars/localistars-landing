import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import About from './style';
import SectionTitle from './Components/SectionTitle';
import { useTranslation } from 'next-i18next';

export default function AboutSection() {
  const { t } = useTranslation('translations');

  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <img
                className="w-100"
                src="/image/translator/versatile_API.webp"
                alt="about"
              />
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle={t('client.about.subTitle')}
                title={t('client.about.title')}
                text={t('client.about.text')}
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <About.ButtonGroup mt="25px"></About.ButtonGroup>
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  );
}
