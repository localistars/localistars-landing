import Image from "next/image"
import React from "react"
import ImageCard from "../ImageCard"
import Images from "./style"
import imageOne from "~image/marketing/l1-contentOne-img-woman.png"
import imageTwo from "~image/marketing/purple-dots.png"
import imageThree from "~image/marketing/l1-contentOne-shape-1.png"
import imageFour from "~image/marketing/l1-contentOne-shape-2.png"
export default function ImageGroup({...rest}) {
  return (
    <>
      <Images {...rest}>
        {/* Content Image */}
        <Image
          
          alt="content image"
          src={imageOne}
          placeholder="blur"
        />
        {/* Content Image */}
        <Images.One>
          <Image
            
            alt="content image"
            src={imageTwo}
            placeholder="blur"
          />
        </Images.One>
        {/* Content Image */}
        <Images.Two>
          <Image
            alt="content image"
            src={imageThree}
            placeholder="blur"
          />
        </Images.Two>
        {/* Content Image */}
        <Images.Three>
          <Image
            src={imageFour}
            alt="content image"
            placeholder="blur"
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


