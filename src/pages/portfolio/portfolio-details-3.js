import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioDetailsSection from '~sections/portfolio-details/PortfolioDetailsThree/PortfolioDetails'
import PromoSection from '~sections/portfolio-details/PortfolioDetailsThree/PortfolioPromo'
import FooterSection from '~sections/portfolio-details/PortfolioDetailsOne/Footer'

export default function portfolioDetailsThree() {
  return (
    <PageWrapper innerPage={true}>
      <PortfolioDetailsSection/>
      <PromoSection/>
      <FooterSection/>
    </PageWrapper>
  )
}
