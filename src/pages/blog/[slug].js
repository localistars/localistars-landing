import { useRedirect } from '~lib/redirect';
import i18nConfig from '~next-i18next.config';
import { getFiles } from '~lib/mdx';

const Redirect = () => {
  useRedirect();
  return <></>;
};

export default Redirect;

export async function getStaticPaths() {
  const posts = await getFiles(`locales/${i18nConfig.i18n.defaultLocale}/blog`);

  return {
    paths: posts
      .map((p) =>
        i18nConfig.i18n.locales.map((l) => ({
          params: {
            locale: l,
            slug: p.replace(/\.mdx/, '')
          }
        }))
      )
      .reduce((ret, curr) => {
        ret = ret.concat(curr);
        return ret;
      }, []),
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {}
  };
}