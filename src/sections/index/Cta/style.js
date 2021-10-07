import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Cta = styled(Box)`
  padding-top: 60px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 110px;
  }
`;

Cta.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  color: #262729;

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`;
Cta.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
`;
Cta.ButtonGroup = styled(Box)``;
Cta.Button = styled(Button)`
  margin: 0 8px;
  margin-bottom: 10px;
  font-size: 14px;
  min-width: 170px;
  border-radius: 500px !important;
  height: 56px;
  i {
    margin-right: 8px;
  }
  &.box-shadow-1 {
    box-shadow: 0 10px 20px rgb(255 114 114 / 60%);
  }
  &.box-shadow-2 {
    box-shadow: 0 10px 20px rgb(9 154 151 / 60%);
  }
`;
Cta.Box = styled(Box)``;

export default Cta;
