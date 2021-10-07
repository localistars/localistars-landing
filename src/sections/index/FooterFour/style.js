import styled from 'styled-components';
import {
    Link
} from '~components';
import {
    Box
} from '~styled';

const Footer = styled(Box)
`

`
Footer.Widgets = styled(Box)
`

`
Footer.Logo = styled(Box)
`
    text-align: center;
    @media(min-width: 768px){
        text-align: left;
    }
`

Footer.Link = styled(Box)
`

`


Footer.SocialShare = styled(Box).attrs({className:"footer-social-share list-unstyled", as:"ul"})
`
    padding: 0;
    margin: 0 -10px;

`
Footer.SocialShareItem = styled(Box).attrs({className:"list-items", as:"li"})
`
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    
    a{
        min-width: 34px;
        min-height: 34px;
        border-radius: 500px;
        color: #262729;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
        &:hover{
            box-shadow: 0 10px 20px rgba(253 52 110, 0.25);
            background-color: #ff5722;
            color: #fff;
        }
    }
    &:first-child {
        a:before {
            display: none;
        }
    }
`


Footer.Copyright = styled(Box)
`
    text-align: center;
    padding-top: 35px;
    padding-bottom: 40px;
    border-top: 1px solid rgba(38, 39, 41, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    @media(min-width: 768px){
        justify-content: space-between;
    }

`

Footer.CopyrightText = styled(Box)
`
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;
    margin-right: 20px;

`

Footer.Menu = styled(Box).attrs({className:"footer-menu list-unstyled", as:"ul"})
`
    padding: 0;
    margin: 0;
    text-align: center;
    margin-bottom: 0;
    @media(min-width: 768px){
        text-align: right;
    }
`

Footer.MenuItems = styled(Box).attrs({className:"footer-menu__li", as:"li"})
`
    display: inline-block;
    a{
        font-size: 13px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 22px;
        display: inline-flex;
        align-items: center;
        padding: 5px 20px;
        color: #262729;
    }
`
Footer.Box = styled(Box)
`

`
export default Footer;