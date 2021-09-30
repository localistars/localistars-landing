import { useMemo } from 'react';
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import FeatureSection from "~sections/marketing/Features"
import ContentSectionOne from "~sections/marketing/ContentOne"
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import { getMDXComponent } from 'mdx-bundler/client';
import { getStaticPaths, getI18nProps } from '~lib/getStatic'
import getSlug from '~lib/getSlug'
import { hasCookieConsent } from '~lib/analytics';
// import components from '~components/MDXComponents';
import { Col, Container, Row } from "react-bootstrap";
import Details from "~sections/Blog/BlogDetails/style";

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Get started"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function MDXTest({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <PageWrapper headerConfig={header}>
      <Details backgroundColor="#f9fafc">
        <Details.Box pb="60px" pbMD="80px" pbLG="130px">
          <Container>
            <Row className="justify-content-center">
              <Component /*components={components}*/ />
              <hr />
              {hasCookieConsent() && (
                <iframe
                  width="640"
                  height="360"
                  src="https://www.youtube-nocookie.com/embed/YQryHo1iHb8?rel=0&controls=0&showinfo=0"
                  frameBorder="0"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                />
              )}
              {!hasCookieConsent() && (
                <a href="https://youtu.be/YQryHo1iHb8" >watch video</a>
              )}
            </Row>
          </Container>
        </Details.Box>
      </Details>
      <FooterOne/>
    </PageWrapper>
  )
}


export async function getStaticProps(ctx) {
  return {
    props: {
      ... await getI18nProps(ctx, { slug: getSlug(import.meta.url) })
    }
  };
}

export { getStaticPaths }
