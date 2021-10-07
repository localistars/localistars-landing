import React from "react"
import { SuperTag } from "~components"
import Widget from "./style"

export default function TabContentWidget({count,title,text,...rest}) {
  return (
    <Widget {...rest}>
      <Widget.Count as="h2">{count}</Widget.Count>
      <Widget.Title as="h5">{title}</Widget.Title>
      <Widget.Text>
          <SuperTag value={text}/>
      </Widget.Text>
    </Widget>
  )
}
