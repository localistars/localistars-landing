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
               HELP
              </Cta.Subtitle>
              <Cta.Title as="h2" fontColor="#fff">
               Do you require some assistance before you register your company?

              </Cta.Title>
              <Cta.Text fontColor="#fff">
                Any question you may have about our pricing or platform will be answered by one of our team members.
              </Cta.Text>
              <Cta.Button
                className="btn-torch-red"
                href="/contact"
                rounded={true}
                sizeX="180px"
                sizeY="56px"
              >
                Contact us
              </Cta.Button>
            </Cta.InnerWrapper>
          </Col>
        </Row>
      </Container>
    </Cta>
  );
}
