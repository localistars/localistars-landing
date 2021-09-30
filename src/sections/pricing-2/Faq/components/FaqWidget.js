import React from "react"
import { SuperTag } from "~components"
import Widget from './style'
export default function FaqWidget({title,text,icon}) {
  return (
      <Widget>
          <Widget.Icon>
            <i className={icon}/>
          </Widget.Icon>
          <Widget.Content>
            <Widget.Title mb="10px" fontColor="#262729">
              {title}
            </Widget.Title>
            <Widget.Text fonColor="#747474">
              <SuperTag value={text}/>
            </Widget.Text>
          </Widget.Content>
      </Widget>
  )
}
