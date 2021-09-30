import React from "react";
import TestimonialTwo from "~sections/testimonial/TestimonialTwo";
import { PageWrapper } from "~components/Core";
import  FooterSection from "~sections/testimonial/Footer";

export default function TestimonialsTwo() {
  return (
    <PageWrapper innerPage={true}>
        <TestimonialTwo/>
        <FooterSection/>
    </PageWrapper>
  )
}
