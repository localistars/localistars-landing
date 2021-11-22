import React from 'react';
import { PageWrapper } from '~components/Core';
import HeaderButton from '~sections/pricing/Header';
import ServiceSection from '~sections/pricing/Service';
import TestimonialSection from '~sections/pricing/Testimonial';
import Cta from '~sections/pricing/Cta';
import FooterTwo from '~sections/index/FooterTwo';
import Head from 'next/head';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';
import { useTranslation } from 'next-i18next';

export default function HomeApp() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper>
      <Head>
        <title>{t('pricing.meta.title')}</title>
        <meta
          name="description"
          content={t('pricing.meta.description')}
        />
      </Head>
      <ServiceSection />
      {/*<TestimonialSection />*/}
      <Cta />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
