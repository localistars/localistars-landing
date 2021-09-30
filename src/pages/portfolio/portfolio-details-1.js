import React from "react";
import PortfolioDetailsSection from '~sections/portfolio-details/PortfolioDetailsOne/PortfolioDetails'
import PortfolioGridSection from '~sections/portfolio-details/PortfolioDetailsOne/ProtfoliGrid'
import PromoSection from '~sections/portfolio-details/PortfolioDetailsOne/PortfolioPromo'
import FooterSection from '~sections/portfolio-details/PortfolioDetailsOne/Footer'
import { PageWrapper } from "~components/Core";


export default function portfolioDetailsOne() {
  return (
    <PageWrapper innerPage={true}>
        <PortfolioDetailsSection/>
        <PortfolioGridSection/>
        <PromoSection/>
        <FooterSection/>
    </PageWrapper>
  )
}
