import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Feature = styled(Box)`
    padding-top: 35px;
    padding-bottom: 40px;

    @media (min-width:768px) {
        padding-top: 55px;
        padding-bottom: 60px;
    }

    @media (min-width:992px) {
        padding-top: 85px;
        padding-bottom: 127px;
    }
`
Feature.Tab = styled(Box)`
    .nav-tabs{
        text-align: center;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 51%;
        transition: 0.4s;
        border-bottom: 2px solid rgba(248, 249, 252, 0.2);
        margin-bottom: 60px;
        @media (min-width:992px) {
            margin-bottom: 115px;
            justify-content: space-between;
        }
        .nav-link {
            border: none;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 1.66666;
            display: inline-flex;
            color: rgba(255,255,255, 0.7);
            padding: 18px 0;
            transition: 0.4s;
            margin-right: 10px;
            border-bottom: 2px solid transparent;
            justify-content: space-between;

            &.active {
                background-color: transparent;
                color: #ffd166;
                border-bottom: 2px solid #ffd166;
            }
            &:last-child{
              margin-right: 0;
            }
        }
    }
`
Feature.Block = styled(Box)`


`
Feature.Title = styled(Heading)`


`
Feature.Text = styled(Paragraph)`

`

Feature.Box = styled(Box)``


export default Feature;