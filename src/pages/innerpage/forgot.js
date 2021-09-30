import React from "react";
import ResetSection from "~sections/Account/ResetPassword";
import { PageWrapper } from "~components/Core";

const header = {
    headerClasses: "d-none",
    containerFluid:false,
  }
  

export default function ResetPassword() {
  return (
    <PageWrapper headerConfig={header}>
        <ResetSection/>
    </PageWrapper>
  )
}
