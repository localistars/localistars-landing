import React from "react";
import { BlogSidebarOne } from "~sections/Blog";
import FooterSection from "~sections/Blog/Footer";
import { PageWrapper } from "~components/Core";

export default function blogsLeftSidebar() {
  return (
    <PageWrapper innerPage={true}>
        <BlogSidebarOne/>
        <FooterSection/>
    </PageWrapper>
  )
}
