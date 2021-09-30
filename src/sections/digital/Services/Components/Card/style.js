import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Card = styled(Box)`
    border-radius: 15px;
    padding-left: 35px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (min-width:575px){
        display:flex;
        align-items:center;
    }
    @media (min-width:768px) {
      padding-left: 55px;
      padding-right: 45px;
      padding-top: 40px;
      padding-bottom: 45px;
    }
`
Card.Title = styled(Heading)`
      font-size: 21px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
`
Card.Text = styled(Paragraph)`
      margin-bottom: 0;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 32px;
      opacity:.7;
`
Card.Body = styled(Box)``
Card.Icon = styled(Box)`
    margin-right: 30px;
`

export default Card;