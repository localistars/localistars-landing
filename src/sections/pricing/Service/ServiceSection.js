import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceData from '~data/pricing/Service';
import ServiceWidget from './Component/Widget';
import Service from './style';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';

export default function ServiceSection() {
  const { t } = useTranslation('translations');

  return (
    <>
      <Service className="border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <img
            src={`${prefix}/image/pricing/localistars-pricing.png`}
            alt="localistars pricing"
          />
        </Service.Shape>

        <Container>
          {/* Section Title */}
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Service.Title as="h2" mb="0">
                {t('pricing.service.title')}
              </Service.Title>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
              <Service.Text>
                <Trans i18nKey="pricing.service.text">
                  Transparent.
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  No middleman.
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  No hidden costs.
                </Trans>
              </Service.Text>
            </Col>
          </Row>
          <Service.Box mtLG="100px" mtMD="40px">
            <Row className="justify-content-center justify-content-md-start">
              {serviceData.services.map(
                ({ title, icon, iconColor, text, id }) => {
                  return (
                    <Col className="col-lg-4 col-xs-6 col-10" key={id}>
                      <ServiceWidget
                        icon={icon}
                        title={t(`pricing.service.services.${id}.title`, title)}
                        text={t(`pricing.service.services.${id}.text`, text)}
                        iconColor={iconColor}
                        id={id}
                        mt="40px"
                      />
                    </Col>
                  );
                }
              )}
            </Row>
          </Service.Box>
        </Container>
      </Service>
    </>
  );
}
