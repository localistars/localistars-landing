import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Content = styled(Box)`
  padding-top: 60px;
  padding-bottom: 55px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 75px;
  }

  @media (min-width: 992px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  @media (min-width: 1200px) {
    padding-top: 130px;
    padding-bottom: 135px;
  }
`;
Content.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`;
Content.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
Content.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
Content.Button = styled(Button)`
  color: #fff !important;
  border-color: #fd346e !important;
  background-color: #fd346e !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px!important;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
    color: #fff;
  }
`;

Content.Images = styled(Box)`
  display: flex;
  align-items: center;
  @media (min-width: 575px) {
    right: -15%;
  }
  @media (min-width: 768px) {
    right: -25%;
  }
  @media (min-width: 1200px) {
    right: -20%;
  }
`;

Content.ImageOne = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
Content.ImageOneInner = styled(Box)`
  transform-origin: top left;
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -60%;
    width: 200%;
    transform: skewX(15deg);
  }
`;
Content.ImageTwo = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
Content.ImageTwoInner = styled(Box)`
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -60%;
    width: 200%;
    transform: skewX(15deg);
  }
`;

Content.Box = styled(Box)``;

export default Content;
