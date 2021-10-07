import React from "react"
import { SuperTag } from "~components"
import Widget from "./style"
export default function AboutWidget({title, text, icon, ...rest}) {
  return (
    <Widget>
    <Widget.Icon>
      <i className={icon}/>
    </Widget.Icon>
    <Widget.Title as="h4">{title}</Widget.Title>
    <Widget.Text>
        <SuperTag value={text}/>
    </Widget.Text>
  </Widget>
  )
}
