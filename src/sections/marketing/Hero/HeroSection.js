import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "~components";
import { Button } from "~styled";
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style";
import { useTranslation } from 'next-i18next'

export default function HeroSection() {
  const { t } = useTranslation('translations')

  return (
    <Hero className="position-relative bg-default">
      <Container>
        <Row>
          {/* Welcome content Area */}
          <Col
            className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
            xs="12"
          >
            <Hero.Content>
              <Hero.Title as="h1">
                {t('heroStart')}
                <br />
                <ReactTypingEffect
                  text={t('heroEndings', { returnObjects: true })}
                  className="highlight-text d-inline-block text-primary"
                  speed="150"
                  eraseSpeed="100"
                  typingDelay="400"
                  eraseDelay="800"
                  cursorClassName="typed-cursor"
                />
              </Hero.Title>
              <Hero.Text>
                Create custom landing pages with Fastland
                <br className="d-none d-xs-block" /> that converts more
                visitors than any website.
              </Hero.Text>
              {/* Newsletter */}
              <Row>
                <Col xs="12" className="col-xxl-10">
                  <Hero.Newsletter>
                  <form>
                    <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/>
                    <Button className="btn-purple-heart"textTransform="capitalized">Start For Free</Button>
                  </form>
                </Hero.Newsletter>
                <Hero.NewsletterText>
                  By clicking the button, you are agreeing with our <Link to="/innerpage/terms">Terms & Conditions.</Link>
                </Hero.NewsletterText>
                </Col>
              </Row>
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*Welcome Image Area */}
          <Col xs={12} className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static">
            <ImageGroup/>
          </Col>
          {/*/ .Welcome Image Area */}
        </Row>
      </Container>
    </Hero>
  )
}
