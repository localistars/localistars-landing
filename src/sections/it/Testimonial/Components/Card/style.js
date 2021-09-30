import styled from 'styled-components';

import {transparentize} from "polished"
import { Box, Heading,Paragraph } from '~styled';


const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Card = styled(Box).attrs({className:"testimonial-card card"})`
        background: #fff;
    border: 0;
    color: #262729;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 15px!important;
    transition: 0.4s;
    &:hover {
        background-color: #5034fc;
        color: #fff;

        @media (min-width:992px) {
            box-shadow: 0 23px 45px rgba(80, 52, 252, 0.25);
        }

        .card-user-block {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
    }

`
Card.Image = styled(Paragraph)`
   max-width: 70px;
   min-width: 70px;
    max-height: 70px;
    min-height: 70px;
    border-radius: 500px;
    margin-top: -35px;
    width: 100%;
`
Card.Title = styled(Heading)`
   color: inherit;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 26px;
    text-align: left;
    margin-bottom: 3px;
`
Card.Text = styled(Paragraph)`
    color: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
`
Card.Body = styled(Box)`
    padding-top: 15px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 15px;
`
Card.UserBlock = styled(Box)`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-top: 20px;
 margin-top: 29px;
 border-top: 1px solid rgba(38, 39, 41, 0.1);

`
Card.UserInfo = styled(Box)``
Card.Rating = styled(Box)`
    display: flex;
    font-size: 15px;
`
Card.RatingSingle = styled(Box)`
    color: ${props => props ? "#ff971d":"inherit"};
    margin-right: 5px;
    font-size: inherit;
`
Card.UserPosition = styled(Paragraph)`
    color: inherit;
    opacity: 0.7;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 0;`

export default Card;