import styled from 'styled-components';
import { Link } from '~components';
import { Box } from '~styled';

const Footer = styled(Box)`
  padding-top: 80px;
  padding-bottom: 40px;
`;
Footer.Widgets = styled(Box)``;
Footer.Logo = styled(Box)`
  text-align: center;
`;

Footer.Link = styled(Box)``;

Footer.Text = styled(Box)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  color: rgba(38, 39, 41, 0.7);
  margin-bottom: 16px;
  text-align: center;
`;

Footer.SocialShare = styled(Box).attrs({
  className: 'footer-social-share list-unstyled',
  as: 'ul'
})`
  padding: 0;
  margin: 0 -10px;
  margin-bottom: 60px;
`;
Footer.SocialShareItem = styled(Box).attrs({
  className: 'list-items',
  as: 'li'
})`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;

  a {
    min-width: 36px;
    max-width: 36px;
    min-height: 36px;
    max-height: 36px;
    box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
    background-color: #fff;
    color: #262729;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.4s;
    &:hover {
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
`;

Footer.Copyright = styled(Box)`
  text-align: center;
  padding-bottom: 40px;
  display: block;
`;

Footer.CopyrightText = styled(Box)`
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22px;
`;

Footer.Menu = styled(Box).attrs({
  className: 'footer-menu list-unstyled',
  as: 'ul'
})`
  padding: 0;
  margin: 0;
  text-align: center;
  margin-bottom: 0;
`;

Footer.MenuItems = styled(Box).attrs({
  className: 'footer-menu__li',
  as: 'li'
})`
  display: inline-block;
  a {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    display: inline-flex;
    align-items: center;
    padding: 5px 20px;
    color: #262729;
    transition: 0.4s;
    &:hover {
      color: #ff5722;
    }
  }
`;
Footer.Box = styled(Box)``;
export default Footer;
