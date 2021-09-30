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
        color:#fff;
        background-color: #5034fc;
        border-color: #5034fc;
        box-shadow: -12px 20px 50px rgb(80 52 252 / 30%);
        font-size: 15px;
        font-weight: 500;
        height: 50px;
        min-width: 137px;
        border-radius:500px;
    }
    ul{
        padding: 0;
        margin: 0;
        position:relative;
       
        @media (min-width:992px){
            padding-right: 12px;
            margin-right: 20px;
            &:before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 2px;
                height: 26px;
                border-right: 2px solid rgba(130, 130, 136, 0.3);
                opacity:0;
            }
        }

        @media (min-width:1600px){
            padding-right: 0px;
        }
        li {
            display: inline-flex;
            align-items: center;
            a {
            display: inline-flex;
            padding: 0 10px;
            color: var(--color-headings-2);
            transition: 0.4s;
            &:hover {
                color: var(--bs-electric-violet-2);
            }
            }
        }
    }
`
const HeaderButton = ({btnLink,btnOneText,btnText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <ul className="d-none d-xl-flex list-unstyled">
                <li><a target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram text-primary"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin text-primary"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook text-primary"></i></a></li>
                <li><a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter text-primary"></i></a></li>
            </ul>
            <Link target="_blank" className="btn btn-2" to={btnLink ? btnLink : "/"}>
                {btnText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;