import React from "react"
import Widget from "./style"
export default function AboutWidget({title, text, icon, ...rest}) {
  return (
    <Widget {...rest} >
        <Widget.Icon>
        <i className={icon}/>
        </Widget.Icon>
        <Widget.Box>
        <Widget.Title as="h5">{title}</Widget.Title>
        <Widget.Text>{text}</Widget.Text>
        </Widget.Box>
  </Widget>
  )
}
