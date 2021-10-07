import styled from 'styled-components';

import {transparentize} from "polished"
import { Box, Heading,Paragraph } from '~styled';


const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);

const Widget = styled(Box)`
    display: block;
    margin-bottom: 30px;
    transition: 0.4s;

    @media (min-width: 768px) {
    margin-bottom: 0;
    }

    @media (min-width: 1200px) {
    margin-right: 5px;
    }
    @media (min-width: 1400px) {
    margin-right: 25px;
    } 

    &:hover{
        .widgets-icon{
            background-color: #ffd700;
            color: #fff;
        }
    }

`
Widget.Icon = styled(Paragraph).attrs({className:"widgets-icon"})`
    min-width: 57px;
    max-width: 57px;
    min-height: 57px;
    max-height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    ont-size: 21px;
    font-weight: 500;
    line-height: 30px;
    color: #fff;
    background-color :#5034fc;
    transition: 0.4s;
    margin-bottom: 45px;
   
`
Widget.Title = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 25px;
    color: #25373f
`
Widget.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 0;
    color: rgba(37, 55, 63, 0.7);
`

export default Widget;