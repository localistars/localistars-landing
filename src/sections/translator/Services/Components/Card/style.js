import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';
import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
    border: none;
    padding-top: 35px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 51px;
    margin-bottom: 25px;
    border-radius: 15px;
    transition: 0.4s;
    display:flex;
    flex-direction:column;
    align-items:${props => props.itemCenter ? "Start" : null};
    text-align:${props => props.itemCenter ? "Start" : null};
    color:#25373f;
    @media (min-width:575px) {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media (min-width:768px) {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (min-width:992px) {
        padding-left: 60px;
        padding-right: 60px;
    }

    &:hover{
       box-shadow:  0 10px 30px rgba(0, 0, 0, 0.08);
    }
    
`
Card.Icon = styled(Box)`
        min-width: 60px;
        max-width: 60px;
        min-height: 60px;
        max-height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 30px;
        background:${props => props.background};
        box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,.3): "none"};
        
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
        margin-bottom: 26px;
        opacity:.7;
        color:inherit;
`
Card.Button = styled(Box)`
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: inherit;
        transition: 0.4s;

        i {
            margin-left: 10px;
        }
`

export default Card;