import styled from 'styled-components';
import { Link } from '~components';
import { Box, Button, Heading, Paragraph } from '~styled';

const Footer = styled(Box)`
  background-color: #f3f4f6;
  padding-top: 60px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 20px;
  }
`;
Footer.Widgets = styled(Box)``;
Footer.Newsletter = styled(Box)`
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
      background-color: #ff5722;
      border-color: #ff5722;
    }
  }
`;
Footer.NewsletterBtn = styled(Button)`
  box-shadow: 0 10px 20px rgb(253 52 110 / 25%);
`;

Footer.Link = styled(Box)``;

Footer.Title = styled(Heading)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  margin-bottom: 25px;
  color: #262729;
`;

Footer.Text = styled(Paragraph)`
  color: rgba(#262729, 0.7);
  margin-top: 38px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
`;

Footer.Address = styled(Box).attrs({ className: 'list-unstyled', as: 'ul' })`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
Footer.AddressItem = styled(Box).attrs({ className: 'list-items', as: 'li' })`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  color: rgba(38, 39, 41, 0.7) !important;
  a {
    color: rgba(38, 39, 41, 0.7) !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    transition: 0.4s;
    &:hover {
      color: #fd346e !important;
    }
  }
  i {
    margin-right: 5px;
    margin-top: 10px;
    font-size: 20px;
    width: 35px;
    color: #0abfbc;
  }
  span {
    color: rgba(38, 39, 41, 0.7) !important;
    display: inline-block;
    word-break: break-all;
    margin-right: 15px;
  }
`;

Footer.List = styled(Box).attrs({
  className: 'widgets-list list-unstyled',
  as: 'ul'
})`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
Footer.ListItems = styled(Box).attrs({ className: 'list-items', as: 'li' })`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  display: flex;
  margin-bottom: 15px;
  color: rgba(38, 39, 41, 0.7) !important;
  a {
    color: rgba(38, 39, 41, 0.7) !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    transition: 0.4s;
    &:hover {
      color: #fd346e !important;
    }
  }
  i {
    margin-right: 5px;
    margin-top: 10px;
    font-size: 20px;
    width: 35px;
    color: #0abfbc;
  }
  span {
    color: rgba(38, 39, 41, 0.7) !important;
  }
`;
Footer.SocialShare = styled(Box).attrs({
  className: 'footer-social-share list-unstyled',
  as: 'ul'
})`
  padding: 0;
  margin: 0 -10px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
Footer.SocialShareItem = styled(Box).attrs({
  className: 'list-items',
  as: 'li'
})`
  display: inline-block;
  padding: 0 10px;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 25px;
    min-height: 25px;
    padding-left: 0;
    border-radius: 500px;
    color: #262729;
    font-size: 15px;
    transition: 0.4s;
    &:hover {
      color: #fd346e;
    }
  }
`;

Footer.Copyright = styled(Box)`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(38, 39, 41, 0.1);
`;

Footer.CopyrightText = styled(Box)`
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22px;
`;

Footer.Box = styled(Box)``;
export default Footer;
