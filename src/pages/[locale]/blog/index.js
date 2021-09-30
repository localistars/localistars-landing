import { BlogSidebarTwo } from "~sections/Blog";
import FooterSection from "~sections/Blog/Footer";
import { PageWrapper } from "~components/Core";

import { getAllFilesFrontMatter } from '~lib/mdx';
import { getStaticPaths } from '~lib/getStatic'

export default function BlogsReqular({ posts }) {
  return (
    <PageWrapper innerPage={true}>
      <BlogSidebarTwo posts={posts} />
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