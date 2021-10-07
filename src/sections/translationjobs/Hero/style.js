import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Hero = styled(Box)`
    padding-top: 125px;
    padding-bottom: 60px;
    background-size: cover;
    background-position: right top;
    position: relative;
    z-index: 1;
    @media (min-width:768px) {
        padding-top: 145px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 260px;
        padding-bottom: 195px;
    }

    @media (min-width:1600px) {
        padding-top: 290px;
    }
    &:before {
        content: "";
        background-image: ${props => props.overlay ? `url(${props.overlay})` : null};
        background-position: center right;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        z-index: -1;
        width: 100%;
        background-repeat:no-repeat;
        background-size: cover;
        @media (min-width:575px){
            width: 50%;
        }
    }
`

Hero.Content = styled(Box)`
    
`
Hero.Subtitle = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    font-style: italic;
    letter-spacing: normal;
    line-height: 1.4285;
    margin-bottom: 20px;
`
Hero.Title = styled(Heading)`
        font-size: 35px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1.2;
        margin-bottom: 25px;
        @media (min-width:480px) {
            font-size: 40px;
        }

        @media (min-width:768px) {
            font-size: 50px;
        }

        @media (min-width:992px) {
            font-size: 60px;
        }
`
Hero.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 10px;
    opacity:.7;
`

Hero.Buttons = styled(Box)`
.btn{
    margin-right:18px;
}
`
Hero.Video = styled(Box)`
        box-shadow: 0 10px 56px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        @media (min-width:992px) {
            margin-left: 30px;
        }

        @media (min-width:1600px) {
            margin-left: 67px !important;
        }

        .video-btn {
            min-width: 60px;
            max-width: 60px;
            min-height: 60px;
            max-height: 60px;
            background-color: #5034fc;
            border-color: #5034fc;
            color:#fff;
            box-shadow:0 0 0 0.2rem rgb(106 82 252 / 50%);
            outline:none; 
            border-radius: 500px;    
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);       
        }
`
Hero.Button = styled(Button)`
    min-width: 180px;
    height: 56px;
    font-size: 15px;
    transition:.4s;
   
        &.btn-1{
            box-shadow:-12px 12px 50px rgb(96 1 211 / 30%);
            &:hover{
                box-shadow: -12px 12px 50px rgb(96 1 211 / 0%)
            }
        }
`
Hero.NewsletterText =styled(Box)`
    color:rgba(255,255,255,.7);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    margin-top: 25px;
    @media (min-width:768px){
        color: #828288;
    }
`
Hero.Newsletter =styled(Box)`
    max-width: 522px;
    position:relative;
    .icon{
        top: 50%;
        position: absolute;
        left: 25px;
        font-size:18px;
        transform: translateY(-50%);
        color:#6001d3;
    }
    .form-control{
        width:100%;
        border-radius:50px;
        min-height:72px;
        padding-left:55px;
    }
    .btn{
        min-width: 174px;
        height: 56px;
        color:#fff!important;
        margin-top:8px;
        border-radius:500px!important;
        @media (min-width:480px){
            position:absolute;
            top: 0px;
            right: 8px;
        }
        &:hover{
            color:#fff!important;
        }
    }
`
Hero.NewsletterButton = styled(Button)`

`
Hero.Box = styled(Box)`

`

export default Hero;