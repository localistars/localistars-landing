import React from "react"
import Image from 'next/image';
import heroImage from "~image/marketing/l1-hero-img-ipad.png"
import heroImageTwo from "~image/marketing/l1-hero-img-1.png"
import heroImageThree from "~image/marketing/l1-hero-img-2.png"
import heroImageFour from "~image/marketing/l1-hero-img-3.png"
import heroImageShape from "~image/marketing/l1-hero-shape-1.png"
import heroImageShapeTwo from "~image/marketing/l1-hero-shape-2.png"
import heroImageShapeThree from "~image/marketing/l1-hero-shape-3.png"
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup>
        <HeroImageGroup.Inner>
            <Image
              src={heroImage}
              className="welcome-image--group-01__main"
              layout="responsive"
              alt="hero image main"
              placeholder="blur"
            />
            <div className=" welcome-image--group-01__img-1">
              <Image
                src={heroImageTwo}
                layout="responsive"
                alt="hero image"
                placeholder="blur"
              />
            </div>
            <div className=" welcome-image--group-01__img-2">
          <Image
              src={heroImageThree}
              layout="responsive"
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className=" welcome-image--group-01__img-3">
          <Image
              src={heroImageFour}
              layout="responsive"
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className=" welcome-image--group-01__img-4">
            <Image
              src={heroImageFour}
              layout="responsive"
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className="welcome-image--group-01__img-5">
            <Image
                src={heroImageShape}
                layout="responsive"
                alt="hero image"
                placeholder="blur"
              />
          </div>
          <div className=" welcome-image--group-01__img-6">
              <Image
                src={heroImageShapeTwo}
                layout="responsive"
                alt="hero image"
                placeholder="blur"
              />
          </div>
          <div className=" welcome-image--group-01__img-7">
              <Image
                src={heroImageShapeThree}
                layout="responsive"
                alt="hero image"
                placeholder="blur"
              />
          </div> 
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
