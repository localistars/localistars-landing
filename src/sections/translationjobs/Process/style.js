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
    padding-top: 30px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 30px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 50px;
        padding-bottom: 100px;
    }


`
Process.Subtitle = styled(Heading)
`
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
    @media (min-width:768px) {
    font-size: 38px;
    }
    @media (min-width:992px) {
    font-size: 48px;
    }
`
Process.Box = styled(Box)
``

export default Process;