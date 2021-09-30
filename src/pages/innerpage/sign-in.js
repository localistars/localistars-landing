import React from "react";
import SignIn  from "~sections/Account/SignIn";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid:false,
}

export default function SignInPage() {
  return (
    <PageWrapper headerConfig={header}>
        <SignIn/>
    </PageWrapper>
  )
}
