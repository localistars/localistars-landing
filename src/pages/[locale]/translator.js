import React from 'react';
import { PageWrapper } from '~components/Core';
import HeroSection1 from '~sections/translator/Hero1';
import ServicesSection from '~sections/translator/Services';
import ManageSection from '~sections/translator/Manage';
import AboutSection1 from '~sections/translator/About1';
import CtaSection from '~sections/translator/Cta';
import Process from '~sections/translator/Process';
import ContentOne from '~sections/translator/ContentOne';
import FooterTwo from '~sections/index/FooterTwo';
import HeaderButton from '~sections/translator/Header';
import Head from 'next/head';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';
import { useTranslation } from 'next-i18next';

export default function Agency() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper>
      <Head>
        <title>{t('consumer.meta.title')}</title>
        <meta
          name="description"
          content={t('consumer.meta.description')}
        />
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

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
