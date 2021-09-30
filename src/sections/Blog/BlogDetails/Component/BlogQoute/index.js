import React from 'react'
import { SuperTag } from '~components'
import Qoute  from './style'
export default function BlogQoute({text, ...rest}){
  return(
    <Qoute.Text fontColor="#262729">{text}</Qoute.Text>
)
}