import React from "react"
import ImageGroup from "./style"
const FeatureImages = ({ mainImage }) => {
  return (
    <>
      <ImageGroup>
        <div className="main">
        <img
          src="/image/index/locize-localistars.gif"
          alt="feature tab"
          className="w-100"
        />
        </div>

        <div className="shape">
          <img
            src="/image/index/l2-feature-shape.png"
            alt="shape"
          />
        </div>
      </ImageGroup>
    </>
  )
}

export default FeatureImages
