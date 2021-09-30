import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Card = styled(Box).attrs({className:"card card--testimonial"})`
    margin-top: 45px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    background: #fff;
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 15px;
    transition: 0.4s;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    color: #262729;
    &:hover{
        background-color: #5034fc;
        color: #fff; 
    }
`
Card.Image = styled(Box)`
    width: 70px;
    height: 70px;
    border-radius: 500px;
    margin-top: -35px;
`
Card.UserBody = styled(Box)`
`
Card.Body = styled(Box)`
    padding-top: 20px;
    border-top: 1px solid rgba(38, 39, 41, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
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
Card.Position = styled(Paragraph)`
    opacity: 0.7;
    color: inherit;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 0;
`
Card.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 27px;
    color: inherit;
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
Card.Review = styled(Box).attrs({className:"list-unstyled", as:"ul"})`
    margin: 0;
    padding: 0;
    li{
        display: inline-block;
        color: #ff971d;
        margin-right: 5px;
        transition: 0.4s;
    }
`

export default Card;