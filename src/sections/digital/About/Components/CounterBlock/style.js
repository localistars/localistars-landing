import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`
    
    margin-left: -30px;
    margin-right: -30px;
    @media (min-width:480px) {
        display:flex;
        flex:wrap;
        justify-content: center;
        margin-bottom: -30px;
    }
    .counter-single{
        padding-left:30px;
        padding-right:30px;
        margin-bottom: 30px;
        @media (min-width:480px){
            padding-left:20px;
            padding-right:20px;
        }
    }
`
Counter.Single=styled(Box).attrs({className:"counter-single"})`

  text-align:center;
  
    &::before {
        content: "";
        background-color: #fd346e;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0px;
        height: 68px;
        @media (min-width:480px) {
                width:2px;
        }
    }
    
    &:nth-child(2) {
        &::before {
            width:0;
        }
        @media (min-width:480px) {
            &::before {
                width:2px;
            }
        }
    }

    &:last-child {
        &::before {
            width:0;
        }
    }
`
Counter.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 42px;
    color:#fd346e;
`
Counter.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.4;
`
Counter.Box = styled(Box)``


export default Counter;