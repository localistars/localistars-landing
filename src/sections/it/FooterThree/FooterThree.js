import { Link, LanguageSwitchLink } from '~components'
import LogoBlack from "~image/logo/logo-black.png";
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import instaImg1 from "~image/it-services/insta-1.png";
import instaImg2 from "~image/it-services/insta-2.png";
import instaImg3 from "~image/it-services/insta-3.png";
import instaImg4 from "~image/it-services/insta-4.png";
import instaImg5 from "~image/it-services/insta-5.png";
import instaImg6 from "~image/it-services/insta-6.png";
import Footer from "./style"
import i18nextConfig from '~next-i18next.config'
import { useRouter } from 'next/router'

export default function FooterThree() {
    const router = useRouter()
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale
    return(
        <Footer>
        <Container>
            <Footer.Box pbXL="95px">
            <Row>
                <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
                <Footer.Widgets className="footer-widgets footer-widgets--l7">
                    {/* Brand Logo*/}
                    <Footer.Box mb="30px">
                        <Link  to="/">
                            <Image src={LogoBlack} alt="logo" />
                        </Link>
                    </Footer.Box>
                    <Footer.Text mb="36px">
                    We’re the digital agency to create<br className="d-none d-xl-block" /> your digital presence for better<br className="d-none d-xl-block" /> conversion and sales.</Footer.Text>

                </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-8">
                <Row>
                <Col xs="12" className="col-lg-4 col-xs-6">
                        <Footer.Widgets>
                            <Footer.Title>Contact Details</Footer.Title>
                            <Footer.Address className="widgets-address">
                                <Footer.AddressItem>
                                    <span>Amsterdam <br className="d-block" />
                                    Netherlands</span>
                                </Footer.AddressItem>
                                <Footer.AddressItem>
                                    <Link to="/">+31 62 19 22 705
                                    <span className="d-block"> 7 Days - 8am - 10pm </span> </Link>
                                </Footer.AddressItem>
                                <Footer.AddressItem>
                                    <a href="mailto:info@medcartel.com">info@medcartel.com</a>
                                </Footer.AddressItem>
                            </Footer.Address>
                        </Footer.Widgets>
                    </Col>
                    <Col xs="12" className="col-lg-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Company</Footer.Title>
                        <Footer.List>
                            <Footer.ListItems>
                                <Link to="/about-us">About
                                us</Link>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <Link to="/">Privacy
                                Policy</Link>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <Link to="/innerpage/terms">Terms &amp;
                                Conditions</Link>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <Link to="/innerpage/faq">Faq</Link>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <Link to="/contact/contact-1">Contact</Link>
                            </Footer.ListItems>
                            <hr />
                            {i18nextConfig.i18n.locales.map((locale) => {
                                if (locale === currentLocale) return null;
                                return (
                                    <Footer.ListItems key={locale}>
                                        <LanguageSwitchLink key={locale} locale={locale}>
                                            {locale}
                                        </LanguageSwitchLink>
                                    </Footer.ListItems>
                                )
                            })}
                        </Footer.List>
                    </Footer.Widgets>
                    </Col>

                    <Col xs="12" className="col-lg-4 col-xs-7">
                    <Footer.Widgets>
                        <Footer.Title>Instagram</Footer.Title>
                        <Footer.Gallery as={Row}>
                            <Col xs="4">
                                <Image src={instaImg1} alt="insta-image" className="w-100" />
                            </Col>
                            <Col xs="4">
                                <Image src={instaImg2} alt="insta-image" className="w-100" />
                            </Col>
                            <Col xs="4">
                                <Image src={instaImg3} alt="insta-image" className="w-100" />
                            </Col>
                            <Col xs="4">
                                <Image src={instaImg4} alt="insta-image" className="w-100" />
                            </Col>
                            <Col xs="4">
                                <Image src={instaImg5} alt="insta-image" className="w-100" />
                            </Col>
                            <Col xs="4">
                                <Image src={instaImg6} alt="insta-image" className="w-100" />
                            </Col>
                        </Footer.Gallery>
                    </Footer.Widgets>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Footer.Box>
            <Footer.Copyright>
            <Footer.CopyrightText>© 2021 Fastland By FinestDevs. All Rights Reserved</Footer.CopyrightText>
            <Footer.SocialShare>
                <Footer.SocialShareItem>
                    <a target="_blank" href="https://www.facebook.com/">
                    <i className="fab fa-facebook-square" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a target="_blank" href="https://twitter.com/">
                    <i className="fab fa-twitter" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a target="_blank" href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                    </a>
                </Footer.SocialShareItem>
                <Footer.SocialShareItem>
                    <a target="_blank" href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                    </a>
                </Footer.SocialShareItem>
            </Footer.SocialShare>
            </Footer.Copyright>
        </Container>
        </Footer>
    )
}