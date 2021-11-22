import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PageWrapper } from '~components/Core';
import HeaderButton from '~sections/pricing/Header';
import TermsStyle from '~sections/utility/TermsCondition/style';
import FooterTwo from '~sections/index/FooterTwo';
import Head from 'next/head';
import getSlug from '~lib/getSlug';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';
import { getMDXComponent } from 'mdx-bundler/client';
import { useTranslation } from 'next-i18next';

export default function Terms({ code, frontMatter, isInRequestedLanguage }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const { t } = useTranslation('translations');

  return (
    <PageWrapper>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <TermsStyle>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
              {!isInRequestedLanguage && <i style={{ color: '#fda931' }}>{t('common.onlyInDefaultLanguage')}</i>}
              <TermsStyle.Box>
                <TermsStyle.Title as="h2">{frontMatter.title}</TermsStyle.Title>
              </TermsStyle.Box>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-xxl-8 col-xl-9 col-lg-10">
              <Component /*components={components}*/ />
            </Col>
          </Row>
        </Container>
      </TermsStyle>
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps({ slug: getSlug(import.meta.url) });
export { getStaticPaths, getStaticProps };
