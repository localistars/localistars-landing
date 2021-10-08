import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';
import {transparentize,rgba} from "polished"
const Content = styled(Box)`
    
`
Content.InnerWrapper = styled(Box)`
border-top:1px solid #dee2e6 !important;
padding-top: 60px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:992px) {
        padding-top: 100px;
        padding-bottom: 110px;
    }
`
Content.WidgetsWrapper = styled(Box)`
`
Content.Widget = styled(Box)`
`
Content.WidgetTitle = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    color: #ff5722;
    margin-bottom: 13px;
`
Content.WidgetText = styled(Paragraph)`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    @media (min-width:1600px){
      font-size: 16px;
    }
`

Content.Image = styled(Box)`
    @media (min-width:1400px) {
        padding: 0 55px;
    }

`;


Content.Button = styled(Button)`
    min-width: 183px;
    height: 56px;
    border-radius: 5px;
    font-size: 15px;
    background:${props => props.background}!important;
    box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,0): "none"};
    border-radius:500px!important;
    color:#fff!important;
    transition:.4s;
    &:hover{
        background:${props => props.background};
        box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,.3): "none"};
        color:#fff!important;
    }
`
Content.Box = styled(Box)``


export default Content;