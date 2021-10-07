import styled from 'styled-components'
import { Box, Heading, Paragraph } from '~styled'

 const Widget = styled(Box)`
    margin-bottom: 35px;
`
Widget.Count = styled(Heading)`
    color: rgba(255, 255, 255, 0.3);
    font-size: 60px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 25px;
    @media (min-width:992px) {
        margin-bottom: 52px;
    }
`
Widget.Title = styled(Heading)`
    color:#fff;
   font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.619047;
    margin-bottom: 25px;
`
Widget.Text = styled(Paragraph)`
    color:#fff;
   font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.66666;
    margin-bottom: 0;
    opacity:.7;
`

export default Widget;