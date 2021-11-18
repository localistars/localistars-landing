import styled from 'styled-components';
import { Link } from '~components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Widgets = styled(Box)``;
Widgets.MetaBox = styled(Box)`
  margin-bottom: 33px;
`;
Widgets.Image = styled(Box)`
  margin-right: 40px;
  width: 90px;
  height: 90px;
  border-radius: 5px;
`;
Widgets.Content = styled(Box)``;
Widgets.UserInfo = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 18px;
`;
Widgets.MetaDetails = styled(Box)``;
Widgets.UserName = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
  color: #262729;
  margin-bottom: 0;
  display: inline-block;
`;

Widgets.Box = styled(Box)``;
Widgets.Date = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  color: rgba(38, 39, 41, 0.7);
  display: inline-block;
  margin-right: 7px;
`;
Widgets.Time = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  color: rgba(38, 39, 41, 0.7);
  display: inline-block;
  margin-left: 7px;
`;
Widgets.Reply = styled(Paragraph)`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 28px;
  color: #5034fc;
  display: inline-block;
`;
Widgets.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  color: rgba(38, 39, 41, 0.7);
`;

export default Widgets;
