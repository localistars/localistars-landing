import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Portfolio = styled(Box)`
  padding-top: 55px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 60px;
  }

  @media (min-width: 992px) {
    padding-top: 135px;
    padding-bottom: 110px;
  }
`;
Portfolio.Title = styled(Heading)`
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

Portfolio.Subtitle = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
Portfolio.Nav = styled(Box)`
  display: flex !important;
  flex-wrap: wrap !important;
  @media (min-width: 768px) {
    flex-wrap: nowrap !important;
  }
  @media (min-width: 992px) {
    justify-content: flex-end !important;
  }
`;
Portfolio.NavItem = styled(Button)`
  font-size: 15px !important;
  font-weight: 500 !important;
  letter-spacing: normal;
  line-height: 1.2;
  color: #262729;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  text-transform: capitalize;
  &:hover {
    color: #fd346e !important;
  }
  &:focus {
    box-shadow: none !important;
  }
`;

Portfolio.Box = styled(Box)``;

export default Portfolio;
