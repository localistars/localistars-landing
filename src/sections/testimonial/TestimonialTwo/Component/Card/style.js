import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';

import { transparentize, rgba } from 'polished';
const propToColor = (arg = '#1787FC') => transparentize(0.7, arg);

const Card = styled(Box).attrs({ className: 'card card--testimonial' })`
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  border-radius: 15px;
  transition: 0.4s;
  margin-bottom: 25px;
  border: none;
  color: #262729;
  @media (min-width: 420px) {
    padding-top: 45px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 40px;
  }
  &:hover {
    background-color: #5034fc;
    box-shadow: 0 23px 45px rgba(80, 52, 252, 0.25);
    color: #fff;
    .card__icon {
      color: #fff;
    }
  }
`;
Card.Image = styled(Box)`
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 500px;
  width: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (min-width: 420px) {
    margin-bottom: 0;
  }

  img {
    width: 100%;
  }
`;
Card.UserBody = styled(Box)``;
Card.Body = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
Card.Title = styled(Heading)`
  color: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.73333;
  margin-bottom: 0;
`;
Card.Position = styled(Paragraph)`
  opacity: 0.7;
  color: inherit;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 22px;
  margin-bottom: 0;
`;
Card.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 0;
  color: inherit;
`;
Card.Button = styled(Box)`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: inherit;
  transition: 0.4s;
`;
Card.Icon = styled(Box).attrs({ className: 'card__icon', as: 'span' })`
  color: #6001d3;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  transition: 0.4s;
`;

Card.UserInfo = styled(Box)`
  display: flex;
  align-items: center;
`;
Card.Box = styled(Box)``;

export default Card;
