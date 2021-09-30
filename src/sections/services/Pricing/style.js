import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Pricing = styled(Box)`
    padding-top: 50px;
    padding-bottom: 40px;
    border-bottom:1px solid #dee2e6 !important;
    @media (min-width:575px){
        padding-top: 55px;
        padding-bottom: 60px;
    }
    @media (min-width:768px) {
        padding-top: 75px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }
`
Pricing.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    position:relative;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 48px;
    }
`
Pricing.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Pricing.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.77777;
    @media (min-width:768px) {
        font-size: 18px;
    }
`



Pricing.Box = styled(Box)`

`


export default Pricing;