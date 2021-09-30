import React from "react";
import ContactSection from "~sections/contact/ContactOne/ContactSection";
import FooterSection from "~sections/contact/ContactOne/Footer";
import { PageWrapper } from "~components/Core";

export default function contactOne() {
  return (
    <PageWrapper innerPage={true}>
        <ContactSection/>
        <FooterSection/>
    </PageWrapper>
  )
}
