import styled from 'styled-components';
import {
    Link
} from '~components';
import {
    Box,
    Button,
    Heading,
    Paragraph
} from '~styled';

const Footer = styled(Box)
`
padding-top: 60px;
padding-bottom: 20px;

@media (min-width: 768px) {
    padding-top: 80px;
}

@media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 20px;
}

`
Footer.Widgets = styled(Box)
`


`
Footer.Newsletter = styled(Box)
`
form {
    text-align: right;

    input {
      width: 100%;
      border: none;
      height: 56px;
      border-radius: 50px;
      background-color: #fff;
      margin-bottom: 20px;
      padding: 0 20px;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    .btn {
      width: 150px;
      height: 56px;
      border-radius: 50px;
      color: #fff;
      text-align: right;
      margin-right: auto;
    }
  }

`

Footer.Link = styled(Box)
`

`

Footer.Title = styled(Heading)
`
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    padding-bottom: 30px;
    color: #262729;
`

Footer.Text = styled(Paragraph)
`
    color: rgba(#262729, 0.7)
    margin-top: 38px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
`


Footer.Address = styled(Box).attrs({className:"list-unstyled", as:"ul"})
`
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    @media(min-width: 992px){
        margin-bottom: 0;
    }

`
Footer.AddressItem = styled(Box).attrs({className:"list-items", as:"li"})
`
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 28px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    color: rgba(38, 39, 41, 0.7) !important;
    a{
        color: rgba(38, 39, 41, 0.7) !important;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: 28px;
        text-align: left;
        transition: 0.4s;
        &:hover{
            color: #fd346e !important;
        }
    }
    i{
        margin-right: 5px;
        margin-top: 7px;
        font-size: 20px;
        width: 35px;
        color: #ff4057;
    }
    span{
        color: rgba(38, 39, 41, 0.7) !important;
        display: inline-block;
        word-break: break-all;
        cursor: pointer;
    }
`

Footer.List = styled(Box).attrs({className:"widgets-list list-unstyled", as:"ul"})
`
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    @media(min-width: 992px){
        margin-bottom: 0;
    }

`
Footer.ListItems = styled(Box).attrs({className:"list-items", as:"li"})
`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    display: flex;
    margin-bottom: 15px;
    color: rgba(38, 39, 41, 0.7) !important;
    a{
        color: rgba(38, 39, 41, 0.7) !important;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: 28px;
        text-align: left;
        transition: 0.4s;
        &:hover{
            color: #fd346e !important;
        }
    }
    i{
        margin-right: 5px;
        margin-top: 10px;
        font-size: 20px;
        width: 35px;
        color: #0abfbc;
    }
    span{
        color: rgba(38, 39, 41, 0.7) !important;
    }
`
Footer.SocialShare = styled(Box).attrs({className:"footer-social-share list-unstyled", as:"ul"})
`
    padding: 0;
    margin: 0 -10px;
    margin-bottom: 30px;
    @media(min-width: 992px){
        margin-bottom: 0;
    }

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
            color: #fd346e;
        }
    }
    &:first-child {
        a:before {
            display: none;
        }
    }
`

Footer.Gallery = styled(Box)
`
div{
    padding-left: 8.5px;
    padding-right: 8.5px;
    padding-bottom: 17px;
}

`

Footer.Copyright = styled(Box)
`
    text-align: center;
    padding-top: 25px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(38, 39, 41, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;

`

Footer.CopyrightText = styled(Box)
`
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;

`

Footer.Box = styled(Box)
`

`
export default Footer;