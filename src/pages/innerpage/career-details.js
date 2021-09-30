import React from "react";
import CareerDetailsSection from "~sections/CareerDetails/CareerDetailsSection"
import { PageWrapper } from "~components/Core";
import FooterSection from "~sections/CareerDetails/Footer";
export default function CareerDetails() {
  return (
    <PageWrapper innerPage={true}>
        <CareerDetailsSection/>
        <FooterSection/>
    </PageWrapper>
  )
}
