import React from "react";
import { PageWrapper } from "~components/Core";
import TestimonialSection from "~sections/pricing-1/Testimonial";
import PricingSection from "~sections/pricing-1/Pricing";
import FooterSection from "~sections/pricing-1/Footer";

export default function pricingOne() {
  return (
    <PageWrapper innerPage={true}>
    <PricingSection/>
    <TestimonialSection/>
    <FooterSection/>
    </PageWrapper>
  )
}
