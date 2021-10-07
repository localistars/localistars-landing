import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const About = styled(Box)`
  padding-top: 60px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }
`;
About.Content = styled(Box)``;
About.Title = styled(Heading)`
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
About.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
About.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
`;
About.ButtonGroup = styled(Box)`
  margin-right: -17.0656px;
  display: flex;
  flex-wrap: wrap;
`;

About.Image = styled(Box)`
  .video-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ff5722;
    border-color: transparent;

    min-width: 76px;
    max-width: 76px;
    min-height: 76px;
    max-height: 76px;
    @media (min-width: 575px) {
      min-width: 96px;
      max-width: 96px;
      min-height: 96px;
      max-height: 96px;
    }
  }
`;

About.Button = styled(Button)`
  margin-right: 15px;
  border-radius: 500px!important;
  color: #fff;
  min-width: 140px;
  height: 56px;
  margin-top: 15px;
  font-size: 14px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    min-width: 165px;
    height: 60px;
  }
  &.btn-1 {
    box-shadow: 4px 4px 56px rgba(255, 87, 34, 0.3)!important;
    color: #fff !important;
    &:hover {
      box-shadow: none;
      color: #fff !important;
    }
  }
  &.btn-2 {
    box-shadow: 4px 4px 56px rgb(80 52 252 / 0%);
    &:hover {
      box-shadow: 4px 4px 56px rgb(80 52 252 / 30%);
    }
  }
`;

About.Box = styled(Box)``;

export default About;
