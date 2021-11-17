import React from "react";
import SectionTitle from "./components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Widget from "./components/Widget";
import Content from "./style";
import prefix from '~lib/prefix';

export default function ContentSectionOne() {
  return (
    <Content backgroundColor="#f2f5fb">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* about-us Content */}
          <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-10 order-2 orde-lg-1">
            <Content.Box mbLG="60px" mb="30px">
              <SectionTitle
                subTitle="About Lupinus Group"
                title="Present your app in a beautiful and elegant way."
                text="White iPhone Mockup Templates. A collection of three mockups showing
        an iPhone on a dark leather seat. High resolution PSD files, each coming
        with a smart object."
                subTitleProps={{ mb: "20px" }}
                titleProps={{ mb: "10px" }}
              />
            </Content.Box>
            <Content.Box>
              <Row className=" justify-content-center">
                <Col className="col-lg-6 col-xs-6">
                  <Widget
                    icon="far fa-envelope"
                    title="Minimal Design"
                    text="Generate Lorem Ipsum place holder<br class='d-none d-xl-block'> text for use in your Explore"
                  />
                </Col>
                <Col className="col-lg-6 col-xs-6">
                  <Widget
                    icon="fa fa-layer-group"
                    title="Best Material"
                    text="Generate Lorem Ipsum place holder<br class='d-none d-xl-block'> text for use in your Explore"
                  />
                </Col>
              </Row>
            </Content.Box>
          </Col>
          {/*/ .about-us Content */}
          <Col
            xs="12"
            className="col-xxl-6 col-lg-5 col-md-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.ImageGroup>
            <img src={`${prefix}/image/home-app/content-mobile-img.png`} alt="content" className="w-100"/>
              <Content.ImageShape>
              <img src={`${prefix}/image/home-app/red-shape.png`} alt="content"/>
              </Content.ImageShape>
            </Content.ImageGroup>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}
