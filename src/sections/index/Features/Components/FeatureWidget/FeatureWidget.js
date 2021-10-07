import React from 'react'
import { SuperTag } from '~components';
import Widget from "./style"
export default function FeatureWidget({icon,iconBackground,title,text}){
return(
<Widget>
    <Widget.Icon background={iconBackground}>
        <img src={icon} alt="icon"/> 
    </Widget.Icon>
    <Widget.Body>
        <Widget.Title as="h3">{title}</Widget.Title>
        <Widget.Text><SuperTag value={text}/></Widget.Text>
    </Widget.Body>
</Widget>
)
}