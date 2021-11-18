import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Widget = styled(Box)`
  margin-bottom: 40px;
  display: flex;
  @media (min-width: 992px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1200px) {
    margin-right: 50px;
  }

  @media (min-width: 1600px) {
    margin-right: 150px;
  }
`;

Widget.Icon = styled(Box)`
  min-width: 37px;
  max-width: 37px;
  min-height: 37px;
  max-height: 37px;
  background-color: #ff5722;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
Widget.Content = styled(Box)``;
Widget.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
`;
Widget.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
`;
Widget.Box = styled(Box)``;

export default Widget;
