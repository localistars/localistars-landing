import React from "react";
import SignUp  from "~sections/Account/SignUp";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid:false,
}

export default function SignUpPage() {
  return (
    <PageWrapper headerConfig={header}>
        <SignUp/>
    </PageWrapper>
  )
}
