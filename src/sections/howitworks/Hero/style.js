import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Hero = styled(Box)`
    padding-top: 100px;
    padding-bottom: 0;
    position: relative;

    @media (min-width: 768px){
        padding-top: 140px;
        padding-bottom: 0;
    }

    @media (min-width: 992px){
        padding-top: 150px;
        padding-bottom: 0;
    }

    @media (min-width: 1200px){
        padding-top: 170px;
        padding-bottom: 0;
    }

    @media (min-width: 1366px){
        padding-top: 160px;
        padding-bottom: 0;
    }

`


Hero.Title = styled(Heading)`
font-weight: 500;
letter-spacing: -2px;
line-height: 1.1;
font-size: 40px;
margin-bottom: 25px;
z-index: 1;
position: relative;

@media (min-width: 480px) {
    font-size: 50px;
}

@media (min-width: 768px){
    font-size: 60px;
}

@media (min-width: 992px){
    font-size: 70px;
}
`
Hero.TitleShape = styled(Box)`
position: absolute;
left: 0;
top: 0;
z-index: 0;
width: 18.5%;

@media (min-width: 768px){
    left: 5%;
    top: -5%;
}

@media (min-width: 992px){
    left: 6%;
    top: -22%;
}
`

Hero.Text = styled(Paragraph)`
color: var(--color-texts-3);
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 34px;

@media (min-width: 768px){
    font-size: 21px;
}
`

Hero.ContentBlock = styled(Box)`
    text-align:center;
`
Hero.InputBox = styled(Box)`
position:relative;
.form-control{
    width:100%;
    border-radius:500px;
    min-height:50px;
    padding-left:30px;
    @media (min-width:480px){
        min-height:72px;
    }
}
`
Hero.Button = styled(Button)`
border-radius: 500px!important;
    padding: 16px 35px;
    margin-top:10px;
    min-width:100%;
    @media (min-width:480px){
        min-width:137px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        margin-top:0px;
    }

`
Hero.Image = styled(Box)`
margin-top: 50px;
@media (min-width: 992px){
    margin-top: 70px;
}
`
Hero.ImageShape01 = styled(Box)`
position: absolute;
right: -3.5%;
bottom: 35%;
z-index: 0;
width: 9.7%;
`
Hero.ImageShape02 = styled(Box)`
position: absolute;
left: -4%;
bottom: 20%;
z-index: 0;
width: 10%;
`
Hero.NewsletterBox =styled(Box)`
border-radius: 75px;
max-width: 516px;
margin:auto;

@media (min-width:480px) {
  background-color: #f2f5fb;
  border: 2px solid #f8f9fc;
}

`
Hero.Newsletter =styled(Box)`

`
Hero.Box = styled(Box)`

`

export default Hero;