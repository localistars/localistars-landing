import React from 'react';
import { PageWrapper } from '~components/Core';
import HeroSection from '~sections/microtranslate/Hero';
import Process from '~sections/microtranslate/Process';
import FooterTwo from '~sections/index/FooterTwo';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

export default function HomeApp() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper>
      <Head>
        <title>{t('microtranslate.meta.title')}</title>
        <meta
          name="description"
          content={t('microtranslate.meta.description')}
        />
      </Head>
      <HeroSection />
      <Process />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
