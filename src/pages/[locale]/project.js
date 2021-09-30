import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from '~sections/project/Hero'
import FeatureSection from '~sections/project/Features'
import ContentOne from '~sections/project/ContentOne'
import ContentTwo from '~sections/project/ContentTwo'
// import IntegrationSection from '~sections/project/Integration'
import CtaSection from '~sections/project/Cta'
import FooterTwo from '~sections/project/FooterTwo'
import HeaderButton from '~sections/project/Header'
const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Get Started For Free"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Project() {
  return (
    <PageWrapper headerConfig={header}>
        <HeroSection/>
        <FeatureSection/>
        <ContentOne/>
        <ContentTwo/>
        <CtaSection/> 
        <FooterTwo /> 
        {/* <IntegrationSection/> */}
    </PageWrapper>
  )
}
