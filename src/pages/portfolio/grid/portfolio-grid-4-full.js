import React from "react";
import BreadCrumbSection from "~sections/portfolios/PortfolioGrid/BreadCrumb";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "~sections/portfolios/PortfolioGrid/PortfolioGridFour"
import FooterSection from "~sections/portfolios/PortfolioGrid/Footer";

export default function portFolioMasonaryThreeNoGap() {
  return (
    <PageWrapper innerPage={true}>
        <BreadCrumbSection title="Portfolio Style 06" text="Our focus is always on finding the best people to work with. Our
bar is high, but you look ready to take on the challenge."/>
        <PortfolioSection background="#f3f4f6" containerFluid={true} gutters={true}/>
        <FooterSection/>
    </PageWrapper>
  )
}
