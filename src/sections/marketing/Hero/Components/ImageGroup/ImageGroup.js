import React from "react"
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup>
        <HeroImageGroup.Inner>
            <img
              src="/image/marketing/l1-hero-img-ipad.png"
              className="welcome-image--group-01__main"
              alt="hero image main"
            />
            <div className=" welcome-image--group-01__img-1">
              <img
                src="/image/marketing/l1-hero-img-1.png"
                className="w-100"
                alt="hero image"
                
              />
            </div>
            <div className=" welcome-image--group-01__img-2">
          <img
              src="/image/marketing/l1-hero-img-2.png"
              className="w-100"
              alt="hero image"
              
            />
          </div>
          <div className=" welcome-image--group-01__img-3">
          <img
              src="/image/marketing/l1-hero-img-3.png"
              className="w-100"
              alt="hero image"
              
            />
          </div>
          <div className=" welcome-image--group-01__img-4">
            <img
              src="/image/marketing/hero-dots.png"
              className="w-100"
              alt="hero image"
              
            />
          </div>
          <div className="welcome-image--group-01__img-5">
            <img
                src="/image/marketing/l1-hero-shape-1.png"
                className="w-100"
                alt="hero image"
                
              />
          </div>
          <div className=" welcome-image--group-01__img-6">
              <img
                src="/image/marketing/l1-hero-shape-2.png"
                className="w-100"
                alt="hero image"
                
              />
          </div>
          <div className=" welcome-image--group-01__img-7">
              <img
                src="/image/marketing/l1-hero-shape-3.png"
                className="w-100"
                alt="hero image"
                
              />
          </div> 
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
