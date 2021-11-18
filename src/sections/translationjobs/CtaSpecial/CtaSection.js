import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hero from './style';
import Video from '~components/VideoModal';
import { Link } from '~components';
import prefix from '~lib/prefix';

export default function HeroSection({ ...rest }) {
  return (
    <Hero backgroundColor="#e6f8f9" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              <Hero.Subtitle as="h4" fontColor="#15cda8">
                Next steps
              </Hero.Subtitle>
              <Hero.Title as="h2">Find out more or start for free</Hero.Title>
              <Hero.Text>
                See how clients and translators can work together on our
                platform.
              </Hero.Text>
              <Hero.Buttons mt="30px" mtLG="50px">
                <Hero.Button
                  className="btn-1 btn-electric-violet-2"
                  to="/how-it-works"
                  as={Link}
                >
                  How does it work
                </Hero.Button>
                <Hero.Button className="btn-outline-shark" to="/" as={Link}>
                  Register free
                </Hero.Button>
              </Hero.Buttons>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-11 order-1 order-lg-2"
          >
            <Hero.Video
              className="welcome-img welcome-img--l9 video-box"
              mb="30px"
              mbLG="0"
            >
              <img
                src={`${prefix}/image/translationjobs/teaser.png`}
                alt="content"
                className="w-100"
              />
              {/* Video Button */}
              <Video id="e6Ede8hdU8c" className="video-btn">
                <i className="fa fa-play" />
              </Video>
            </Hero.Video>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
