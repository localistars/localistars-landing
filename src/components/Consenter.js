import Link from '~components/Core/Link';
import CookieConsent from 'react-cookie-consent';
import { useTranslation, Trans } from 'next-i18next';
import { useAnalytics } from '~lib/analytics';

const Consenter = () => {
  const [enabled, enable] = useAnalytics();
  const { t } = useTranslation('translations');

  return (
    <CookieConsent
      enableDeclineButton
      declineButtonText={t('cookie.decline')}
      location="bottom"
      buttonText={t('cookie.accept')}
      cookieName={process.env.NEXT_PUBLIC_COOKIE_CONSENT_NAME}
      style={{ background: '#165c66' }}
      buttonStyle={{
        color: 'white',
        fontSize: '15px',
        backgroundColor: '#23a432'
      }}
      declineButtonStyle={{ backgroundColor: '#420d18' }}
      expires={360}
      onAccept={() => enable()}
    >
      <Trans i18nKey="cookie.text">
        This website uses cookies to enhance the user experience.
        <Link to="/privacy">learn more</Link>
      </Trans>
    </CookieConsent>
  )
};

export default Consenter;
