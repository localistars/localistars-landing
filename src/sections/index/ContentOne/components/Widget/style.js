import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Widget = styled(Box)`
  display: block;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }

`

Widget.Icon = styled(Box)`
  margin: 0 0;
  margin-bottom: 32px;
  font-size: 20px;
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#057d7b;
  color:#fff;
`

Widget.Title = styled(Heading)`
font-size: 21px;
font-weight: 500;
letter-spacing: normal;
line-height: 30px;
margin-bottom: 5px;
`
Widget.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 30px;
`

Widget.Box = styled(Box)`

`


export default Widget;