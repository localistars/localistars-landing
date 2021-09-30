import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import About from "./style";
import SectionTitle from "./Components/SectionTitle";
import Video from "~components/VideoModal";
import AboutusImage from "~image/home-agency/about-us-l5-img.png";
export default function AboutSection() {
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <img src={AboutusImage.src} alt="about" className="w-100" />
              <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter">
                {" "}
                <i className="fa fa-play" />{" "}
              </Video>
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle="Watch video"
                title="Consultation Trade
            Easier Than Ever"
                text="Scale up and down easily as your business demands. And make use of business-grade consultation. Book flexibly by the day, week or longer and customise the layout to reflect your brand."
                titleProps={{ mb: "30px" }}
                subTitleProps={{ mb: "25px" }}
              />
              <About.ButtonGroup mt="25px">
                <About.Button className="btn-primary btn-1" as={Link} to="/">
                  Learn More
                </About.Button>
                <About.Button
                  className="btn-electric-violet-2 btn-2"
                  as={Link}
                  to="/"
                >
                  Get Started
                </About.Button>
              </About.ButtonGroup>
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  );
}
