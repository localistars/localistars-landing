import i18nextConfig from 'next-i18next.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import lngDetector from './lngDetector';

export const useRedirect = (to) => {
  const router = useRouter();
  to = to || router.asPath;

  const { locales, defaultLocale } = i18nextConfig.i18n;
  locales.splice(locales.indexOf(defaultLocale), 1);
  locales.push(defaultLocale);

  // language detection
  useEffect(() => {
    const detectedLng = lngDetector.detect();
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      router.replace('/' + detectedLng + router.route);
      return;
    }

    lngDetector.cache(detectedLng);
    router.replace('/' + detectedLng + to);
  }, []);

  return <></>;
};
