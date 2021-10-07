import styled from 'styled-components';
import { Box, Heading,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box)`
    border: none;
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 37px;
    border-radius: 15px;
    transition: 0.4s;
    color:#25373f;
    background-color: rgba(242, 245, 251, 0.2);
    display:flex;
    flex-direction:column;
    align-items:${props => props.itemCenter ? "center" : null};
    text-align:${props => props.itemCenter ? "center" : null};
    box-shadow:  ${props => props.iconColor ? "-12px 12px 50px " + rgba(props.iconColor,0): "none"};
    @media (min-width:575px) {
        padding-left: 45px;
        padding-right: 45px;
    }
    @media (min-width:768px) {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (min-width:992px) {
            padding-left: 45px;
            padding-right: 45px;
    }

    &:hover{
       box-shadow:  0 10px 30px rgba(0, 0, 0, 0.08);
    }
    .card-icon{
        color:${props => props.iconColor};
        background:${props => props.iconColor ? rgba(props.iconColor,.1): "none"};
    }
    &:hover{
        box-shadow:  ${props => props.iconColor ? "-12px 12px 50px " + rgba(props.iconColor,.3): "none"};
        background:${props => props.iconColor};
        color:#fff;
        .card-icon{
            background:#fff;
        }

    }
    
`
Card.Icon = styled(Box).attrs({className:"card-icon"})`
    min-width: 65px;
    max-width: 65px;
    min-height: 65px;
    max-height: 65px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 30px;
    background-color: rgba(255, 114, 114, 0.1);
    
    i{
        color:inherit;
    }
        
`
Card.Title = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    color:inherit;

`
Card.Text = styled(Paragraph)`
        font-size: 15px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.86666;
        margin-bottom: 16px;
        color:inherit;
        &:last-child{
            margin-bottom: 0px;
        }
`


export default Card;