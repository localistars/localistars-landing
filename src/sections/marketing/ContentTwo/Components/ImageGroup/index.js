import React from "react"
import Image from "next/image"
import ImageCard from "../ImageCard"
import Images from "./style"
import prefix from '~lib/prefix';

export default function ImageGroup({...rest}) {
  return (
      <Images {...rest}>
        <ImageCard/>
        <Images.One>
          <img src={`${prefix}/image/marketing/l1-contentTwo-shape-1.png`} alt="content One" className="w-100"/>
        </Images.One>
        <Images.Two>
          <img src={`${prefix}/image/marketing/gray-dots.png`} alt="content two" className="w-100"/>
        </Images.Two>
      </Images>
  )
}
