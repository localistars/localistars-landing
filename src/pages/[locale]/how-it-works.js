import React from 'react';
import { PageWrapper } from '~components/Core';
import HeroSection from '~sections/howitworks/Hero';
import TitleSection from '~sections/howitworks/Title';
import TableSection from '~sections/howitworks/Table';
import VideoSection from '~sections/howitworks/Video';
import FooterTwo from '~sections/index/FooterTwo';
import HeaderButton from '~sections/howitworks/Header';
import Head from 'next/head';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

const header = {
  headerClasses:
    'site-header site-header--menu-end light-header site-header--sticky',
  containerFluid: false,
  buttonBlock: (
    // eslint-disable-next-line react/no-children-prop
    <HeaderButton
      className="d-none d-sm-flex"
      btnText="Start now"
      btnLink="https://www.localistars.app/login"
    />
  )
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <Head>
        <title>How it works | localistars</title>
        <meta name="description" content="How it works | localistars" />
      </Head>
      <HeroSection />
      <TitleSection />
      <TableSection />
      <VideoSection />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
