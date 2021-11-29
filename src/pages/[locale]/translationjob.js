import React from 'react';
import { PageWrapper } from '~components/Core';
import HeaderButton from '~sections/translationjobs/Header';
import HeroSection from '~sections/translationjobs/Hero';
import Services2 from '~sections/translationjobs/ServicesTwo';
import ServiceSection from '~sections/translationjobs/Service';
import FeatureSection from '~sections/translationjobs/Features';
import Process from '~sections/translationjobs/Process';
import CtaSection from '~sections/translationjobs/CtaSpecial';
import FooterTwo from '~sections/index/FooterTwo';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

export default function HomeApp() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper headerConfig={{
      headerClasses:
        'site-header site-header--menu-center site-header--services dark-header site-header--sticky site-header--service',
      containerFluid: false,
      darkLogo: false,
      buttonBlock: (
        <HeaderButton
          className="ms-auto d-none d-xs-inline-flex"
          btnLink="https://www.localistars.app/register"
          btnText={t('common.header')}
          mr="15px"
          mrLG="0"
        />
      )
    }}>
      <Head>
        <title>{t('creator.meta.title')}</title>
        <meta
          name="description"
          content={t('creator.meta.description')}
        />
      </Head>
      <HeroSection />
      <Services2 />
      <ServiceSection />
      <FeatureSection />
      <Process />
      <CtaSection />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
