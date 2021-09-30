import React from "react"
import Widget from "./style"
export default function ContentWidget({
  icon,
  title,
  text,
  iconBackground,
  ...rest
}) {
  return (
    <Widget backgroundColor="#fff" {...rest}>
      <Widget.Icon background={iconBackground}>
        <i className={icon} />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h4">{title}</Widget.Title>
        <Widget.Text fontColor="#667378">{text}</Widget.Text>
      </Widget.Box>
    </Widget>
  )
}
