import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from '~sections/services/Hero'
import ServicesSection from '~sections/services/Services'
import AboutSection from '~sections/services/About'
import ContentSectionOne from '~sections/services/ContentOne'
import ProcessSection from '~sections/services/Process'
import PromoSection from '~sections/services/Promo'
import PricingSection from '~sections/services/Pricing'
import TestimonialSection from '~sections/services/Testimonial'
import ContactSection from '~sections/services/Contact'
import FooterFour from '~sections/services/FooterFour'
import HeaderButton from '~sections/services/Header'

const header = {
  headerClasses: "site-header site-header--menu-center site-header--services dark-header site-header--sticky site-header--service",
  containerFluid:false,
  darkLogo:false,
  buttonBlock: (
    <HeaderButton className="ms-auto d-none d-xs-inline-flex" btnText="Purchase" mr="15px" mrLG="0"/>
  ),
}

export default function Services() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <ContentSectionOne/>
      <ProcessSection/>
      <PromoSection/>
      <PricingSection/>
      <TestimonialSection/>
      <ContactSection/>
      <FooterFour/>
    </PageWrapper>
  )
}
