import React from "react";
import { Error } from "~sections/utility";
import { PageWrapper } from "~components/Core";
import FooterTwo from "~sections/index/FooterTwo";

// const header = {
//   headerClasses: "site-header site-header--menu-start light-header",
//   containerFluid:false,
// }

export default function errorPage() {
  return (
    <PageWrapper innerPage={true}>
        <Error/>
        <FooterTwo />
    </PageWrapper>
  )
}

