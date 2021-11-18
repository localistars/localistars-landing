import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Service = styled(Box)`
  padding-top: 50px;
  padding-bottom: 36px;

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 100px;
  }
`;
Service.Title = styled(Heading)`
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
Service.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;

Service.Box = styled(Box)``;

export default Service;
