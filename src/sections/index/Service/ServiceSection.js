import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceData from '~data/index/Service';
import ServiceWidget from './Component/Widget';
import Service from './style';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';

export default function ServiceSection() {
  const { t } = useTranslation('translations');

  return (
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <img
            src={`${prefix}/image/index/services-shape-l1.png`}
            alt="shape dot"
          />
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Service.Title as="h2" mb="0">
                <Trans i18nKey="index.service.title">
                  Efficient translation
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  services company & platform
                </Trans>
              </Service.Title>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
              <Service.Text>
                <Trans i18nKey="index.service.text">
                  Localistars is a easy-to-use translation company
                  <br className="d-none d-xs-block" />
                  that allows businesses of all sizes to purchase cost-effective
                  translations using their translation-platform.
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
                        title={t(`index.service.services.${id}.title`, title)}
                        text={t(`index.service.services.${id}.text`, text)}
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
