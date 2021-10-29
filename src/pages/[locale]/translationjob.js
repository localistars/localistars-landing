import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/translationjobs/Header";
import HeroSection from "~sections/translationjobs/Hero";
import Services2 from "~sections/translationjobs/ServicesTwo";
import ServiceSection from "~sections/translationjobs/Service"
import FeatureSection from '~sections/translationjobs/Features'
import Process from "~sections/translationjobs/Process";
import CtaSection from "~sections/translationjobs/CtaSpecial";
import FooterTwo from "~sections/index/FooterTwo";

import { getStaticPaths, makeStaticProps } from '~lib/getStatic'

const header = {
  headerClasses: "site-header site-header--menu-center site-header--services dark-header site-header--sticky site-header--service",
  containerFluid:false,
  darkLogo:false,
  buttonBlock: (
    <HeaderButton 
    className="ms-auto d-none d-xs-inline-flex" 
    btnLink="https://www.localistars.app/login" 
    btnText="Find a translation job" mr="15px"
    mrLG="0"/>
  ),
}

export default function HomeApp() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <Services2 />
      <ServiceSection />
      <FeatureSection />
      <Process />
      <CtaSection />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
