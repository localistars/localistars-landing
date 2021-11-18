import styled from 'styled-components';
import { Box, Button, Heading, Paragraph } from '~styled';

const Card = styled(Box).attrs({ className: 'card' })`
  padding-bottom: 45px;
  border: none;
  border-radius: 15px;
  transition: 0.4s;
  margin-bottom: 25px;
  text-align: center;
  color: #262729;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0%);
  &:hover {
    box-shadow: 0 4px 10px rgb(0 0 0 / 5%);
    .btn {
      opacity: 1 !important;
    }
  }
`;
Card.Title = styled(Heading)`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 40px;
  margin-bottom: 8px;
  color: inherit;
`;
Card.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  color: inherit;
  opacity: 0.7;
`;

Card.Price = styled(Box).attrs({ className: 'price-block' })`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: inherit;
`;
Card.PriceText = styled(Box)`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: normal;
  color: inherit;
  transition: 0.4s;
  align-self: ${(props) => props.alignSelf};
`;
Card.List = styled(Box)`
  margin-bottom: 38px;
  padding-left: 30px;
  padding-right: 30px;
`;
Card.ListItem = styled(Box)`
  color: inherit;
  opacity: 0.7;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  margin-bottom: 5px;
`;
Card.Button = styled(Button)`
  opacity: 0.7 !important;
  transition: 0.4s;
  &:hover {
    opacity: 1 !important;
  }
`;
Card.Amount = styled(Box)`
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 0;
  transition: 0.4s;
  color: inherit;
`;

Card.Top = styled(Box)`
  padding-bottom: 40px;
  padding-top: 35px;
  padding-left: 30px;
  padding-right: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
Card.Box = styled(Box)``;
export default Card;
