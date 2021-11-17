import { BlogRegular } from "~sections/Blog";
import FooterSection from "~sections/index/FooterTwo";
import { PageWrapper } from "~components/Core";
import { getAllFilesFrontMatter } from '~lib/mdx';
import { getStaticPaths, getI18nProps } from '~lib/getStatic'
import Head from 'next/head'
import i18nextConfig from 'next-i18next.config'

export default function BlogsReqular({ posts }) {
  return (
    <PageWrapper innerPage={true}>
      <Head>
        <title>Translation Blog | localistars</title>
        <meta name="description" content="Translation Blog | localistars" />
      </Head>
      <BlogRegular posts={posts} />
      <FooterSection />
    </PageWrapper>
  );
}

export { getStaticPaths };

export async function getStaticProps(ctx) {
  const currentLocale = ctx?.params?.locale
  const posts = await getAllFilesFrontMatter(`locales/${currentLocale}/blog`);
  if (currentLocale !== i18nextConfig.i18n.defaultLocale) {
    const defaultPosts = await getAllFilesFrontMatter(`locales/${i18nextConfig.i18n.defaultLocale}/blog`);
    if (posts.length < defaultPosts.length) {
      defaultPosts.forEach((dp, i) => {
        if (!posts.find((p) => p.slug === dp.slug)) {
          posts.splice(i, 0, dp);
        }
      })
    }
  }
  return {
      props: {
        ...await getI18nProps(ctx),
        posts: posts.map((p) => {
          p.locale = currentLocale
          return p
        })
      }
  }
}