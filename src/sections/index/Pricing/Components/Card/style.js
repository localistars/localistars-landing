import styled from "styled-components";
import { Box, Button, Heading, Paragraph } from "~styled";
import { transparentize } from "polished";
const propToColor = (arg = "#442cd6") => transparentize(0.7, arg);
const Card = styled(Box).attrs({ className: "card" })`
  padding-bottom: 45px;
  border: none;
  border-radius: 15px;
  transition: 0.4s;
  margin-bottom: 25px;
  text-align: center;
  color: #262729;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0%);
  &:hover {
    box-shadow: 0 4px 10px rgb(0 0 0 / 5%);
    .btn {
      opacity: 1 !important;
    }
  }
`;
Card.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.3125;
  margin-bottom: 18px;
  color: #fff;
`;
Card.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  padding-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 1px;
    transform: translateX(-50%);
  }
`;

Card.Price = styled(Box).attrs({ className: "price-block" })`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
`;
Card.PriceText = styled(Box)`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22px;
  color: inherit;
  transition: 0.4s;
  align-self: ${(props) => props.alignSelf};
`;
Card.PriceTextTwo = styled(Box)`
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22px;
  color: inherit;
  transition: 0.4s;
  align-self: ${(props) => props.alignSelf};
  display: block;
  position: relative;
  top: -5px;
`;
Card.List = styled(Box)`
  margin-bottom: 38px;
  padding-left: 30px;
  padding-right: 30px;
`;
Card.ListItem = styled(Box)`
  color: inherit;
  opacity: 0.7;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  margin-bottom: 13px;
  text-align: left;
  position: relative;
  padding-left: 55px;
  &:before {
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 0;
    left: 20px;
    font-weight: 700;
    color: ${(props) => (props.iconColor ? props.iconColor : "#099a97")};
  }
`;
Card.Button = styled(Button)`
  border-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5034fc"} !important;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#099a97"} !important;
  box-shadow: ${(props) =>
    "0 4px 4px " + propToColor(props.backgroundColor)} !important;
  color: white !important;
  transition: 0.3s !important;
  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#099a97"};
    background: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#442cd6"};
    box-shadow: ${(props) =>
      "0 4px 4px " + propToColor(props.hoverBackgroundColor)};
  }
`;
Card.Amount = styled(Box)`
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 0;
  transition: 0.4s;
  color: inherit;
`;

Card.Top = styled(Box)`
  padding-bottom: 35px;
  padding-top: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
Card.Box = styled(Box)``;
export default Card;
