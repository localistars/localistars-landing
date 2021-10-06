import React from "react";
import BreadCrumbSection from "~sections/Careers/BreadCrumb";
import AboutSection from "~sections/Careers/About";
import ServiceSection from "~sections/Careers/Services";
import JobSection from "~sections/Careers/Job";
import FooterSection from "~sections/Careers/Footer";
import { PageWrapper } from "~components/Core";

export default function Career() {
  return (
    <PageWrapper innerPage={true}>
      <BreadCrumbSection
        title="Career with Fastland"
        text="Our focus is always on finding the best people to work with. Our<br class='d-none d-xs-block d-sm-none d-md-block'/>
bar is high, but you look ready to take on the challenge."
      />
      <AboutSection />
      <ServiceSection />
      <JobSection />
      <FooterSection />
    </PageWrapper>
  );
}
