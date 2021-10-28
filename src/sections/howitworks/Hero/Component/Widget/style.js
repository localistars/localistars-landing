import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';

 const Widget = styled(Box)`
 color:#25373f;
    .widget-icon{
        background-color: ${props => props.iconColor ? props.iconColor : "#ffd166"};
    }
`
Widget.Body = styled(Box)`
`
Widget.Icon = styled(Box).attrs({className:"widget-icon"})`
    min-width: 65px;
    min-height: 65px;
    max-width: 65px;
    max-height: 65px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 65px;
    > div {
        position: absolute;
        bottom: -18%;
        right: -22%;
        width: 100%;
    }
`
Widget.Title = styled(Heading)`
   font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 34px;
    margin-bottom: 16px;
    color:inherit;
`
Widget.Text = styled(Paragraph)`
    color:inherit;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.75;
    opacity:.7;
`



export default Widget;