import React from "react";
import TestimonialOne from "~sections/testimonial/TestimonialOne";
import { PageWrapper } from "~components/Core";
import  FooterSection from "~sections/testimonial/Footer";

export default function TestimonialsOne() {
  return (
    <PageWrapper innerPage={true}>
        <TestimonialOne/>
        <FooterSection/>
    </PageWrapper>
  )
}
