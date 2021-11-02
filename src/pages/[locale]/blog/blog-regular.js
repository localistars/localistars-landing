import React from "react";
import { BlogRegular } from "~sections/Blog";
import FooterSection from "~sections/index/FooterTwo";
import { PageWrapper } from "~components/Core";

export default function blogsRequler() {
  return (
    <PageWrapper innerPage={true}>
      <BlogRegular />
      <FooterSection />
    </PageWrapper>
  );
}
