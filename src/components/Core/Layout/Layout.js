// import React from "react";
import Head  from "next/head";
import favicon from '../../../../public/image/favicon.png';
import Header from "../Header";
export default function Layout({
  children,
}) {
  return (
    <>
      <Head>
            <title>Fastland Next Landing Template</title>
            <link rel="icon" type="image/png" href={favicon.src} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"/>
      </Head>
        <Header/>
      {children}
    </>
  )
}
