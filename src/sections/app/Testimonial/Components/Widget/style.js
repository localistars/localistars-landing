import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Widget = styled(Box)`

`

Widget.ProfileBlock = styled(Box)`
    display: flex;
    align-items: center;


`
Widget.Title = styled(Heading)`
font-size: 18px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.619;
margin-bottom: 0;
color:#25373f;
@media (min-width:992px){
  font-size: 21px;
}

`
Widget.Text = styled(Paragraph)`
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 34px;
margin-bottom: 50px;
color:#25373f;
margin-right: 50px;
@media (min-width: 768px){
  margin-right: 0px;
}
@media (min-width: 992px){
  margin-right: 5px;
}

@media (min-width: 1200px){
  font-size: 21px;
}


`
Widget.UserPosition = styled(Paragraph)`
margin-bottom: 0;
font-weight: 400;
font-size: 16px;
letter-spacing: normal;
line-height: 1.75;
color:inherit;
`

Widget.Image = styled(Box)`
        margin-right: 15px;
  >div{
    border-radius: 500px;
    overflow:hidden;
    min-width: 67px;
    max-width: 67px;
    min-height: 67px;
    max-height: 67px;
  }
`
Widget.Rating = styled(Box)`
    display: flex;
    font-size: 28px;
`
Widget.RatingSingle = styled(Box)`
    color: ${props => props.active ? "#ff971d":"inherit"};
    margin-right: 5px;
    font-size: inherit;
`
Widget.UserBlock = styled(Box)``
Widget.Box = styled(Box)``


export default Widget;