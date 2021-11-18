import React from 'react';
import Cta from './style';
import { Col, Container, Row } from 'react-bootstrap';
import ctal5Img from '../../../../public/image/translator/signup.png';
import { useTranslation } from 'next-i18next';

export default function CtaSection({ ...rest }) {
  const { t } = useTranslation('translations');

  return (
    <Cta backgroundImage={ctal5Img.src}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-10">
            <Cta.InnerWrapper className="text-center">
              <Cta.Subtitle fontColor="#ffce3e" as="span">
                {t('consumer.help.subTitle')}
              </Cta.Subtitle>
              <Cta.Title as="h2" fontColor="#fff">
                {t('consumer.help.title')}
              </Cta.Title>
              <Cta.Text fontColor="#fff">
                {t('consumer.help.text')}
              </Cta.Text>
              <Cta.Button
                className="btn-torch-red"
                href="/contact"
                rounded={true}
                sizeX="180px"
                sizeY="56px"
              >
                {t('consumer.help.btn')}
              </Cta.Button>
            </Cta.InnerWrapper>
          </Col>
        </Row>
      </Container>
    </Cta>
  );
}
