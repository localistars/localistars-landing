import languageDetector from './languageDetector'
import i18nextConfig from 'next-i18next.config'

export default languageDetector({ supportedLng: i18nextConfig.i18n.locales, fallbackLng: i18nextConfig.i18n.defaultLocale })