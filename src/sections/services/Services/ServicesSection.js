import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from './Component/Card';
import Service from './style';
import { ServiceData } from '~data';
export default function ServicesSection({ ...rest }) {
  return (
    <Service backgroundColor="rgba(169, 210, 255, 0.1)" {...rest}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-xl-7 col-md-9 col-sm-10">
            <Service.Box className="text-center" mb="30px" mbLG="55px">
              <Service.Subtitle as="h6" fontColor="#ff1e38">
                Our Services
              </Service.Subtitle>
              <Service.Title as="h2">Provided Features</Service.Title>
            </Service.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {ServiceData.services.map(
            ({ title, icon, text, id, iconBackground }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10 "
                  key={id}
                >
                  <ServicesCard
                    title={title}
                    text={text}
                    icon={icon}
                    iconBackground={iconBackground}
                  />
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </Service>
  );
}
