import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import About from './style';
import SectionTitle from './Components/SectionTitle';
import Video from '~components/VideoModal';
export default function AboutSection() {
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <img
                className="w-100"
                src="/image/translator/versatile_API.webp"
                alt="about"
              />
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle="Productivity increase"
                title="Versatile API"
                text="Automate your process for being more productive."
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <About.ButtonGroup mt="25px"></About.ButtonGroup>
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  );
}
