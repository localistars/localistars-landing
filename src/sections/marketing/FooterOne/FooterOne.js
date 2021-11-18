import React from 'react';
import { Link } from '~components';
import { Container, Row, Col } from 'react-bootstrap';
// import { Images } from '~data'
import Footer from './style';
import LogoWhite from '../../../../public/image/logo/logo-white.png';
export default function FooterOne() {
  return (
    <Footer backgroundColor="#6a26da">
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img src={LogoWhite.src} alt="logo" />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                  The best medicines & biggest
                  <br className="d-none d-xl-block" />
                  brands within 30 minutes at your
                  <br className="d-none d-xl-block" />
                  home. Experience the power of
                  <br className="d-none d-xl-block" />
                  MedCartel today.
                </Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="/innerpage/about-us">About us</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Privacy Policy</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/innerpage/terms">
                          Terms &amp; Conditions
                        </Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/innerpage/faq">Faq</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/innerpage/contact/contact-1">Contact</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>More Links</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="/">News rooms</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Missions</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Investors</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Faq</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/innerpage/career">Careers</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Contact Details</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          Amsterdam <br className="d-block" />
                          Netherlands
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-phone-alt" />

                        <Link to="/">
                          +31 62 19 22 705
                          <span className="d-block">
                            {' '}
                            7 Days - 8am - 10pm{' '}
                          </span>{' '}
                        </Link>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a href="mailto:info@medcartel.com">
                          info@medcartel.com
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2021 Fastland By FinestDevs. All Rights Reserved
          </Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.facebook.com">
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://twitter.com">
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.instagram.com">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.linkedin.com">
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
