import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`

@media (min-width: 992px){
    left: -25%;
    min-width: 120%;
}

`
Counter.Wrapper = styled(Box)`
box-shadow: 0 24px 50px rgba(96, 1, 211, 0.2);
border-radius: 15px;
background-color: rgba(80, 52, 252, 0.9);
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 50px;
padding-bottom: 20px;
padding-left: 0px;
padding-right: 0px;

`

Counter.Single=styled(Box).attrs({className:"counter-single"})`

border: none !important;
        position: relative;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: center;
        width: 100%;
        margin-bottom: 30px;
        flex: 0 0 100%;

        @media (min-width: 480px) {
            width: 50%;
            flex: 0 0 50%;
        }

        @media (min-width: 768px){
            padding: 0 45px;
            width: calc(33.3333% - 10px);
            flex: 0 0 calc(33.3333% - 10px);
        }

        @media (min-width: 992px){
            padding-left: 0px;
            padding-right: 0px;
        }

        @media (min-width: 1400px) {
            padding-left: 10px;
            padding-right: 10px;
        }
        @media (min-width: 320px) {
            &::before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 2px;
                height: 90px;
                background-color: #fff;
                opacity:0.1;
            }
        }

        &:nth-child(2) {
            &::before {
                content: "";
                background-color: transparent;
            }
            @media (min-width: 768px)            {
                &::before {
                    content: "";
                    background-color: #fff;
                    opacity:0.1;
                }
            }
        }
        &:last-child {
            &::before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 2px;
                height: 68px;
                background-color: transparent;
            }
        }
`
Counter.Title = styled(Heading)`
font-size: 28px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.4761;
@media (min-width: 768px) {
    font-size: 32px;
}
@media (min-width: 992px) {
    font-size: 35px;
}

@media (min-width: 1200px) {
    font-size: 42px;
}
`
Counter.Text = styled(Paragraph)`
font-size: 13px;
font-weight: 400;
letter-spacing: normal;
line-height: 30px;
margin-bottom: 0;
@media (min-width: 768px){
    font-size: 16px;
}
@media (min-width: 992px) {
    font-size: 18px;
}
`
Counter.Box = styled(Box)`

`


export default Counter;