import React from "react"
import Image from "next/image"
import Widget from './style'
export default function TestimonialWidget({ text, name, position, image, reviewStar }) {
  return (
    <Widget>
      {reviewStar && reviewStar <= 5 ? (
        <Widget.Rating pb="15px">
          {Array.from(Array(reviewStar), (_, index) => {
            return (
              <Widget.RatingSingle active={true} key={index + "rws"}>
                <i className="fa fa-star" />
              </Widget.RatingSingle>
            )
          })}
          {Array.from(Array(5 - reviewStar), (_, index) => {
            return (
              <Widget.RatingSingle key={index + "rws"}>
                  <i className="fa fa-star" />
              </Widget.RatingSingle>
            )
          })}
        </Widget.Rating>
      ) : null}

      <Widget.Text>{text}</Widget.Text>
      <Widget.ProfileBlock mb="40px">
        <Widget.Image>
        <Image className="widget--profile__image" layout="fixed"  width={67}
          height={67} src={image} alt="testimonial user"/>
        </Widget.Image>
        <Widget.UserBlock>
          <Widget.Title as="h3">{name}</Widget.Title>
          <Widget.UserPosition mb="0">{position}</Widget.UserPosition>
        </Widget.UserBlock>
      </Widget.ProfileBlock>
    </Widget>
  )
}
