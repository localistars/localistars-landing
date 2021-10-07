import styled from 'styled-components'
import { Box, Heading, Paragraph } from '~styled'


const Widget = styled(Box)`
  display:flex;
  flex-direction: column;
  color:#fff;
  @media (min-width:480px) {
    display:flex;
    flex-direction: row;
    align-items: center;
  }

`
Widget.Icon = styled(Box)`
    min-width: 69px;
    max-width: 69px;
    min-height: 69px;
    max-height: 69px;
    border-radius: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color:${props => props.background};
    @media (min-width:480px) {
      margin-bottom: 0;
    }
    overflow: hidden;
`
Widget.Body = styled(Box)`
    @media (min-width:480px) {
      margin-left: 30px;
    }
`
Widget.Title = styled(Heading)`
    color:inherit;
    font-size: 21px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.619;
`
Widget.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.75;
    color:inherit;
    opacity:.7;
`
export default Widget;