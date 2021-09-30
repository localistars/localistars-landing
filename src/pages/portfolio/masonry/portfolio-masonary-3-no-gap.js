import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "~sections/portfolios/PortfolioMasonary/PortfolioMasonaryThree"
import FooterSection from "~sections/portfolios/PortfolioMasonary/Footer";
const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid:false,
}

export default function portFolioMasonaryThreeNoGap() {
  return (
    <PageWrapper innerPageHeader={true}>
        <PortfolioSection />
        <FooterSection/>
    </PageWrapper>
  )
}
