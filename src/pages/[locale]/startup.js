import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/startup/Hero";
import ServicesSectionOne from "~sections/startup/ServicesOne";
import ServicesSectionTwo from "~sections/startup/ServicesTwo";
import AboutSection from "~sections/startup/About";
import ProcessSection from "~sections/startup/Process";
import ProtfolioSection from "~sections/startup/Portfolio";
import TestimonialSection from "~sections/startup/Testimonial";
import BlogSection from "~sections/startup/Blog";
import PromoSection from "~sections/startup/Promo";
import HeaderButton from "~sections/startup/Header";
import FooterFourDark from "~sections/startup/FooterFourDark";

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--with-border position-relative site-header--startup",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Purchase"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Startup() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <AboutSection />
      <ProcessSection />
      <ProtfolioSection />
      <TestimonialSection />
      <BlogSection />
      <PromoSection />
      <FooterFourDark />
    </PageWrapper>
  );
}
