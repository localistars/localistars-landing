import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Count = styled(Box)`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-bottom: 55px;
    @media (min-width: 992px){
        margin-right: -60px;
    }
`
Count.Single = styled(Box)`
    text-align: center;
    width: 50%;
    flex: 0 0 50%;
    margin-bottom: 20px;
    @media (min-width: 575px) {
        width: 25%;
        flex: 0 0 25%;
    }
    &:nth-child(1){
        .counter-heading{
            &:before {   
                color: #ff5722;
                display: block;
            }
        }
    }
    &:nth-child(2){
        @media (min-width: 575px){
            .counter-heading{
                &:before {   
                    color: #ff5722;
                    display: block;
                }
            }
        }
    }
    &:nth-child(3){
        .counter-heading{
            &:before {   
                color: #ff5722;
                display: block;
            }
        }
    }

`
Count.Title = styled(Heading).attrs({className:"counter-heading"})`
    font-size: 45px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 54px;
    color: #ff5722;
    position: relative;
    &:before {
        content: ":";
        font-size: 45px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 54px;
        color: transparent;
        display: none;
        right: 0;
        top: 0;
        position: absolute;
    }
   
`
Count.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 500;
letter-spacing: normal;
line-height: 28px;
color: rgba(38, 39, 41, 0.7);
margin-bottom: 0;
`


export default Count;