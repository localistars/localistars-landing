import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/index/Header";
import HeroSection from "~sections/index/Hero";
import AboutSection from "~sections/index/About";
import ServiceSection from "~sections/index/Service"
import FeatureSection from '~sections/index/Features'
import TestimonialSection from "~sections/index/Testimonial";
import PromoSection from "~sections/index/Promo";
import CtaSection from "~sections/index/Cta";
import { Link } from '~components';
import FooterTwo from "~sections/index/FooterTwo";
import Head from 'next/head'


import { getStaticPaths, makeStaticProps } from '~lib/getStatic'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton className="d-none d-sm-flex" children="Login" as={Link} target="_blank" href="https://www.localistars.app/login" />
  ),
};

export default function HomeApp() {
  return (
    <PageWrapper headerConfig={header}>
            <Head>
              <title>Translation company for online translation services</title>
              <meta name="description" content="Translator Test landingpage | localistars" />
            </Head>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <FeatureSection />
      <TestimonialSection />
      <PromoSection />
      <CtaSection />
      <FooterTwo />
    </PageWrapper>
  );
}


const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
