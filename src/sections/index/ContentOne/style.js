import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    border-bottom: 1px solid #dee2e6;
    padding-top: 35px;
    padding-bottom: 25px;

    @media (min-width: 768px) {
        padding-top: 75px;
        padding-bottom: 45px;
    }

    @media (min-width: 992px) {
        padding-top: 80px;
        padding-bottom: 0px;
    }

`

Content.ImageGroup = styled(Box)`
    position: relative;
    z-index: 1;
    width: 80%;
    margin: 0 auto;
`

Content.ImageShape = styled(Heading)`
    position: absolute;
    top: 50%;
    left: 56%;
    z-index: -1;
    transform: translate(-50%, -50%);
    width: 90%;
    img{
    width: 100%;
    }
    }
    @media (min-width: 992px) {
    margin-left: 30px;
    }
`

Content.Box = styled(Box)`

`


export default Content;