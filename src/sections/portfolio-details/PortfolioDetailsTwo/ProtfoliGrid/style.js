import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Portfolio = styled(Box)`
    padding-top: 55px;

    @media (min-width: 768px) {
        padding-top: 75px;
    }

    @media (min-width: 992px) {
        padding-top: 120px;
        margin-top: 0;
    }
`
Portfolio.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
`
Portfolio.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;

    @media (min-width: 576px) {
      font-size: 40px;
    }

    @media (min-width: 768px) {
      font-size: 50px;
    }

    @media (min-width: 992px) {
      font-size: 60px;
    }
`

Portfolio.ButtonGroup = styled(Box)`
    text-align: center;
    margin-top:30px;
`
Portfolio.Button = styled(Button)`
    box-shadow: 0 4px 4px rgb(253 100 52 / 30%);
    border-radius: 500px!important;
    min-width: 180px;
    height: 56px;
    font-size: 15px;

`
Portfolio.Box = styled(Box)`

`


export default Portfolio;