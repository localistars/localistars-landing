import React from "react";
import TestiomialCard from "./Components/Card";
import SectionTitle from "./Components/SectionTitle";
import testiMonialUserImg1 from "~image/it-services/user-circle-1.png";
import testiMonialUserImg2 from "~image/it-services/user-circle-2.png";
import testiMonialUserImg3 from "~image/it-services/user-circle-3.png";
import Testimonial from "./style";
import { Col, Container, Row } from "react-bootstrap";
export default function TestimonialSection() {
  return (
    <Testimonial backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-9 col-xl-9 col-xxl-7 text-center">
            <SectionTitle
              subTitle="Testimonial"
              title="What The People Thinks About Us"
              subTitleProps={{ mb: "27px" }}
              titleProps={{ mb: "10px", as: "h2" }}
              mb="50px"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image={testiMonialUserImg1.src}
              text="@Fastland is great for creating landing pages within minutes! It actually takes less time."
              userName="Angela Park"
              userPosition="CEO at Orbital"
            />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image={testiMonialUserImg2.src}
              text="@Fastland is great for creating landing pages within minutes! It actually takes less time."
              userName="Angela Park"
              userPosition="CEO at Orbital"
            />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image={testiMonialUserImg3.src}
              text="@Fastland is great for creating landing pages within minutes! It actually takes less time."
              userName="Angela Park"
              userPosition="CEO at Orbital"
            />
          </Col>
        </Row>
      </Container>
    </Testimonial>
  );
}
