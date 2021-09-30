import React from "react"
import Image from "next/image"
import ImageGroup from "./style"
import featureImage from "~image/project-management/l2-feature-img-1.png"
import FeatureImageShape from "~image/project-management/l2-feature-shape.png"
const FeatureImages = ({ mainImage }) => {
  return (
    <>
      <ImageGroup>
        <div className="main">
        <Image
          src={featureImage}
          placeholder="blur"
          alt="feature tab"
        />
        </div>

        <div className="shape">
          <Image
            src={FeatureImageShape}
            placeholder="blur"
            alt="shape"
          />
        </div>
      </ImageGroup>
    </>
  )
}

export default FeatureImages
