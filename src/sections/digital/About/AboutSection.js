import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import Image from "next/image";
import AboutImage from "~image/home-digital-agency/about-videos-img.png";
import CounterBlock from "./Components/CounterBlock";
import About from "./style";

export default function AboutSection({ ...rest }) {
  return (
    <About backgroundColor="#F3F4F6" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <About.Box mrXL="50px" mt="0" mt="30px" mtXL="0" pb="40px" pbLG="0">
              <About.ContentTextBlock className="text-center text-xl-end">
                <About.Subtitle as="h6" fontColor="#fd346e">
                  Why Choose Us
                </About.Subtitle>
                <About.Title as="h2" pb="35px" mb="40px">
                  We are in the business of
                  <br className="d-none d-sm-block d-lg-none d-xxl-block" />
                  helping you grow yours
                </About.Title>
                <About.Text>
                  Stay up to date with Google company news and products.
                  <br className="d-none d-sm-block d-xl-none d-xxl-block" />
                  Discover stories about our culture, philosophy, and how Google
                  <br className="d-none d-md-block d-xl-none d-xxl-block" />
                  technology is impacting others.
                </About.Text>
              </About.ContentTextBlock>
              <CounterBlock mt="50px" />
            </About.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2"
          >
            <About.Image>
              <Image src={AboutImage} alt="content" placeholder="blur" />
              <Video id="LWZ7iytIA6k" className="video-btn">
                <i className="fa fa-play" />
              </Video>
            </About.Image>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
