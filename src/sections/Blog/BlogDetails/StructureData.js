import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Details from "./style";
import Image from "next/image";
import Sidebar from "~sections/Common/Sidebar";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'


export default function StructureData({headline, img, date, modified}) {

  

  return (

    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                 "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": {headline},
      "image": {img},  
      "author": {
        "@type": "Organization",
        "name": "localistars"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "inweso GmbH",
        "logo": {
          "@type": "ImageObject",
          "url": "/image/inweso.png"
        }
      },
      "datePublished": {date},
      "dateModified": {modified},
              })
           }}
      />
    </>

    
  );
}
