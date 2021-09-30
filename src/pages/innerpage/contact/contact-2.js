import React from "react";
import ContactSection  from "~sections/contact/ContactTwo/ContactSection";
import FooterSection from "~sections/contact/ContactTwo/Footer";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid:false,
}

export default function contactOne() {
  return (
    <PageWrapper innerPage={true}>
        <ContactSection/>
        <FooterSection/>
    </PageWrapper>
  )
}
