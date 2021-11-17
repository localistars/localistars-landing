import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Content from "./style";
import SectionTitle from "./Components/SectionTitle";
import prefix from '~lib/prefix';

export default function ContentSectionOne() {
  return (
    <Content>
      <Container>
        <Content.InnerWrapper>
          <Row className="align-items-center justify-content-center">
            <Col
              xs="12"
              className="col-lg-4 col-md-8 col-xs-11 text-center text-lg-start"
            >
              {/* Section Title */}
              <SectionTitle
                subTitle="Few clicks away"
                title="Find the right translator for your need"
                text="You can post your requests in our translation marketplace for free and receive bids from translators within hours. This service is provided to you at no cost."
                titleProps={{ mb: "30px" }}
                subTitleProps={{ mb: "25px" }}
              />
              <Content.Button background="#ff5722" rounded={true} mt="25px">
                Register Now
              </Content.Button>
            </Col>
            <Col xs="12" className="col-xxl-5 col-lg-4 col-md-6 col-xs-9">
              
              <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                <img src={`${prefix}/image/translator/look-for-translator.jpg`} alt="Find the right translator"/>
              </Content.Image>

              <Content.Image1 mt="30px" mb="30px" mbMD="0" mtMD="0">
                <img src={`${prefix}/image/translator/look-for-translator-mobile.jpg`} alt="Find the right translator"/>
              </Content.Image1>

            </Col>
            <Col
              xs="12"
              className="col-xl-3 col-lg-4 col-md-6 col-xs-9 order-3"
            >
              <Content.WidgetsWrapper
                mb="-10px"
                mtMD="40px"
                mtLG="0"
                mrXS="70px"
                mrMD="30px"
                mrLG="0"
              >
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Freelance or agency translators</Content.WidgetTitle>
                  <Content.WidgetText>
                   Within hours, you can get a high-quality translation from a professional translator or professional translation company.
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                
                
              </Content.WidgetsWrapper>
            </Col>
          </Row>
        </Content.InnerWrapper>
      </Container>
    </Content>
  );
}
