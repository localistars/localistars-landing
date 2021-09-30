import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/agency/Hero";
import ServicesSection from "~sections/agency/Services";
import AboutSection from "~sections/agency/About";
import ContentSectionOne from "~sections/agency/ContentOne";
import PricingSection from "~sections/agency/Pricing";
import TestimonialSection from "~sections/agency/Testimonial";
import CtaSection from "~sections/agency/Cta";
import FooterFive from "~sections/agency/FooterFive";
import HeaderButton from "~sections/agency/Header";

const header = {
  headerClasses:
    "site-header site-header--menu-end dark-header site-header--sticky",
  containerFluid: false,
  darkLogo: false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Purchase"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <FooterFive />
    </PageWrapper>
  );
}
