import React from "react";
import Cta from "./style";
import { Col, Container, Row } from "react-bootstrap";
import ctal5Img from "../../../../public/image/home-agency/promo-l5-img.png";

export default function CtaSection({ ...rest }) {
  return (
    <Cta backgroundImage={ctal5Img.src}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-10">
            <Cta.InnerWrapper className="text-center">
              <Cta.Subtitle fontColor="#ffce3e" as="span">
                NEWSLETTER
              </Cta.Subtitle>
              <Cta.Title as="h2" fontColor="#fff">
                Start project with us?
              </Cta.Title>
              <Cta.Text fontColor="#fff">
                It includes Project Web App, and can,
                <br className="d-none d-xs-block" /> depends on your
                subscription, also project.
              </Cta.Text>
              <Cta.Button
                className="btn-torch-red"
                href="#"
                rounded={true}
                sizeX="180px"
                sizeY="56px"
              >
                Start Now
              </Cta.Button>
            </Cta.InnerWrapper>
          </Col>
        </Row>
      </Container>
    </Cta>
  );
}
