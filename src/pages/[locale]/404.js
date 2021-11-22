import React from 'react';
import { PageWrapper } from '~components/Core';
import FooterTwo from '~sections/index/FooterTwo';
import { Error } from '~sections/utility';

import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

export default function errorPage() {
  return (
    <PageWrapper>
      <Error />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
