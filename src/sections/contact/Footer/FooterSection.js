import { Link } from '~components'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '~data'
import Footer from "./style"
export default function FooterSection(){
return(
    <Footer>
    <Container>
        <Footer.Box pbXL="95px">
        <Row>
            <Col xs="12" className="col-lg-3 col-md-7 col-xs-9">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                    <Link  to="#">
                        <img src={Images.FooterSix.LogoBlack} alt="logo" />
                    </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                We’re the digital agency to create<br className="d-none d-xl-block" /> your digital presence for better<br className="d-none d-xl-block" /> conversion and sales.</Footer.Text>
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
            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-9">
            <Row>
                <Col xs="12" className="col-lg-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Contact Details</Footer.Title>
                        <Footer.Address className="widgets-address">
                            <Footer.AddressItem>
                                <i className="fa fa-map-marker-alt" />
                                <span>Address: <br className="d-block" />
                                Netherlands<br className="d-block" />
                                4401 Waldeck Street,<br className="d-block" />
                                Grapevine Nashville, Tx 76051</span>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <i className="fa fa-phone-alt" />
                                
                                <a href="#"><span> Phone: </span><br className="d-block" /> +99 (0) 101 0000 888</a>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <i className="fa fa-envelope" />
                                <a href="mailto:info@medcartel.com">
                                <span className="d-block"> Email:
                                </span>info@medcartel.com</a>
                            </Footer.AddressItem>
                        </Footer.Address>
                    </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-xs-6">
                <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                        <Footer.ListItems>
                            <a href="#">About
                            us</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Privacy
                            Policy</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Terms &amp;
                            Conditions</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Rider</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#">Contact</a>
                        </Footer.ListItems>
                    </Footer.List>
                </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-md-6 col-xs-9">
                <Footer.Widgets>
                    <Footer.Title>Newsletter</Footer.Title>
                    <Footer.Text>Get the latest trends updates right at your inbox.</Footer.Text>
                    {/* Newsletter */}
                    <Footer.Newsletter>
                        <form action="/.">
                            <input type="text" placeholder="Enter Your Email" />
                            <Footer.NewsletterBtn backgroundColor="#ff5722" hoverTextColor="#fff" textColor="#fff" sizeX="150px" sizeY="56px" type="submit">Subscribe</Footer.NewsletterBtn>
                        </form>
                    </Footer.Newsletter>
                    {/*/ .Newsletter */}
                </Footer.Widgets>
                </Col>
            </Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2021 Fastland By FinestDevs. All Rights Reserved</Footer.CopyrightText>
        </Footer.Copyright>
    </Container>
    </Footer>
)
}