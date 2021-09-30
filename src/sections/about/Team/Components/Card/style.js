import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Card = styled(Box).attrs({className:"team-card"})`
    position: relative;
    
    border-radius: 15px;
    overflow: hidden;
    border: none;
    cursor: all-scroll;
    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }
 
    .card-innerblock{
      position: absolute;
      left: 0;
      bottom:0;
      transform: translateY(100%);
    }
    &:hover {
      .card-innerblock {
        transform: translateY(0);
      }
    }

    
`
Card.InnerBlock = styled(Box).attrs({className: "card-innerblock"})`  
    background: linear-gradient(
      360deg,
      #ff794e 0%,
      rgba(255, 121, 78, 0.69) 38.45%,
      rgba(253, 52, 110, 0) 79.35%,
      rgba(253, 52, 110, 0) 111.11%
    );
    
      width: 100%;
      height: 50%;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      transition: 0.5s;
    > div{
        position: absolute;
        left: 0;
        bottom: 0;
        margin-left: 45px;
        margin-bottom: 15px;
    }
`


Card.Title = styled(Heading)`
          font-size: 21px;
          font-weight: 500;
          letter-spacing: normal;
          line-height: 30px;
          color: var(--bs-white);
          margin-bottom: 0;
`
Card.Text = styled(Paragraph)`
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;
    margin-bottom: 0;
    opacity:.7;
`
Card.Social = styled(Box)`
  margin-top: 15px;
`
Card.SocialItem = styled(Box)`
    color: #fff;
    padding-right: 20px;
    transition-duration: 0.4s;
`

export default Card;