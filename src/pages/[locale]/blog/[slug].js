import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
// import components from '~components/MDXComponents';
// import BlogLayout from '~layouts/blog';
import { getFiles, getLocaleFile } from '~lib/mdx';
import { getAllFilesFrontMatter } from '~lib/mdx';
import i18nConfig from '~next-i18next.config';
import MdxBlogDetails from '~sections/Blog/BlogDetails/MdxBlogDetails';
import { PageWrapper } from '~components/Core';
import FooterSection from '~sections/index/FooterTwo';
import Head from 'next/head';
import { getI18nProps } from '~lib/getStatic';

export default function Blog({ code, frontMatter, allPosts, otherPosts }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <PageWrapper>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <MdxBlogDetails
        {...frontMatter}
        mdxComponent={
          <Component
          /*components={components} */
          />
        }
        allPosts={allPosts}
        otherPosts={otherPosts}
      />
      <FooterSection />
    </PageWrapper>
  );

  // return (
  //   <BlogLayout frontMatter={frontMatter}>
  //     <Component
  //       components={components}
  //     />
  //   </BlogLayout>
  // );
}

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
  const currentLocale = ctx?.params?.locale;
  const posts = await getAllFilesFrontMatter(`locales/${currentLocale}/blog`);
  if (currentLocale !== i18nConfig.i18n.defaultLocale) {
    const defaultPosts = await getAllFilesFrontMatter(
      `locales/${i18nConfig.i18n.defaultLocale}/blog`
    );
    if (posts.length < defaultPosts.length) {
      defaultPosts.forEach((dp, i) => {
        if (!posts.find((p) => p.slug === dp.slug)) {
          posts.splice(i, 0, dp);
        }
      });
    }
  }

  return {
    props: {
      ...(await getI18nProps(ctx)),
      // if using markdown
      ...(await getLocaleFile(
        ctx?.params?.locale,
        `blog/${ctx?.params?.slug}`
      )),
      otherPosts: posts.filter((p) => p.slug !== ctx?.params?.slug),
      allPosts: posts
    }
  };
}
