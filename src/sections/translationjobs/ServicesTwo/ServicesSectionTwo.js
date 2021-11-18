import React from 'react';
import SectionTitle from './Components/SectionTitle';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './style';
import prefix from '~lib/prefix';

export default function ServicesSectionTwo() {
  return (
    <Service backgroundColor="rgba(230, 248, 249, 0.4)">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <Service.Box>
              {/* Section Title */}
              <SectionTitle
                subTitle="Services"
                title="Why should you become a localistars translator?"
                text="Our goal is to provide a platform that removes the tedious parts of translations. Are you a freelance translator or a translation agency, then localistars is for you!"
                titleProps={{ mb: '20px' }}
                subTitleProps={{
                  mb: '10px',
                  className: 'subline',
                  fontColor: '#5034fc'
                }}
              />
              {/*/ .Section Title */}
              <Service.List mt="20px">
                <li>Direct Contact</li>
                <li>No risk</li>
                <li>Invoicing</li>
                <li>Get paid</li>
                <li>Find new clients with ease</li>
                <li>Keep the overview</li>
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
