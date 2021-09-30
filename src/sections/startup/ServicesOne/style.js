import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
`


Service.Box = styled(Box)`

`


export default Service;