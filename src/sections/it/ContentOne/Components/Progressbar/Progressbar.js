import React from 'react';
import Bar from "./style";
export default function Progressbar({title,text,percentage,...rest}){
return(
<Bar percentage={percentage} {...rest}>
    <Bar.Top>
        <Bar.Title as="h3">{title}</Bar.Title>
        <Bar.Percent>{percentage}</Bar.Percent>
    </Bar.Top>
    <Bar.Body>
        <Bar.Line></Bar.Line>
    </Bar.Body>
</Bar>
)
}