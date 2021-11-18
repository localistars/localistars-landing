import languageDetector from '~lib/languageDetector';
// import i18nextConfig from '~next-i18next.config'
import { useRouter } from 'next/router';
import Link from './';

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      to={href}
      skipLocaleHandling
      onClick={() => languageDetector.cacheUserLanguage(locale)}
    >
      {locale}
    </Link>
  );
};

export default LanguageSwitchLink;
