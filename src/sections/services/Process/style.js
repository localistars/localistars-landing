import styled from 'styled-components';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Process = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;
    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }
    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }


`
Process.Subtitle = styled(Heading)
`
    color:${props => props.iconDark? "#000" : "#fff" };
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 0.1155555;
    margin-bottom: 20px;
     
`
Process.Title = styled(Heading)
`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    color:${props => props.iconDark? "#000" : "#fff" };
    @media (min-width:768px) {
    font-size: 38px;
    }
    @media (min-width:992px) {
    font-size: 48px;
    }
`
Process.Button = styled(Button)
`
    min-width: 180px;
    height: 56px;
    border-radius: 55px!important;
    color: #fff!important;
    margin-bottom: 40px;
    box-shadow:0 20px 20px rgb(255 75 96 / 10%);
    @media (min-width: 992px){
        margin-bottom: 50;
    }
    @media (min-width: 1200px){
        margin-bottom: 0;
    }
    &:hover{
        box-shadow:0 20px 20px rgb(255 75 96 / 0%);
        color:#fff;

    }
`
Process.Text = styled(Paragraph)
`
    opacity: 0.7;
    color:${props => props.iconDark? "#000" : "#fff" };
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 33px;
`
Process.Box = styled(Box)
``

export default Process;