import React from 'react';
import { Link } from '~components';
import ProcessCard from './Components/Card';
import Process from './style';
import ProcessData from '~data/services/Process';
import { Container, Row, Col } from 'react-bootstrap';
export default function ProcessSection({ ...rest }) {
  return (
    <Process backgroundColor="#6001d3" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-xl-start order-2 order-xl-1">
          <Col xs="12" className="col-xl-4 col-md-10 text-center text-xl-start">
            <Process.Box mt="20px" mtXL="0px">
              <Process.Subtitle as="h5">Our Process</Process.Subtitle>
              <Process.Title as="h2">
                Our expert team
                <br className="d-none d-xxl-block" /> do their best
              </Process.Title>
              <Process.Text as="p">
                You can also record any previous experience
                <br className="d-none d-xs-block d-lg-none d-xl-block"></br> at
                other jobs or volunteering and{' '}
              </Process.Text>
              <Process.Button className="btn-torch-red" to="/" as={Link}>
                Get Started
              </Process.Button>
            </Process.Box>
          </Col>
          <Col xs="12" className="col-xl-8 order-1 order-xl-2">
            <Process.Box as="div" className="widgets">
              <Row className="justify-content-center">
                {ProcessData.map(
                  ({ title, text, icon, iconBackground, id }) => {
                    return (
                      <Col
                        xs="12"
                        className="col-lg-4 col-md-4 col-xs-6"
                        key={id}
                      >
                        <ProcessCard icon={icon} title={title} text={text} />
                      </Col>
                    );
                  }
                )}
              </Row>
            </Process.Box>
          </Col>
        </Row>
      </Container>
    </Process>
  );
}
