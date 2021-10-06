import React from "react";
import { Error } from "~sections/utility";
import { PageWrapper } from "~components/Core";
import FooterSection from "~sections/utility/Footer";

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid:false,
}

export default function errorPage() {
  return (
    <PageWrapper innerPage={true}>
        <Error/>
        <FooterSection/>
    </PageWrapper>
  )
}
