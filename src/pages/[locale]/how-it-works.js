import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/howitworks/Hero";
import TitleSection from "~sections/howitworks/Title";
import TableSection from "~sections/howitworks/Table";
import VideoSection from "~sections/howitworks/Video";
import FooterTwo from "~sections/index/FooterTwo";
import HeaderButton from "~sections/howitworks/Header";

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton 
    className="d-none d-sm-flex" 
    btnText="Start now"
    btnLink="https://www.localistars.app/login" />
  ),
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
     
      <TitleSection />
      <TableSection />
      <VideoSection />


      <FooterTwo />


    </PageWrapper>
  );
}
