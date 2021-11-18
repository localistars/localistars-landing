import styled from 'styled-components';
import { transparentize } from 'polished';
import { Box, Heading, Paragraph } from '~styled';

const propToColor = (arg = '#ff1e38') => transparentize(0.6, arg);
const Widget = styled(Box).attrs({ className: 'content-Widget' })`
  color: #262729;
  border: none;
  margin-bottom: 30px;
  transition: 0.4s;
  display: flex;
  padding-right: 50px;
  background-color: transparent;
`;
Widget.Icon = styled(Paragraph)`
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  margin-right: 25px;
  margin-bottom: 30px;
  color: ${(props) => (props.iconDark ? '#000' : '#fff')};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ff1e38'};
  box-shadow: ${(props) => '0 4px 65px ' + propToColor(props.backgroundColor)};
`;
Widget.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
`;
Widget.Text = styled(Paragraph)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.86666;
  margin-bottom: 26px;
`;
Widget.Box = styled(Box)``;
export default Widget;
