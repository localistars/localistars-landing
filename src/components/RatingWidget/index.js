import React from "react"
import {RatingWrapper,Star} from "./style"

const RatingWidget = ({star=5,...props}) => {
    

  return (
    <RatingWrapper {...props}>
      {star <= 5 ? (
          <>
          {Array.from(Array(star), (_, index) => {
            return (
              <Star className="full" key={index + 'fs'}/>
            )
          })}
          {Array.from(Array(5 - star), (_, index) => {
            return (
                <Star key={index + 'es'}/>
            )
          })}
          </>
      ) : null}

    </RatingWrapper>
  )
}

export default RatingWidget
