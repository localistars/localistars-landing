import React from 'react'
import { Link } from '~components'
import styled from 'styled-components'
import { Box } from '~styled'

export const HeaderButtonWrapper = styled(Box)`
    .btn{
        min-width:auto;
        height: 42px;
        border-radius: 3px;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        margin-left:10px;
        color:#262729;
        &-2{
            border-radius:500px;
            color:#fff;
            min-width: 194px;
            height: 42px;
            background-color: #ff5722;
            border-color: #ff5722;
            height: 42px;
            &:hover{
                box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3);
                color:#fff!important;
            }
        }
    }
`
const HeaderButton = ({btnOneLink,btnTwoLink,btnOneText,btnTwoText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Link target="_blank" className="btn btn-1" to={btnOneLink ? btnOneLink : "/"}>
                {btnOneText}
            </Link>
            <Link target="_blank" className="btn btn-2" to={btnTwoLink ? btnTwoLink : "/"}>
                {btnTwoText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;