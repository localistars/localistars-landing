import React from "react";
import { PageWrapper } from "~components/Core";
import SearchSection from "~sections/utility/Faq/SearchSection";
import FaqSection from "~sections/utility/Faq/FaqSection";
import FooterSection from "~sections/utility/Faq/Footer";
const header = {
  headerClasses: "site-header site-header--menu-start light-header d-none",
  containerFluid:false,
}


export default function FaqPage() {
  return (
    <PageWrapper innerPage={true}>
      <SearchSection/>
      <FaqSection/>
      <FooterSection/>
    </PageWrapper>
  )
}
