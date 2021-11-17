import React, { useMemo } from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/pricing/Header";
import CCPAStyle from "~sections/utility/CCPA/style";
import { Col, Container, Row } from 'react-bootstrap'
import FooterTwo from "~sections/index/FooterTwo";
import Head from 'next/head'
import getSlug from '~lib/getSlug'
import { getStaticPaths, makeStaticProps } from '~lib/getStatic'
import { getMDXComponent } from 'mdx-bundler/client';

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

export default function CCPA({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  
  return (
    <PageWrapper headerConfig={header}>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <CCPAStyle>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
              <CCPAStyle.Box>
                <CCPAStyle.Title as="h2">{frontMatter.title}</CCPAStyle.Title>
              </CCPAStyle.Box>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-xxl-8 col-xl-9 col-lg-10">
              <Component /*components={components}*/ />
            </Col>
          </Row>
        </Container>
      </CCPAStyle>
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps({ slug: getSlug(import.meta.url) })
export { getStaticPaths, getStaticProps }