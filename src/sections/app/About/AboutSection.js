import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./components/SectionTitle";
import Widget from "./components/widget";
import About from "./style";
export default function AboutSection() {
  return (
    <About backgroundColor="#f2f5fb">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <SectionTitle
              subTitle="About Lupinus Group"
              title="Innovative Building With New Materials"
              titleProps={{ mb: "50px" }}
              subTitleProps={{ mb: "15px" }}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-2 order-lg-1">
            <Widget
              directionXS="row-reverse"
              title="Optimal Choice"
              icon="fa fa-layer-group"
              text="The White iphone smartphone mockup counterclockwise "
            />
            <Widget
              directionXS="row-reverse"
              title="Financial advice"
              icon="fa fa-chart-pie"
              text="The White iphone smartphone mockup counterclockwise "
            />
            <Widget
              directionXS="row-reverse"
              title="Innovative solutions"
              icon="fa fa-cog"
              text="The White iphone smartphone mockup counterclockwise "
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-lg-4 col-md-8 col-xs-9 order-1 order-lg-2 text-center"
          >
            <About.ImageContent>
              <img src="/image/home-app/about-mobile-img.png" alt="content"/>
              <About.Shape>
                <img src="/image/home-app/green-shape.png" alt="content"/>
              </About.Shape>
            </About.ImageContent>
          </Col>
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-3">
            <Widget
              directionXS="row"
              title="Optimal Choice"
              icon="fa fa-bookmark"
              text="The White iphone smartphone mockup counterclockwise "
            />
            <Widget
              directionXS="row"
              title="Financial advice"
              icon="fa fa-headphones"
              text="The White iphone smartphone mockup counterclockwise "
            />
            <Widget
              directionXS="row"
              title="Innovative solutions"
              icon="fa fa-bell"
              text="The White iphone smartphone mockup counterclockwise "
            />
          </Col>
        </Row>
      </Container>
    </About>
  );
}
