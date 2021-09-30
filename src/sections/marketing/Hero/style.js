import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Hero = styled(Box)`
  padding-top: 180px;
    padding-bottom: 55px;
    @media (min-width:575px) {
        padding-top: 273px;
    }
    @media (min-width:768px) {
        padding-top: 270px;
        padding-bottom: 60px;
    }
    @media (min-width:992px) {
        padding-top: 210px;
        padding-bottom: 130px;
    }
    @media (min-width:1200px) {
        padding-top: 140px;
        padding-bottom: 100px;
    }
    @media (min-width:1366px) {
        padding-top: 216px;
        padding-bottom: 187px;
    }
    /* .newsletter-form {
        max-width: 521px;
    } */
`
Hero.Title = styled(Heading)`
    font-size: 50px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1.075;
    margin-bottom: 35px;

    @media (min-width:480px) {
        font-size: 60px;
    }

    @media (min-width:768px) {
        font-size: 70px;
    }

    @media (min-width:992px) {
        font-size: 80px;
    }
    .typed-cursor {
        display: none !important;
    }
`
Hero.Text = styled(Paragraph)`
    color: rgba(38, 39, 41, 0.7);
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-bottom: 53px;
    @media (min-width:992px) {
        font-size: 21px;
    }
    @media (min-width:1200px) {
        // padding-right: 150px;
    }
`
Hero.Content = styled(Box)`
     margin-top: 80px;
    @media (min-width:992px) {
        margin-top: 0;
    }
`
Hero.Newsletter = styled(Box)`
    form{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        @media (min-width:480px){
            flex-direction:row;
        }
    }
    .form-control{
        width: 100%;
        border-radius: 10px;
        border: 2px solid rgba(128, 138, 142, 0.2);
        color: rgba(37, 55, 63, 0.7);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;
        padding: 5px 25px;
        margin-bottom: 10px;
        height: 70px;
        @media (min-width:480px) {
            margin-right: 7px;
            margin-bottom: 0;
        }
    }
    .btn {
        min-width: 100%;
        height: 70px;
        border-radius: 10px;
        @media (min-width:480px) {
            min-width: 172px;
        }
    }

`
Hero.NewsletterText = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    margin-top: 18px;
    margin-bottom: 0;
    a{
        color:var(--bs-primary)
    }

`
export default Hero
