import React from 'react'
import Image from 'next/image';
import { Link, LanguageSwitchLink } from '~components'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from "./style"
import LogoBlack from "~image/logo/logo-black.png";
import footer2Payment from "~image/project-management/payment-gatway.png";
import i18nextConfig from '~next-i18next.config'
import { useRouter } from 'next/router'

export default function FooterTwo() {
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
                        <Link  to="#">
                            <Image src={LogoBlack} alt="logo" />
                        </Link>
                    </Footer.Box>
                    <Footer.Text mb="36px">
                    We’re the digital agency to create<br className="d-none d-xl-block" /> your digital presence for better<br className="d-none d-xl-block" /> conversion and sales.</Footer.Text>

                </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-xl-8">
                <Row>
                    <Col xs="12" className="col-md-4 col-xs-6">
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
                                <Link to="/contact/contact-2">Contact</Link>
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
                    <Col xs="12" className="col-md-4 col-xs-6">
                        <Footer.Widgets>
                            <Footer.Title>Contact Details</Footer.Title>
                            <Footer.Address className="widgets-address">
                                <Footer.AddressItem>
                                    <i className="fa fa-map-marker-alt" />
                                    <span>Amsterdam <br className="d-block" />
                                    Netherlands</span>
                                </Footer.AddressItem>
                                <Footer.AddressItem>
                                    <i className="fa fa-phone-alt" />
                                    
                                    <a href="#">+31 62 19 22 705
                                    <span className="d-block"> 7 Days - 8am - 10pm </span> </a>
                                </Footer.AddressItem>
                                <Footer.AddressItem>
                                    <i className="fa fa-envelope" />
                                    <a href="mailto:info@medcartel.com">info@medcartel.com</a>
                                </Footer.AddressItem>
                            </Footer.Address>
                        </Footer.Widgets>
                    </Col>
                    <Col xs="12" className="col-md-4 col-xs-7">
                    <Footer.Widgets>
                        <Footer.Title>Follow us on social media</Footer.Title>
                        <Footer.Text>Get the latest trends updates right at your inbox.</Footer.Text>
                        <Footer.SocialShare>
                            <Footer.Box  pt="11px" pb="30px">
                                <Footer.SocialShareItem>
                                    <a target="_blank" href="https://www.facebook.com/">
                                        Facebook
                                    </a>
                                </Footer.SocialShareItem>
                                <Footer.SocialShareItem>
                                    <a target="_blank" href="https://twitter.com/">
                                        Twitter
                                    </a>
                                </Footer.SocialShareItem>
                                <Footer.SocialShareItem>
                                    <a target="_blank" href="https://www.instagram.com/">
                                        Instagram
                                    </a>
                                </Footer.SocialShareItem>
                            </Footer.Box>
                        </Footer.SocialShare>
                        <Footer.Payment>
                            <Image className="w-100" src={footer2Payment}/>
                        </Footer.Payment>
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