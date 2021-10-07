import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const About = styled(Box)`
    border-bottom: 1px solid #dee2e6;
    padding-top: 35px;
    padding-bottom: 5px;

    @media (min-width: 768px){
        padding-top: 75px;
        padding-bottom: 25px;
    }

    @media (min-width: 992px){
        padding-top: 120px;
        padding-bottom: 0px;
    }
`

About.ImageContent = styled(Box)`
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    width: 80%;
    margin: 0 auto;
`
About.Shape = styled(Box)`
    position: absolute;
    top: 50%;
    left: 56%;
    z-index: -1;
    transform: translate(-50%, -50%);
    width: 90%;
`
About.Box = styled(Box)`

`


export default About;