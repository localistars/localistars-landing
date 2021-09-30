import React from "react"
import Image from "next/image"
import ImageCard from "../ImageCard"
import Images from "./style"
import ImageItemOne from "~image/marketing/l1-contentTwo-shape-1.png"
import ImageItemTwo from "~image/marketing/gray-dots.png"
export default function ImageGroup({...rest}) {
  return (
      <Images {...rest}>
        <ImageCard/>
        <Images.One>
          <Image src={ImageItemOne} alt="content One" placeholder="blur"/>
        </Images.One>
        <Images.Two>
          <Image src={ImageItemTwo} placeholder="blur" alt="content two"/>
        </Images.Two>
      </Images>
  )
}
