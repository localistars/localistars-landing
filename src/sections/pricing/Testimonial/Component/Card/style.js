import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Card = styled(Box).attrs({className:"card-testimonial"})`
    border: 0;
    border-radius: 15px;
    transition: 0.4s;

    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    @media (min-width:575px)  {
        padding-top: 45px;
        padding-left: 45px;
        padding-right: 45px;
        padding-bottom: 40px;
    }
    &:hover{
        background-color:${props=>props.hoverbackground};
        color:#fff;
        .card-icon{
            color:inherit
        }
    }



`
Card.Image = styled(Box)`
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 500px;
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
    @media (min-width:480px) {
    margin-bottom: 0;
    }
    img {
    width: 100%;
    }
`
Card.Title = styled(Heading)`
color:inherit;
font-size: 15px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.73333;
margin-bottom: 0;
`
Card.Text = styled(Paragraph)`
color: inherit;
font-size: 16px;
font-weight: 400;
line-height: 30px;
`
Card.Icon = styled(Box).attrs({className:"card-icon"})`
color: #099a97;
font-size: 36px;
font-weight: 400;
letter-spacing: normal;
line-height: normal;

`

Card.UserPosition = styled(Paragraph)`
font-size: 13px;
font-weight: 400;
letter-spacing: normal;
line-height: 22px;
opacity:.7;

`
Card.Top = styled(Box)`
display:flex;
justify-content: space-between;
align-items:center;
`
Card.UserBlock = styled(Box)`
display:flex;
flex-wrap:wrap;
align-items:center;
`
Card.Box = styled(Box)`

`



export default Card;

