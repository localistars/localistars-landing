import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Content from "./style";
import SectionTitle from "./Components/SectionTitle";

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
                subTitle="About us"
                title="An Exceptionally unique experience Tailored to you"
                text="In a professional context it often happens that private or corporate clients order a publication news while still not being ready."
                titleProps={{ mb: "30px" }}
                subTitleProps={{ mb: "25px" }}
              />
              <Content.Button background="#ff5722" rounded={true} mt="25px">
                Learn More
              </Content.Button>
            </Col>
            <Col xs="12" className="col-xxl-5 col-lg-4 col-md-6 col-xs-9">
              <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                <img src="/image/home-agency/content-1-l5-img.png" alt="content"/>
              </Content.Image>
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
                  <Content.WidgetTitle>Our Customer</Content.WidgetTitle>
                  <Content.WidgetText>
                    Business advisory service advises current and future
                    businesses prospects of a client, with the aim of
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Our Product</Content.WidgetTitle>
                  <Content.WidgetText>
                    Business advisory service advises current and future
                    businesses prospects of a client, with the aim of
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Our Services</Content.WidgetTitle>
                  <Content.WidgetText>
                    Business advisory service advises current and future
                    businesses prospects of a client, with the aim of
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
