import React from "react"
import ImageCard from "../ImageCard"
import Images from "./style"
export default function ImageGroup({...rest}) {
  return (
    <>
      <Images {...rest}>
        {/* Content Image */}
        <img
          alt="content image"
          src="/image/marketing/l1-contentOne-img-woman.png"
          className="w-100"
        />
        {/* Content Image */}
        <Images.One>
          <img
            alt="content image"
            src="/image/marketing/purple-dots.png"
            className="w-100"
          />
        </Images.One>
        {/* Content Image */}
        <Images.Two>
          <img
            alt="content image"
            src="/image/marketing/l1-contentOne-shape-1.png"
            className="w-100"
            placeholder="blur"
          />
        </Images.Two>
        {/* Content Image */}
        <Images.Three>
          <img
            src="/image/marketing/l1-contentOne-shape-2.png"
            className="w-100"
            alt="content image"
          />
        </Images.Three>
        {/* Content Image */}
        <Images.Four>
          <ImageCard backgroundColor="#ff5722"/>
        </Images.Four>
      </Images>
    </>
  )
}


