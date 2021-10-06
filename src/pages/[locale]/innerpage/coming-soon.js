import React from "react";
import ComingSoonSection  from "~sections/utility/ComingSoon";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid:false,
}

export default function CommingSoon() {
  return (
    <PageWrapper headerConfig={header}>
        <ComingSoonSection/>
    </PageWrapper>
  )
}
