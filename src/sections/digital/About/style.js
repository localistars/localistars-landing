import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const About = styled(Box)`
    padding-top: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 10px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
`
About.Title = styled(Heading)`
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
    &:before{
        content: "";
        position: absolute;
        right: 50%;
        bottom: 0;
        width: 210px;
        height: 1px;
        background-color: #fd346e;
        transform:translateX(50%);
        @media (min-width:1200px){
            right: 0%;
            transform:translateX(0%);
        }
    }
`
About.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
About.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.77777;
    @media (min-width:768px) {
        font-size: 18px;
    }
`
About.Button = styled(Button)`
color:#fff;
    border-color: #fd346e;
    background-color: #fd346e;
    box-shadow:0 20px 20px rgb(253 52 110 / 30%);
    border-radius:500px;
    &:hover{
        box-shadow:0 20px 20px rgb(253 52 110 / 0%);
        color:#fff;

    }
`

About.ContentTextBlock = styled(Box)`
    position:relative;
`
About.Image = styled(Box)`
position:relative;
.video-btn{
        min-width: 70px;
        max-width: 70px;
        min-height: 70px;
        max-height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        color:#fd346e;
        border:0;
        box-shadow:none;
        &:after{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 500px;
            content: "";
            background-color: #fff;
            z-index: -1;
            pointer-events: none;
            opacity: 0;
            animation:sonarWave 2s linear infinite;
        }
        @media (min-width:576px){
            min-width: 96px;
            max-width: 96px;
            min-height: 96px;
            max-height: 96px;
        }
        
}

`;

About.Box = styled(Box)``


export default About;