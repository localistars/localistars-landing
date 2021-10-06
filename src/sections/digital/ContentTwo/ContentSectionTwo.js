import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
export default function ContentSectionTwo({ ...rest }) {
  return (
    <Content {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box>
              <Content.Subtitle fontColor="#fd346e" as="h4">
                Our Mission
              </Content.Subtitle>
              <Content.Title as="h2">
                Create recognition for businesses online
              </Content.Title>
              <Content.Text>
                Business advisory service advises current and future
                <br className="d-none d-md-block" /> businesses prospects of a
                client, with the aim of
                <br className="d-none d-md-block" /> advancing their business or
                company.{" "}
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Get started
              </Content.Button>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.Images>
              <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="/image/home-digital-agency/1.jpg"
                    alt="content"
                  />
                </Content.ImageOneInner>
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner>
                  <img
                    src="/image/home-digital-agency/2.jpg"
                    alt="content"
                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}
