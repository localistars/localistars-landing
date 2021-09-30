import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';


const Card = styled(Box).attrs({className:"card-testimonial"})`
    border: none;
    border-radius: 15px;
    position: relative;
    z-index: 0;
    color:#262729;
    background:transparent;
    padding-top: 30px;

`
Card.Body = styled(Box)`
   padding-top: 55px;
    padding-bottom: 25px;
    padding-left: 40px;
    padding-right: 30px;
    border-radius: 15px;
`
Card.Image = styled(Box)`
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 500px;
    margin-right: 15px;
    img{
        width: 100%;
    }
`
Card.Title = styled(Heading)`
font-size: 18px;
font-weight: 500;
letter-spacing: normal;
line-height: 25px;
margin-bottom: 0;
color: inherit;
`
Card.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 25px;
    color: inherit;
`
Card.Icon = styled(Box).attrs({className:"card-icon"})`
    max-width: 60px;
    min-width: 60px;
    max-height: 60px;
    min-height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color:#5034fc;
    border-radius: 50%;
    font-size: 20px;
    position: absolute;
    top: 0px;
    z-index: 9;
    left:40px;


`

Card.UserPosition = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height:1.2;
    opacity:.7;
`
Card.Top = styled(Box)`
display:flex;
justify-content: space-between;
align-items:center;
`
Card.UserTexts = styled(Box)`
position: relative;
top: 9px;
`
Card.UserBlock = styled(Box)`
display:flex;
flex-wrap:wrap;
align-items:center;
`
Card.Box = styled(Box)`

`

export default Card;