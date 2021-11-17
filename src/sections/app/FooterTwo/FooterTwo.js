import React from 'react'
import { Link, LanguageSwitchLink } from '~components'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from "./style"
import i18nextConfig from '~next-i18next.config'
import { useRouter } from 'next/router'
import prefix from '~lib/prefix';

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
                            <img src={`${prefix}/image/logo/logo-black.png`} alt="content" placeholder="blur" />
                        </Link>
                    </Footer.Box>
                    <Footer.Text mb="36px">
                    We’re a translation marketplace for companies searching for a translatior as well as for freelance translators who are looking for a job</Footer.Text>

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
                                    <span>inweso GmbH
                                    <br className="d-block" />
                                    Switzerland 🇨🇭</span>
                                </Footer.AddressItem>
                                
                                <Footer.AddressItem>
                                    <i className="fa fa-envelope" />
                                    <a href="mailto:support@localistars.com">support@localistars.com</a>
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
                                    <a target="_blank" href="https://twitter.com/localistars">
                                        Twitter
                                    </a>
                                </Footer.SocialShareItem>
                                <Footer.SocialShareItem>
                                    <a target="_blank" href="https://www.instagram.com/localistars/">
                                        Instagram
                                    </a>
                                </Footer.SocialShareItem>
                                <Footer.SocialShareItem>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCOpWH9CMj3t_yswl_uZb4lw">
                                        Youtube
                                    </a>
                                </Footer.SocialShareItem>
                            </Footer.Box>
                        </Footer.SocialShare>
                        <Footer.Payment>
                            <img src={`${prefix}/image/project-management/payment-gatway.png`} alt="content" placeholder="blur" />
                        </Footer.Payment>
                    </Footer.Widgets>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Footer.Box>
            <Footer.Copyright>
            <Footer.CopyrightText><div>©{(new Date().getFullYear())} inweso GmbH. All Rights Reserved.</div></Footer.CopyrightText>
            </Footer.Copyright>
        </Container>
        </Footer>
    )
}