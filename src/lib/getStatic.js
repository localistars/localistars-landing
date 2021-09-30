import { getLocaleFile } from './mdx';
import { getI18nPaths } from './getI18nPaths'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nextConfig from '~next-i18next.config' // used as current next-i18next workaround for next.js > v10.2

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getI18nProps(ctx, { slug, ns = ['translations'] } = {}) {
  const locale = ctx?.params?.locale
  let props = {
    // if using i18next here in react code
    ...await serverSideTranslations(locale, ns, i18nextConfig),
  }
  if (slug) { // if using markdown
    props = { ...props, ...await getLocaleFile(locale, slug) }
  }
  return props
}

export function makeStaticProps({ slug, ns } = {}) {
  return async function getStaticProps(ctx) {
    return getI18nProps(ctx, { slug, ns })
  };
}