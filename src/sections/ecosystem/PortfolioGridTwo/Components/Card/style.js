import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Card = styled(Box).attrs({className:"team-card"})`
     position: relative;
    border-radius: 15px;
    display: inline-block;
    .card-innerblock{
        position: absolute;
        left: 50%;
        bottom: 18px;
        width: 90%;
        transform: translateX(-50%);
        overflow: hidden;
        visibility: hidden;
        opacity: 0;
    }
    &:hover{
        .card-innerblock{
            visibility: visible;
            opacity: 1;
        }
    }
    font-size:12px;
    @media (min-width:480px){
        font-size:13px;
    }
    @media (min-width:575px){
        font-size:14px;
    }
    
`
Card.InnerBlock = styled(Box).attrs({className: "card-innerblock"})`  
    padding: 20px 15px;
    border-radius: 10px;
    transition: all 0.7s ease-in-out;
    @media (min-width:480px) {
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 20px 35px;
    }
    .card-icon{
        @media (min-width:480px) {
            order:2
        }
    }
    .card-content{
        @media (min-width:480px) {
            order:1
        }
    }
`


Card.Title = styled(Heading)`
    font-size: 1.125em;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.42;
    margin-bottom: 8px;
`
Card.Text = styled(Paragraph)`
    font-size: 1.07em;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.2;
    margin-bottom: 0;
`
Card.InnerIcon = styled(Paragraph).attrs({className:"card-icon",as:"div"})`
    font-weight: 500;
    font-size: 1.31em;
    line-height: 1.42;
    @media (min-width:480px) {
        display:flex;
        justify-content:space-between;
        align-items:center;
        /* padding: 20px 35px; */
    }
    i {
        margin: 0 10px;
        font-size: 18px;
        color:inherit
    }
`
Card.Content = styled(Box).attrs({className:"card-content"})`
    
`
Card.SocialItem = styled(Box)`
    color: #fff;
    padding-right: 20px;
    transition-duration: 0.4s;
`
Card.Box = styled(Box)`
`

export default Card;