import styled from 'styled-components';
import { Link } from '~components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Card = styled(Box)`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 25px;

  &:hover {
    .blog-bgoverlay {
      bottom: 0;
    }
  }
`;
Card.Title = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 25px;
  margin-bottom: 19px;
  color: #fff;
  display: block;
  transition: 0.4s;
  &:hover {
    color: #ff5722;
  }
`;
Card.Badge = styled(Button)`
  background-color: #ff5722 !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: normal !important;
  line-height: 1 !important;
  min-width: 78px !important;
  height: 26px !important;
  border-radius: 15px !important;
  margin-right: 12px !important;
  color: #fff !important;
  padding: 0 !important;
  &:hover {
    color: #262729 !important;
  }
`;
Card.Date = styled(Link)`
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 22px;
  color: #fff;
  transition: 0.4s;
  &:hover {
    color: #ff5722;
  }
`;
Card.User = styled(Link)`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.7;
  padding-right: 20px;
  position: relative;
  transition: 0.4s;
  position: relative;
  i {
    font-weight: 500;
    margin-right: 7px;
    color: #ff5722;
  }
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 14px;
    background-color: #fff;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: #ff5722;
  }
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;
Card.Like = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.7;
  padding-right: 20px;
  position: relative;
  transition: 0.4s;
  color: #fff;
  position: relative;
  i {
    font-weight: 500;
    margin-right: 7px;
    color: #ff5722;
  }
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 14px;
    background-color: #fff;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    color: #ff5722;
  }
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;
Card.Comment = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.7;
  position: relative;
  transition: 0.4s;
  color: #fff;
  i {
    font-weight: 500;
    margin-right: 7px;
    color: #ff5722;
  }
  &:hover {
    color: #ff5722;
  }
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;
Card.Box = styled(Box)``;
Card.Image = styled(Box)`
  min-height: 330px;
  img {
    width: 100%;
  }
`;
Card.Top = styled(Box).attrs({ className: 'blog-top' })`
  display: flex;
  align-items: center;
`;
Card.Bottom = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

Card.OvaerlayBlock = styled(Box).attrs({ className: 'blog-bgoverlay' })`
  width: 100%;
  border-radius: 15px;
  background-size: cover;
  position: absolute;
  left: 0;
  bottom: 0px;
  padding-top: 23px;
  padding-bottom: 26px;
  padding-left: 25px;
  padding-right: 23px;
  transition: 0.4s;
  background-image: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.67) 45%,
    rgba(0, 0, 0, 0) 100%
  );
  @media (min-width: 768px) {
    padding-right: 0px;
  }
  @media (min-width: 992px) {
    padding-right: 23px;
  }
  @media (min-width: 1200px) {
    bottom: -50px;
  }
`;

export default Card;
