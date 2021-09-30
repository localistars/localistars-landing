import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/digital/Hero";
import ServicesSection from "~sections/digital/Services";
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import ContentSectionTwo from "~sections/digital/ContentTwo";
import TeamSection from "~sections/digital/Team";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
import HeaderButton from "~sections/digital/Header";
import FooterSix from "~sections/digital/FooterSix";

const header = {
  headerClasses:
    "site-header site-header--menu-end dark-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton className="d-none d-sm-flex" children="Free SEO Analysis" />
  ),
  darkLogo: false,
};

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <TeamSection />
      <PortfolioSection />
      <PromoSection />
      <FooterSix />
    </PageWrapper>
  );
}
