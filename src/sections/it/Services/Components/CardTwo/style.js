import styled from 'styled-components';
import { Box, Button, Heading,Paragraph } from '~styled';
import cardshape from "~image/it-services/services-more-shape.png"
import {transparentize,rgba} from "polished"

const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Card = styled(Box)`
    border-radius: 10px!important;
    background-color: #5034fc;
    padding-top: 40px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 20px;
    margin-bottom: 24px;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    border-color: transparent;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height:250px;
    @media (min-width:768px){
        min-height:100%;
    }
    &:hover{
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }
    &:before {
    content: "";
    background-image: url(${cardshape.src});
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    right: -60%;
    }
`
Card.Title = styled(Heading)`
    color: #fff;
    font-size: 28px;
    letter-spacing: normal;
    line-height: 1.57142;
    margin-bottom: 25px;
    transition: 0.4s;
    font-weight: 500;
`
Card.Text = styled(Paragraph)`
    opacity: 0.7;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    margin-bottom: 0;
`
Card.Body = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Card.Button = styled(Button)`
    min-width: 44px!important;
    max-width: 44px!important;
    height: 45px!important;;
    border-radius: 10px!important;
    background-color: rgba(38, 39, 41, 0.3)!important;
    color: #fff!important;
    font-size: 15px;
    font-weight: 500;
    line-height: 28px;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color:#fff;
    }
`


export default Card;