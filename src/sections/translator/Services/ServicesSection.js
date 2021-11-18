import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from './Components/Card';
import ServiceData from '~data/translator/Service';
import SectionTitle from './Components/SectionTitle';
import Service from './style';
import { useTranslation } from 'next-i18next';

export default function ServiceSection() {
  const { t } = useTranslation('translations');

  return (
    <Service backgroundColor="rgba(21, 205, 168, 0.3)">
      <Container>
        <Row className="row justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10"
          >
            <SectionTitle
              subTitle={t('consumer.service.subTitle')}
              title={t('consumer.service.title')}
              text={t('consumer.service.text')}
              subTitleProps={{ mb: '27px' }}
              titleProps={{ mb: '10px', as: 'h2' }}
              mb="20px"
            />
          </Col>
          {ServiceData.map(({ title, icon, text, id, iconColor }) => {
            return (
              <Col
                xs="12"
                className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10"
                key={id}
              >
                <ServicesCard
                  title={t(`consumer.service.services.${id}.title`, title)}
                  text={t(`consumer.service.services.${id}.text`, text)}
                  icon={icon}
                  to="/"
                  iconBackground={iconColor}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Service>
  );
}
