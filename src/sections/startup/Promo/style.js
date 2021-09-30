import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Promo = styled(Box)`
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-bottom: 100px;
  }

  .promo {
    &--box-1 {
      box-shadow: 0 4px 40px rgba(80, 52, 252, 0.3);
    }
    &--box-2 {
      box-shadow: 0 4px 40px rgba(0, 0, 0, 0.2);
    }
  }
  &:before {
    background: ${(props) =>
      props.backgroundHalfColor ? props.backgroundHalfColor : "#fff"};
    content: "";
    top: 0;
    left: 0;
    height: 25%;
    width: 100%;
    position: absolute;
  }
`;

Promo.Content = styled(Box)`
  position: relative;
  border-radius: 15px;
  padding: 30px 30px;
  @media (min-width: 768px) {
    padding: 60px 70px;
  }
`;
Promo.SectionContent = styled(Box)``;
Promo.Subtitle = styled(Heading)`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
  position: relative;
  padding-left: 0 !important;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`;
Promo.Title = styled(Heading)`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 45px;
  @media (min-width: 992px) {
    font-size: 36px;
  }
`;
Promo.Newsletter = styled(Box)`
  border-radius: 75px;
  max-width: 516px;
  margin: auto;
`;
Promo.InputBox = styled(Box)`
  position: relative;
  .form-control {
    width: 100%;
    border-radius: 500px;
    min-height: 50px;
    padding-left: 30px;
    padding-right: 30px;
    color: #fff !important;
    border: 0;
    background-color: rgba(255, 255, 255, 0.4);
    @media (min-width: 480px) {
      min-height: 57px;
      padding-right: 60px;
    }
    &:focus {
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .btn {
    position: absolute;
    right: -1px;
    top: 3px;
  }
`;
Promo.Input = styled(Box)``;
Promo.Button = styled(Button)`
  min-width: 50px !important;
  max-width: 50px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  border-radius: 500px !important;
`;
Promo.SectionContent = styled(Box)``;
Promo.ButtonTwo = styled(Button)`
  min-width: 180px;
  height: 56px;
  background-color: #402aca !important;
  border-radius: 500px;
  color: #fff !important;
  box-shadow: -12px 20px 50px rgb(80 52 252 / 30%);
  &:hover {
    box-shadow: -12px 20px 50px rgb(80 52 252 / 0%);
    color: #fff !important;
  }
`;
Promo.Box = styled(Box)``;

export default Promo;
