import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/pricing/Header";
import ServiceSection from "~sections/pricing/Service"
import TestimonialSection from "~sections/pricing/Testimonial";
import Cta from "~sections/pricing/Cta";
import FooterTwo from "~sections/index/FooterTwo";
import Head from 'next/head'
import { getStaticPaths, makeStaticProps } from '~lib/getStatic'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton 
      className="d-none d-sm-flex" 
      btnText="Start now"
      btnLink="https://www.localistars.app/login"
    />
  ),
};

export default function HomeApp() {
  return (
    <PageWrapper headerConfig={header}>
      <Head>
        <title>Pricing | localistars  </title>
        <meta name="description" content="Pricing | localistars" />
      </Head>
      <ServiceSection />
      <TestimonialSection />
      <Cta />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
