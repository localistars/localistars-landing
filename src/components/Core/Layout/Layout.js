// import React from "react";
import Head from 'next/head';
import favicon from '../../../../public/image/favicon.png';
import previewImage from '../../../../public/image/home-app/hero-l8-1.png';
import Header from '../Header';
import { useRouter } from 'next/router';

const name = 'localistars';
export const siteTitle = 'Translation & language marketplace | localistars';
export const siteDescription = 'Translator | localistars';

export default function Layout({ children }) {
  const router = useRouter();
  const site = 'http://localhost:3000';
  const canonicalURL = site + router.asPath;
  const currentURL = canonicalURL;

  return (
    <>
      <Head>
        {/* Viewport, Favicon */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <link rel="icon" type="image/png" href={favicon.src} />

        {/* Title, Description */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        {/* Canonical, hreflang */}
        <link rel="canonical" href={canonicalURL} />
        <link rel="alternate" hrefLang="en-US" href="/en" />
        <link rel="alternate" hrefLang="de-DE" href="/de" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage.src} key="ogimage" />
        <meta property="og:site_name" content={name} key="ogsitename" />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={siteDescription}
          key="ogdesc"
        />
      </Head>
      <Header />
      {children}
    </>
  );
}
