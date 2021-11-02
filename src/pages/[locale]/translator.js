import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection1 from "~sections/translator/Hero1";
import ServicesSection from "~sections/translator/Services";
import ManageSection from "~sections/translator/Manage";
import AboutSection1 from "~sections/translator/About1";
import CtaSection from "~sections/translator/Cta";
import Process from "~sections/translator/Process";
import ContentOne from "~sections/translator/ContentOne";
import FooterTwo from "~sections/index/FooterTwo";
import HeaderButton from "~sections/translator/Header";
import { Link } from '~components';
import Head from 'next/head'
import { getStaticPaths, makeStaticProps } from '~lib/getStatic'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Start now"
      mr="15px"
      mrLG="0" 
      btnLink="https://www.localistars.app/login"
    />
  ),
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
            <Head>
              <title>Translator Landingpage | localistars</title>
              <meta name="description" content="Translator Test landingpage | localistars" />
            </Head>
      <HeroSection1 />
      <ServicesSection />
      <ContentOne />
      <ManageSection />
      <AboutSection1 />
      <Process />
      <CtaSection />
      <FooterTwo />
    </PageWrapper>
  );
}


const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
