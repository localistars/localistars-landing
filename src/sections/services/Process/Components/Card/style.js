import styled from 'styled-components';

import {transparentize} from "polished"
import { Box, Heading,Paragraph } from '~styled';


const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Widget = styled(Box)`
    display: flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    margin-bottom: 30px;
    transition: 0.4s;

    @media (min-width: 768px) {
    margin-bottom: 0;
    }
    @media (min-width: 1200px) {
        align-items:start;
        text-align:left;
    }

    @media (min-width: 1400px) {
    margin-left: 80px;
    }

`
Widget.Icon = styled(Paragraph)`
    min-width: 65px;
    max-width: 65px;
    min-height: 65px;
    max-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 45px;
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
    color: #ff1e38;
    background-color :#fff;
    transition: 0.4s;

    &:hover{
        background-color: #ff1e38;
        color: #fff;
    }
`
Widget.Title = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 25px;
    color:${props => props.iconDark? "#000" : "#fff" };
`
Widget.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 0;
    color:${props => props.iconDark? "#000" : "#fff" };
    opacity: 0.7;
`

export default Widget;