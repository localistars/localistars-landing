import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Faq = styled(Box)`
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 60px;
  }
  @media (min-width: 992px) {
    padding-top: 113px;
    padding-bottom: 100px;
  }
`;
Faq.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 992px) {
    font-size: 42px;
  }
`;
Faq.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.3;
`;
Faq.ButtonGroup = styled(Box)`
  text-align: center;
`;
Faq.Button = styled(Button)`
  color: #5034fc;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    color: #5034fc;
  }
`;
Faq.Box = styled(Box)``;

export default Faq;
