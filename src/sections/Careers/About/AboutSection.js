import React from "react";
// import Image from "next/image";
import AboutImage from "../../../../public/image/mixed/career-video-bg.png";
import { Col, Container, Row } from "react-bootstrap";
import About from "./style";
import SectionTitle from "./Components/SectionTitle";
import Video from "~components/VideoModal";
export default function AboutSection() {
  return (
    <About>
      <Container>
        {/* about-us Content */}
        <Row className="align-items-center justify-content-center">
          <Col
            col="12"
            className="col-xl-5 col-lg-6 col-md-8 col-xs-11 order-2 order-lg-1"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title="Working with us,<br class='d-none d-lg-block'/>
                the Fastland team"
                text="Fastland inc is the premier platform for top<br class='d-none d-lg-block'/>
                companies to buy products of the world’s most<br class='d-none d-lg-block'/>
                talented professionals. <br/> <br/> We're changing how the world works.<br class='d-none d-lg-block'/>
                And you could be part of it."
                titleProps={{ mb: "20px" }}
                subTitleProps={{ mb: "25px" }}
              />
            </About.Content>
          </Col>
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-8 col-xs-11 order-1 order-lg-2"
          >
            <About.Image>
              <img src={AboutImage.src} alt="content" class="w-100"/>
              <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter">
                {" "}
                <i className="fa fa-play" />{" "}
              </Video>
            </About.Image>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  );
}

{
  /* <SectionTitleBlock
  subTitle="Watch video"
  title="Consultation Trade
  Easier Than Ever"
  text="Scale up and down easily as your business demands. And make use of business-grade consultation. Book flexibly by the day, week or longer and customise the layout to reflect your brand."
  titleProps={{mb:"30px"}}
  subTitleProps={{mb:"25px"}}
  /> */
}
