import { BlogRegular } from "~sections/Blog";
import FooterSection from "~sections/index/FooterTwo";
import { PageWrapper } from "~components/Core";
import { getAllFilesFrontMatter } from '~lib/mdx';
import { getStaticPaths } from '~lib/getStatic'
import Head from 'next/head'


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
  const posts = await getAllFilesFrontMatter(`locales/${ctx?.params?.locale}/blog`);
  return {
      props: {
        posts: posts.map((p) => {
          p.locale = ctx?.params?.locale
          return p
        })
      }
  }
}