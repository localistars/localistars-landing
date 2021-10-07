import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 55px;
    padding-bottom: 36px;
    @media (min-width:768px) {
        padding-top: 75px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 100px;
        padding-bottom: 110px;
    }
`

Service.Box = styled(Box)``


export default Service;