import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceData from '~data/translationjobs/Service';
import ServiceWidget from './Component/Widget';
import Service from './style';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

export default function ServiceSection() {
  const { t } = useTranslation('translations');

  return (
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <img
            src={`${prefix}/image/translationjobs/services-shape-l1.png`}
            alt="shape dot"
          />
        </Service.Shape>
        <Container>
          <Service.Box mtLG="5px" mtMD="5px">
            <Row className="justify-content-center justify-content-md-start">
              {serviceData.services.map(
                ({ title, icon, iconColor, text, id }) => {
                  return (
                    <Col className="col-lg-4 col-xs-6 col-10" key={id}>
                      <ServiceWidget
                        icon={icon}
                        title={t(`creator.service.services.${id}.title`, title)}
                        text={t(`creator.service.services.${id}.text`, text)}
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
