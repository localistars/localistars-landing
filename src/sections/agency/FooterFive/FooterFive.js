import { Link } from "~components";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoBlack from "../../../../public/image/logo/logo-black.png";
import Footer from "./style";
export default function FooterFive() {
  return (
    <Footer backgroundColor="#f3f4f6">
      <Container>
        <Footer.Box pb="25px">
          <Row className="justify-content-center justify-content-lg-between">
            <Col xs="12">
              <Footer.Logo>
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img src={LogoBlack.src} alt="logo" />
                  </Link>
                </Footer.Box>
              </Footer.Logo>

              <Footer.Text as="p">
                We’ll help you achieve Your marketing & business goals
              </Footer.Text>
              <Footer.Menu>
                <Footer.MenuItems>
                  <a href="#">Home</a>
                </Footer.MenuItems>
                <Footer.MenuItems>
                  <a href="#">About Us</a>
                </Footer.MenuItems>
                <Footer.MenuItems>
                  <a href="#">Services</a>
                </Footer.MenuItems>
                <Footer.MenuItems>
                  <a href="#">Blog</a>
                </Footer.MenuItems>
                <Footer.MenuItems>
                  <a href="#">Contact</a>
                </Footer.MenuItems>
              </Footer.Menu>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
          <Footer.CopyrightText>
            © 2021 Fastland By FinestDevs. All Rights Reserved
          </Footer.CopyrightText>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
