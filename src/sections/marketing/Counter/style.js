import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Counter = styled(Box)`
  padding-top: 45px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-top: 125px;
    padding-bottom: 111px;
  }
`;
Counter.Single = styled(Box).attrs({ className: 'counter-single' })`
  margin-bottom: 30px;
  flex-direction: column;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
Counter.Block = styled(Box)``;
Counter.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.13461;
  margin-bottom: 25px;

  @media (min-width: 76px) {
    font-size: 42px;
  }

  @media (min-width: 992px) {
    font-size: 52px;
  }
`;
Counter.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.5;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 21px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;
Counter.Box = styled(Box)``;

export default Counter;
