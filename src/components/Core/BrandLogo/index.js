import React from 'react'
import darklogo from '../../../../public/image/logo/logo-black.png'
import lightLogo from '../../../../public/image/logo/logo-white.png'


export default function BrandLogo({logoWhite=false,...rest}){

return(
<>
    <img src={logoWhite ? lightLogo : darklogo } alt="localistars logo" {...rest}/>
</>
)
}