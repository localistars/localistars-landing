import React from "react";
import { BlogSidebarTwo } from "~sections/Blog";
import FooterSection from "~sections/Blog/Footer";
import { PageWrapper } from "~components/Core";

export default function blogsRightSidebar() {
  return (
    <PageWrapper innerPage={true}>
        <BlogSidebarTwo/>
        <FooterSection/>
    </PageWrapper>
  )
}
