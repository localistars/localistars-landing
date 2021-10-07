import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`

`
SectionTitle.Text = styled(Paragraph)`
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.77777;
color:inherit;

`
SectionTitle.Subtitle = styled(Heading)`
color: #ff5722;
font-size: 18px;
font-weight: 500;
letter-spacing: normal;
line-height: 28px;
position: relative;
display: inline-block;
    &.black{
        color:#262729;
    }
`
SectionTitle.Main = styled(Heading)`
font-size: 32px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.38095;
@media (min-width:768px) {
    font-size: 33px;
}

@media (min-width:1200px) {
    font-size: 45px;
}

`
export default SectionTitle;