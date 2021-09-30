import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioDetailsSection from '~sections/portfolio-details/PortfolioDetailsTwo/PortfolioDetails'
import PortfolioGridSection from '~sections/portfolio-details/PortfolioDetailsTwo/ProtfoliGrid'
import PromoSection from '~sections/portfolio-details/PortfolioDetailsTwo/PortfolioPromo'
import FooterSection from '~sections/portfolio-details/PortfolioDetailsOne/Footer'


export default function portfolioDetailsTwo() {
  return (
    <PageWrapper innerPage={true}>
      <PortfolioDetailsSection/>
      <PortfolioGridSection/>
      <PromoSection/>
      <FooterSection/>
    </PageWrapper>
  )
}
