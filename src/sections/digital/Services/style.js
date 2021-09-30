import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Service = styled(Box)`
  padding-top: 55px;
  padding-bottom: 36px;

  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 130px;
    padding-bottom: 105px;
  }
`;
Service.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`;
Service.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
Service.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
`;
Service.Button = styled(Button)`
  color: #fff !important;
  border-color: #fd346e !important;
  background-color: #fd346e !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px !important;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%) !important;
    color: #fff !important;
  }
`;
Service.Box = styled(Box)``;
export default Service;
