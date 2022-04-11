import { useRedirect } from '~lib/redirect';
import i18nConfig from '~next-i18next.config';
import { getFiles, getLocaleFile } from '~lib/mdx';
import Head from 'next/head';

export default function Redirect({ frontMatter }) {
  useRedirect();
  return (
    <Head>
      <title>{frontMatter.title}</title>
      <meta name="description" content={frontMatter.description} />
      {/* Open Graph */}
      <meta property="og:image" content={frontMatter.image} key="ogimage" />
      <meta property="og:title" content={frontMatter.title} key="ogtitle" />
      <meta
        property="og:description"
        content={frontMatter.description}
        key="ogdesc"
      />
    </Head>
  );
};

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

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await getLocaleFile(
        i18nConfig.i18n.defaultLocale,
        `blog/${ctx?.params?.slug}`
      ))
    }
  };
}