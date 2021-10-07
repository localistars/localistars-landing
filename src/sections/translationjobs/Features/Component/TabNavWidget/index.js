import React from "react"
import Widget from "./style"

export default function TabNavWidget({iconClass,text,...rest}) {
  return (
    <Widget {...rest}>
      <i className={iconClass}></i>
      <span>{text}</span>
    </Widget>
  )
}
