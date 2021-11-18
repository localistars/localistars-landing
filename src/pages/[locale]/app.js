import React from 'react';
import { PageWrapper } from '~components/Core';
import HeroSection from '~sections/app/Hero';
import HeaderButton from '~sections/app/Header';
import ServicesSection from '~sections/app/Services';
import AboutSection from '~sections/app/About';
import ContentSectionOne from '~sections/app/ContentOne';
import PricingSection from '~sections/app/Pricing';
import TestimonialSection from '~sections/app/Testimonial';
import PromoSection from '~sections/app/Promo';
import CtaSection from '~sections/app/Cta';
import FooterFour from '~sections/app/FooterFour';

const header = {
  headerClasses:
    'site-header site-header--menu-end light-header site-header--sticky',
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton className="d-none d-sm-flex" children="Free SEO Analysis" />
  )
};

export default function HomeApp() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <PricingSection />
      {/*<TestimonialSection />*/}
      <PromoSection />
      <CtaSection />
      <FooterFour />
    </PageWrapper>
  );
}
