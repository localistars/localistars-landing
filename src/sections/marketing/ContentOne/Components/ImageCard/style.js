import { transparentize } from 'polished';
import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';
const propToColor = (arg = '#1787FC') => transparentize(0.4, arg);

const Card = styled(Box).attrs({ className: 'card' })`
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  /* box-shadow: 0 24px 94px rgba(239, 67, 57, 0.4); */
  border-radius: 5px;
  width: 70%;
  margin-left: auto;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ff5722'}!important;
  box-shadow: ${(props) => '0 24px 94px ' + propToColor(props.backgroundColor)};
  font-size: 8px;
  @media (min-width: 480px) {
    margin-left: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
  }
  @media (min-width: 575px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 992px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 53px;
    padding-right: 30px;
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
Card.CounterBlock = styled(Box)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
`;
Card.Counter = styled(Heading)`
  font-size: 4.375em;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 0;
  margin-right: 12px;
  color: #fff;
`;
Card.Text = styled(Paragraph)`
  color: #ffffff;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.5;
  font-size: 1.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;
Card.CounterBlockIcon = styled(Paragraph)`
  min-width: 38px;
  max-width: 38px;
  min-height: 38px;
  max-height: 38px;
  border-radius: 50%;
  background-color: var(--bs-ebony-clay);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  margin-bottom: 0;
  @media (min-width: 575px) {
    margin-bottom: 13px;
  }
`;

export default Card;
