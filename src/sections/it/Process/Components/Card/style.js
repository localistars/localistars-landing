import styled from 'styled-components';

import {transparentize} from "polished"
import { Box, Heading,Paragraph } from '~styled';


const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Card = styled(Box).attrs({className:"process-card"})`
    position: relative;
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;

    @media (min-width: 768px) {
    padding: 0 60px;
    }

    @media (min-width: 992px) {
    padding: 0 30px;
    }

    @media (min-width: 1200px) {
    padding: 0 60px;
    }

   @media (min-width: 1400px) {
    padding: 0 90px;
    }

    &:before {
    position: absolute;
    right: 0;
    top: 15%;
    transform: translateX(50%);
    width: 200px;
    height: 1px;
    background-color: #262729;
    opacity: 0;

    @media (min-width: 768px) {
        content: "";
    }

    @media (min-width: 1200px) {
        width: 250px;
    }
    }

`
Card.Icon = styled(Paragraph)`
    min-width: 65px;
    max-width: 65px;
    min-height: 65px;
    max-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 45px;
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
    color:${props => props.iconDark? "#000" : "#fff" };
    background:${props => props.backgroundColor? props.backgroundColor: "#5034fc" };
    box-shadow:  ${props => "-12px 12px 50px " + propToColor(props.backgroundColor)};
`
Card.Title = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.42857;
    margin-bottom: 25px;
`
Card.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.875;
margin-bottom: 0;
`

export default Card;