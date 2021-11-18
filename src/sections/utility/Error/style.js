import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const ErrorPage = styled(Box)`
  padding-top: 60px;
  padding-bottom: 50px;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 70px;
  }
  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }
`;
ErrorPage.BigTitle = styled(Heading)`
  font-size: 50px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -2px;
  line-height: 1.27272;
  color: #165c66;
  margin-bottom: 0;
  @media (min-width: 575px) {
    font-size: 60px;
  }
  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 992px) {
    font-size: 110px;
  }
`;
ErrorPage.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  margin-bottom: 15px;
  color: #165c66;
  position: relative;

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`;
ErrorPage.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.777777;
  margin-bottom: 33px;
  color: rgba(37, 55, 63, 0.7);
`;

ErrorPage.Image = styled(Paragraph)``;
ErrorPage.ButtonGroup = styled(Box)`
  text-align: center;
`;
ErrorPage.Button = styled(Button)`
  margin: 0 10px;

  &.btn-1 {
    background-color: #165c66;
    min-width: 142px;
    height: 56px;
    color: #fff;
    border-radius: 500px;
    box-shadow: -12px 12px 50px rgba(22, 92, 102, 0.3);
    &:hover {
      background-color: #fff;
      color: #165c66;
      border: 1px solid #165c66;
    }
  }
  &.btn-2 {
    border: 1px solid #165c66;
    min-width: 164px;
    height: 56px;
    border-radius: 500px;
    &:hover {
      color: #fff;
      background-color: #165c66;
      box-shadow: -12px 12px 50px rgba(22, 92, 102, 0.3);
    }
  }
`;
ErrorPage.Box = styled(Box)``;

export default ErrorPage;
