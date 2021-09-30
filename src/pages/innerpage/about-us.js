import React from "react";
import { PageWrapper } from "~components/Core";
import BreadCrumbSection from "~sections/about/BreadCrumb";
import AboutSection from '~sections/about/about'
import FeatureSection from '~sections/about/Feature'
import ContentSection from '~sections/about/Content'
import TeamSection from '~sections/about/Team'
import PromoSection from '~sections/about/Promo'
import FooterSection from "~sections/about/Footer";

export default function About() {
  return (
    <PageWrapper innerPage={true}>
        <BreadCrumbSection title="About" text="Our focus is always on finding the best people to work with. Our <br class='d-none d-md-block'/>
bar is high, but you look ready to take on the challenge."/>
        <AboutSection/>
        <FeatureSection/>
        <ContentSection/>
        <TeamSection/>
        <PromoSection/>
        <FooterSection/>
    </PageWrapper>
  )
}
