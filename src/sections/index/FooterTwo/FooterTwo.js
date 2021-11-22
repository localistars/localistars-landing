import React from 'react';
import { Link, LanguageSwitchLink } from '~components';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './style';
import i18nextConfig from '~next-i18next.config';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import prefix from '~lib/prefix';

export default function FooterTwo() {
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  const { t } = useTranslation('translations');

  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img
                      src={`${prefix}/image/logo/logo-black.svg`}
                      alt="content"
                      placeholder="blur"
                      style={{ height: 21 }}
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">{t('footer.desc')}</Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>{t('footer.more')}</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="/privacy">{t('footer.privacy')}</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/terms"> {t('footer.terms')}</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/pricing">{t('footer.pricing')}</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/blog">{t('footer.blog')}</Link>
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
                        );
                      })}
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>{t('footer.contact')}</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          inweso GmbH
                          <br className="d-block" />
                          {t('footer.swiss')} 🇨🇭
                        </span>
                      </Footer.AddressItem>

                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a href="mailto:support@localistars.com">
                          support@localistars.com
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-7">
                  <Footer.Widgets>
                    <Footer.Title>{t('footer.socialTitle')}</Footer.Title>
                    <Footer.Text>{t('footer.socialText')}</Footer.Text>
                    <Footer.SocialShare>
                      <Footer.Box pt="11px" pb="30px">
                        <Footer.SocialShare>
                          <Footer.SocialShareItem>
                            <a href="https://twitter.com/localistars">
                              <i className="fab fa-twitter" />
                            </a>
                          </Footer.SocialShareItem>
                          <Footer.SocialShareItem>
                            <a href="https://www.instagram.com/localistars/">
                              <i className="fab fa-instagram" />
                            </a>
                          </Footer.SocialShareItem>
                          <Footer.SocialShareItem>
                            <a href="https://www.youtube.com/channel/UCOpWH9CMj3t_yswl_uZb4lw">
                              <i className="fab fa-youtube" />
                            </a>
                          </Footer.SocialShareItem>
                        </Footer.SocialShare>
                      </Footer.Box>
                    </Footer.SocialShare>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            <div>
              ©{new Date().getFullYear()} inweso GmbH. {t('footer.rights')}.
            </div>
          </Footer.CopyrightText>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
