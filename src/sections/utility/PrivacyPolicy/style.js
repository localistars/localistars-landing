import styled from 'styled-components';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';

const Terms = styled(Box)
`
padding-top: 20px;
padding-bottom: 20px;

@media (min-width: 768px){
    padding-top: 60px;
    padding-bottom: 60px;
}
@media (min-width: 992px){
    padding-top: 100px;
    padding-bottom: 100px;
}


`
Terms.Title = styled(Heading)
`
font-size: 32px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.4423;
margin-bottom: 20px;

@media (min-width: 576px) {
  font-size: 35px;
}
@media (min-width: 768px)
{
  font-size: 42px;
}
@media (min-width: 992px)
{
  font-size: 52px;
  margin-bottom: 42px;
}
`
Terms.TitleSmall = styled(Heading)
`
font-size: 21px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.42857;
margin-bottom: 15px;
@media (min-width: 992px){
    margin-bottom: 25px;
}
`
Terms.Text = styled(Paragraph)
`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.777777;
@media (min-width: 992px){
    font-size: 18px;
}
`
Terms.List = styled(Box)
``


Terms.ListItem = styled(Paragraph)
`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.777777;
@media (min-width: 992px){
    font-size: 18px;
}
`
Terms.ContentBox = styled(Box)
`
padding-top: 10px;
padding-bottom: 20px;
`
Terms.Content = styled(Box)
`
@media (min-width: 1200px){
    padding: 0 43px;
}
@media (min-width: 1400px){
    padding: 0 53px;
}
`


Terms.Box = styled(Box)
``


export default Terms;