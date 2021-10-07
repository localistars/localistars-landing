// import { HeaderButton } from 'src/sections/digital';
import styled from 'styled-components';
import { Box, Heading } from '~styled';

const Cta = styled(Box)`
    position: relative;
    padding-top: 50px;
    padding-bottom: 30px;
    z-index: 0;
    border-radius: 0;

    @media (min-width:768px) {
        padding-top: 70px;
    }

    @media (min-width:992px) {
        padding-top: 120px;
        padding-bottom:60px;
    }
`

Cta.Shape = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
        max-width:30%;
        @media (min-width:575px){
            max-width:50%;
        }
        @media (min-width:768px){
            max-width:90%;
        }
        @media (min-width:992px){
            max-width:100%;
        }
    }
`
Cta.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;

    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
    }

    @media (min-width:992px) {
      font-size: 60px;
    }
`
Cta.Box = styled(Box)`
    
`
Cta.Newsletter = styled(Box)`
        max-width: 521px;
        margin:0 auto;
`
Cta.NewsletterFromGroup = styled(Box)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    @media (min-width:575px){
        flex-direction:row;
    }
    .form-control{
        transition: 0.4s;
        background-color: rgba(255,255,255, 0.2);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        width: 100%;
        border: none;
        border-radius:10px;
        padding: 0 25px;
        height: 70px;
        margin-right:5px;
        margin-top:10px;
        &::placeholder{
            color:#fff;
        }
        &:focus {
            background-color: #fff !important;

            &::placeholder {
                color: #000;
            }
        }
    }
    .btn{
        min-width: 172px;
        height: 70px;
        background-color: #ff7043;
        border-color: #ff6838;
        border-radius:10px;
        color:#fff;
        margin-top:10px;
    }
`

export default Cta;