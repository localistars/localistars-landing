import React from "react";
import { PageWrapper } from "~components/Core";
import FaqSection from "~sections/pricing-2/Faq";
import PricingSection from "~sections/pricing-2/Pricing";
import FooterSection from "~sections/pricing-2/Footer";

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid:false,
}

export default function PricingTwo() {
  return (
    <PageWrapper innerPageHeader={true} innerPage={true}>
        <PricingSection/>
        <FaqSection/>
        <FooterSection />
    </PageWrapper>
  )
}
