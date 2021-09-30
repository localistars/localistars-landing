import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Qoute = styled(Box)`

`


Qoute.Text = styled(Paragraph)`
    font-size: 21px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-left: 45px;
    position: relative;
    margin-bottom: 35px;
    &:before{
    content: "\f10d";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    font-weight: 700;
    font-size: 25px;
    left: -45px;
    top: 0;
    color: #ff5722;
    }
`
Qoute.Box = styled(Box)`

`

export default Qoute;