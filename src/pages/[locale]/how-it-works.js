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
import { useTranslation } from 'next-i18next';

export default function Agency() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper>
      <Head>
        <title>{t('how.meta.title')}</title>
        <meta
          name="description"
          content={t('how.meta.description')}
        />
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
