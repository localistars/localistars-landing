import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Card = styled(Box).attrs({ className: "career-card Card" })`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 56px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: 1px solid rgba(181, 181, 181, 0.2);
  background-color: $white;
  padding: 30px 30px;
  @media (min-width: 576px) {
    padding: 26px 50px;
  }
`;

Card.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    font-size: 42px;
  }
`;

Card.List = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
Card.ListItem = styled(Box)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  margin-right: 15px;
  i {
    color: #5034fc;
    margin-right: 5px;
  }
  a {
    color: inherit;
    margin-right: 15px;
  }
`;
Card.ButtonGroup = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-direction: column;
  @media (min-width: 992px) {
    margin-top: 0px;
  }
`;
Card.Button = styled(Box)`
  border-radius: 500px !important;
  width: 134px;
  height: 50px;
  &.box-shadow {
    box-shadow: -12px 12px 50px rgb(255 87 34 / 30%);
  }
  &.hover-white {
    &:hover {
      color: #fff;
    }
  }
`;
Card.Box = styled(Box)``;

export default Card;
