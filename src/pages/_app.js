import { Layout } from "~components"
import Router from "next/router";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/react-modal-video/css/modal-video.min.css";
import "~fonts/fontawesome-5/css/all.min.css";
import "~styled/scss/bootstrap.scss";
import "~styled/scss/global.scss";
import { GlobalHeaderProvider , GlobalHeaderContext} from "~context/GlobalHeaderContext";
import { SearchProvider} from "~context/SearchContext";
import { useEffect, useState } from "react";
import Loader from "~components/Preloader";
import { appWithTranslation } from 'next-i18next'
import CookieConsent from 'react-cookie-consent';
import { useAnalytics } from '~lib/analytics';
import Head from 'next/head'
import { useTranslation } from 'next-i18next'


const MyApp = ({ Component, pageProps }) => {

  const { t } = useTranslation('translations')

  const [enabled, enable] = useAnalytics();
  const [loader,setLoader] = useState(false)
  
  useEffect(() => {
    setTimeout(function(){
      setLoader(false);
      // console.log('finished');
    } , 2000);
  }, []);

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoader(true) 
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setTimeout(setLoader(false) , 1000) // set state to pass to loader prop
  };

  if (loader) return <Loader show={loader}/>

  
  
  return (
    <SearchProvider>
      <GlobalHeaderProvider>
        <Layout>
        <Head>
        </Head>
          <Loader show={loader}/>
          <Component {...pageProps} />
          <CookieConsent
            enableDeclineButton
            declineButtonText={t('cookiedecline')}
            location="bottom"
            buttonText={t('cookieaccept')}
            cookieName={process.env.NEXT_PUBLIC_COOKIE_CONSENT_NAME}
            style={{ background: "#165c66" }}
            buttonStyle={{ color: "white", fontSize: "15px", backgroundColor: "#23a432" }}
            declineButtonStyle={{ backgroundColor: "#420d18" }}
            expires={360}
            onAccept={() => enable()}
          >
            {t('cookietext')}{" "}
            
          </CookieConsent>
        </Layout>
      </GlobalHeaderProvider>
    </SearchProvider>
  )
}

const WrappedApp = appWithTranslation(MyApp)

// because we do not use the i18n feature of next.js
export default function RouterEmulatedApp ({ ...props }) {
  props.router.locale = props.router.query.locale
  return <WrappedApp {...props} />
}