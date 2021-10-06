import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from '~components'
import Footer from "./style"
export default function FooterFour(){
return(
    <Footer>
        <Container>
            <Footer.Box pb="30px">
            <Row className="justify-content-center justify-content-lg-between">
                <Col xs="12" className="col-6 col-xxs-4 col-lg-4 col-md-5 col-xs-4">
                <Footer.Logo>
                    <Footer.Box mb="30px" mbMD="0">
                        <Link to="#">
                            <img src="/image/logo/logo-black.png" alt="logo" />
                        </Link>
                    </Footer.Box>
                </Footer.Logo>
                </Col>
                <Col xs="12" className="col-lg-8 col-md-7">
                    <Footer.Menu>
                    <Footer.MenuItems><Link to="/">Home</Link></Footer.MenuItems>
                    <Footer.MenuItems> <Link to="/innerpage/about-us">About Us</Link> </Footer.MenuItems>
                    <Footer.MenuItems><Link to="/blog/blogs-reguler">Blog</Link></Footer.MenuItems>
                    <Footer.MenuItems><Link to="/innerpage/contact/contact-1">Contact</Link>
                    </Footer.MenuItems>
                    </Footer.Menu>
                </Col>
            </Row>
            </Footer.Box>
            <Footer.Copyright>
            <Footer.CopyrightText>© 2021 Fastland By FinestDevs. All Rights Reserved</Footer.CopyrightText>
            <Footer.SocialShare>
                <Footer.SocialShareItem>
                    <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-square" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin" />
                    </a>
                </Footer.SocialShareItem>
            </Footer.SocialShare>
            </Footer.Copyright>
        </Container>
    </Footer>
)
}