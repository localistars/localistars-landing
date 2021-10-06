import React from "react";
import BlogDetails from "~sections/Blog/BlogDetails";
import { PageWrapper } from "~components/Core";
import FooterSection from "~sections/Blog/Footer";

export default function blogsDetails() {
  return (
    <PageWrapper innerPage={true}>
        <BlogDetails/>
        <FooterSection/>
    </PageWrapper>
  )
}
