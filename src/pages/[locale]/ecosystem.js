import React from 'react';
import { PageWrapper } from '~components/Core';
import EcosystemSection from '~sections/ecosystem/PortfolioGridTwo';
import BreadCrumb from '~sections/ecosystem/BreadCrumb';
import FooterTwo from '~sections/index/FooterTwo';
import HeaderButton from '~sections/ecosystem/Header';
import Head from 'next/head';

import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

const header = {
  headerClasses:
    'site-header site-header--menu-end light-header site-header--sticky',
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      clasName="ms-auto d-none d-xs-inline-flex"
      btnText="Login"
      btnLink="https://www.localistars.app/login"
      mr="15px"
      mrLG="0"
    />
  )
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <Head>
        <title>Ecosystem | localistars</title>
        <meta name="description" content="Ecosystem | localistars" />
      </Head>

      <BreadCrumb title="Localistars is part of this ecosystem" />
      <EcosystemSection />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
