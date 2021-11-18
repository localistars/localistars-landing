import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Form } from "~components"
import counDownImage from '../../../../public/image/mixed/pattern-img-1.png';
import CountDown from './Components/CountDownWIdget';
import Countdown from './style';

const ComingSoonSection = () => {
  return (
    <Countdown backgroundColor="#f3f4f6">
      <Container className="position-static">
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-4 position-static">
            <Countdown.Image backgroundImage={counDownImage.src} />
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-8 col-md-10 text-center text-lg-end"
          >
            <Countdown.Box>
              <Countdown.Title as="h2">
                Fastland is coming soon
                <br className="d-none d-xs-block d-lg-none d-xxl-block" /> with
                remarkable updates
              </Countdown.Title>
              <Countdown.Text as="p">
                Our focus is always on finding the best people to work with. Our
                <br className="d-none d-md-block" />
                bar is high, but you look ready to take on the challenge..
              </Countdown.Text>
              <Countdown.FromSection>
                <CountDown />
                <Countdown.FormText>
                  Get notified on product launch!
                </Countdown.FormText>
                <Countdown.Form mlLG="80px" mlXXL="157px">
                  <Countdown.InputBox className="justify-content-center flex-column flex-xs-row">
                    <Countdown.FormInput
                      as="input"
                      placeholder="Enter your email"
                      required
                    />
                    <Countdown.Button className=" btn btn-primary text-white">
                      Start Now!
                    </Countdown.Button>
                  </Countdown.InputBox>
                </Countdown.Form>
              </Countdown.FromSection>
            </Countdown.Box>
          </Col>
        </Row>
      </Container>
    </Countdown>
  );
};

export default ComingSoonSection;
