import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center g-0">
          <Col xs="12" className="col-xxl-6 col-lg-5 col-md-10">
            <About.Image>
              <img src="/image/home-startup/about-us-img.png" alt="content" className="w-100"/>
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-7 col-md-10">
            <About.Box>
              {/* Section Title */}
              <About.Content>
                <SectionTitle
                  subTitle="About us"
                  title="Welcome to Fastland technical solution "
                  text="Top of the list of dreams for many small firms and solo professionals is to win lucrative work with big corporate clients. A few decent projects can keep your business very healthy for a long time. The trouble is, those lucrative corporate contracts can be extremely tricky to land."
                  subTitleProps={{
                    mb: "10px",
                    className: "subline",
                    fontColor: "#5034fc",
                  }}
                  titleProps={{ mb: "10px", as: "h2" }}
                  mb="69px"
                />
              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
