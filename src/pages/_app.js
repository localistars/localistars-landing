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

const MyApp = ({ Component, pageProps }) => {
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
          <Loader show={loader}/>
          <Component {...pageProps} />
          <CookieConsent
            enableDeclineButton
            location="bottom"
            buttonText="Sure man!!"
            cookieName={process.env.NEXT_PUBLIC_COOKIE_CONSENT_NAME}
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={360}
            onAccept={() => enable()}
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
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