
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import l2CtaBg from "~image/project-management/l2-cta-mask.png";
import Cta from "./style"

export default function CtaSection() {
  
  return (
    <Cta>
      <Container>
        <Cta.MainBox backgroundShape={l2CtaBg} backgroundColor="#5338fc">
          <Row className="align-items-center">
            <Col className="col-lg-7">
              <Cta.Title as="h2" fontColor="#fff">
                Get started by
                <br className="d-none d-xs-block" /> downloading apps.
              </Cta.Title>
            </Col>
            <Col className="col-lg-5 text-center text-lg-end">
              <Cta.Button className="btn-white" to="/">
                Download App
              </Cta.Button>
            </Col>
          </Row>
        </Cta.MainBox>
      </Container>
    </Cta>
  )
}
