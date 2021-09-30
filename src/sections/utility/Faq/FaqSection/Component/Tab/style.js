import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Tab = styled(Box)`
    border: 1px solid rgba(181, 181, 181, 0.2);
    background-color: #fff;
    margin-right: 8px;
    padding-top: 20px;
    padding-bottom: 25px;
`
Tab.List = styled(Box)`
    display: flex;
    flex-direction: column;
    a{
    color: rgba(38, 39, 41, 0.7);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    padding: 14px 25px;
    &.active{
        color: #0abfbc;
    }
    }
`
Tab.Box = styled(Box)`
`


export default Tab;