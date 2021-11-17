import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/pricing/Header";
import PrivacyPolicy from "~sections/utility/PrivacyPolicy";
import FooterTwo from "~sections/index/FooterTwo";
import Head from 'next/head'


import { getStaticPaths, makeStaticProps } from '~lib/getStatic'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton 
    className="d-none d-sm-flex" 
    btnText="Start now"
    btnLink="https://www.localistars.app/login"

    />

  ),
};

export default function Privacy() {
  return (
    <PageWrapper headerConfig={header}>
      <Head>
        <title>Privacy Policy | localistars</title>
        <meta name="description" content="Privacy Policy | localistars" />
      </Head>
      <PrivacyPolicy />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
