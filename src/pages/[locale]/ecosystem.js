import React from "react";
import { PageWrapper } from "~components/Core";
import EcosystemSection from "~sections/ecosystem/PortfolioGridTwo";
import BreadCrumb from "~sections/ecosystem/BreadCrumb";
import FooterTwo from "~sections/index/FooterTwo";
import HeaderButton from "~sections/ecosystem/Header";

import { getStaticPaths, getI18nProps } from '~lib/getStatic'
import getSlug from '~lib/getSlug'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      clasName="ms-auto d-none d-xs-inline-flex"
      btnText="Find a translator"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
    <BreadCrumb title="Localistars is part of this ecosystem" />
      <EcosystemSection />
     
      <FooterTwo />
    </PageWrapper>
  );
}


export async function getStaticProps(ctx) {
  return {
    props: {
      ... await getI18nProps(ctx)
    }
  };
}

export { getStaticPaths }
