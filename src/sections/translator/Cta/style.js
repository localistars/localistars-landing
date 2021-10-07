import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Cta = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }
`
Cta.Title = styled(Heading)`
    font-size: 36px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.5;
    margin-bottom: 13px;
`
Cta.Subtitle = styled(Heading)`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 22px;
    border-radius: 15px;
    background-color: #fcdc00;
    color: #262729;
    min-width: 112px;
    height: 30px;
    margin-bottom: 22px;
     display:inline-flex;
     justify-content:center;
     align-items:center;
`
Cta.Text = styled(Paragraph)`
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 40px;
`

Cta.InnerWrapper = styled(Box)`
    border-radius: 15px;
    background-color: rgba(80, 52, 252, 0.85);
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 30px;
    padding-right: 30px;
`

Cta.Button = styled(Button)`
    color:#fff!important;
    background-color: #ff5722!important;
    border-color: #ff5722!important;
    box-shadow:4px 4px 65px rgb(255 87 34 / 50%);
    border-radius:500px;
   
    &:hover{
        box-shadow:4px 4px 65px rgb(255 87 34 / 0%);
        color:#fff!important;

    }
`
Cta.Box = styled(Box)``


export default Cta;