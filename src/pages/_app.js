import { Layout } from '~components';
import Router from 'next/router';
import 'node_modules/slick-carousel/slick/slick.css';
import 'node_modules/react-modal-video/css/modal-video.min.css';
import '~fonts/fontawesome-5/css/all.min.css';
import '~styled/scss/bootstrap.scss';
import '~styled/scss/global.scss';
import '~styled/scss/custom.scss';
import {
  GlobalHeaderProvider,
  GlobalHeaderContext
} from '~context/GlobalHeaderContext';
import { SearchProvider } from '~context/SearchContext';
import { useEffect, useState } from 'react';
import Loader from '~components/Preloader';
import Consenter from '~components/Consenter'
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp as MySVG } from 'react-icons/fi';

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setLoader(false);
  //     // console.log('finished');
  //   }, 2000);
  // }, []);

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoader(true);
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setLoader(false);
    // setTimeout(setLoader(false), 1000); // set state to pass to loader prop
  };

  if (loader) return <Loader show={loader} />;

  return (
    <SearchProvider>
      <GlobalHeaderProvider>
        <Layout>
          <Head></Head>
          <Loader show={loader} />
          <Component {...pageProps} />
          <Consenter />
          <ScrollToTop
            smooth
            style={{
              backgroundColor: '#fff',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              border: '1px solid #165c66'
            }}
            component={
              <MySVG style={{ color: '#165c66', fontSize: '1.2rem' }} />
            }
          ></ScrollToTop>
        </Layout>
      </GlobalHeaderProvider>
    </SearchProvider>
  );
};

export default appWithTranslation(MyApp)
