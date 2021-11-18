import { transparentize } from 'polished';
import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';
const propToColor = (color, opacity) => transparentize(opacity, color);

const Card = styled(Box).attrs({ className: 'card' })`
  box-shadow: 0 24px 94px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1;
  padding-bottom: 22px;
  border: none !important;
  background: #fff;
`;

Card.Text = styled(Paragraph)`
  color: ${(props) => (props.fontColor ? props.fontColor : '#25373f')};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.66666;
  margin-bottom: 0;
`;
Card.SingleBlock = styled(Box)`
  margin-bottom: 0;
  padding-top: 20px;
  padding-bottom: 30px;
  margin: 0 55px;
  border-bottom: ${(props) =>
    props.border ? props.border + ' dotted rgba(37, 55, 63, 0.15)' : null};
  ${Card.Text} {
    opacity: 0.7;
  }
`;

Card.CardBlock = styled(Box)`
  /* box-shadow: 0 10px 20px rgba(34, 204, 116, 0.25); */
  border-radius: 10px;
  margin-bottom: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
  margin: 0 22px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#22cc74'};
  box-shadow: ${(props) =>
    props.backgroundColor
      ? '0 10px 20px ' + propToColor(props.backgroundColor, '.40')
      : '0 10px 20px ' + propToColor('#22cc74', '.40')};
`;

Card.Title = styled(Heading)`
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.47619;
  color: ${(props) => (props.fontColor ? props.fontColor : '#25373f')};
  @media (min-width: 992px) {
    font-size: 42px;
  }
`;

export default Card;
