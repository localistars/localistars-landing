import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaqWidget from './components/FaqWidget';
import FaqSectionData from '~data/pricing/pricing-2';
import Faq from './style';
import { Link } from '~components/Core';
const FaqSection = () => {
  return (
    <Faq>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <Faq.Box mb="58px">
              <Faq.Title as="h1">Frequently Asked Question</Faq.Title>
            </Faq.Box>
          </Col>
        </Row>
        {/* Faqs */}
        <Row className="justify-content-center">
          {FaqSectionData.map(({ title, text, icon }, index) => {
            return (
              <Col
                xs="12"
                className="col-lg-6 col-md-9 col-xs-11"
                key={'ppf' + index}
              >
                <FaqWidget icon={icon} title={title} text={text} />
              </Col>
            );
          })}
          {/* Faqs */}
          {/* Button  */}
          <Faq.ButtonGroup>
            <Faq.Text>
              Haven’t got your answer?
              <Faq.Button as={Link} to="/">
                Contact our support now
              </Faq.Button>
            </Faq.Text>
          </Faq.ButtonGroup>
          {/* Button End */}
        </Row>
      </Container>
    </Faq>
  );
};

export default FaqSection;
