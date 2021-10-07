import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 30px;

    @media (min-width: 768px){
        padding-top: 80px;
        padding-bottom: 50px;
    }

    @media (min-width: 992px){
        padding-top: 130px;
        padding-bottom: 130px;
    }
`

Service.Image = styled(Box)`

`
Service.List = styled(Box)`
li {
    padding-left: 30px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    color:#262729;
    list-style: none;
    &::before{
        content: "\f00c";
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 700;
        color:#5034fc;
    }
}

`
Service.Box = styled(Box)`

`


export default Service;