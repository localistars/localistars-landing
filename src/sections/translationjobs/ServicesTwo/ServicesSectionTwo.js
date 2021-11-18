import React from 'react';
import SectionTitle from './Components/SectionTitle';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './style';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

export default function ServicesSectionTwo() {
  const { t } = useTranslation('translations');

  return (
    <Service backgroundColor="rgba(230, 248, 249, 0.4)">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <Service.Box>
              {/* Section Title */}
              <SectionTitle
                subTitle={t('creator.service.subTitle')}
                title={t('creator.service.title')}
                text={t('creator.service.text')}
                titleProps={{ mb: '20px' }}
                subTitleProps={{
                  mb: '10px',
                  className: 'subline',
                  fontColor: '#5034fc'
                }}
              />
              {/*/ .Section Title */}
              <Service.List mt="20px">
                {t('creator.service.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
              </Service.List>
            </Service.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-6 col-xs-10 order-1 order-lg-2"
          >
            <Service.Box>
              <Row>
                <Col xs="12" className="col-lg-6 pt-lg-7 mb-5 mb-lg-0">
                  <Service.Image>
                    <img
                      src={`${prefix}/image/translationjobs/services-img-1.png`}
                      alt="content"
                      className="w-100"
                    />
                  </Service.Image>
                </Col>
                <Col xs="12" className="col-lg-6 mb-5 mb-lg-0">
                  <Service.Image>
                    <img
                      src={`${prefix}/image/translationjobs/services-img-2.png`}
                      alt="content"
                      className="w-100"
                    />
                  </Service.Image>
                </Col>
              </Row>
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
