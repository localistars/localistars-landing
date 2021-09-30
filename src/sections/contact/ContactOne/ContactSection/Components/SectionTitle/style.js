import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`

`
SectionTitle.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.66666;

`
SectionTitle.Subtitle = styled(Heading)`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    display: inline-block;

`
SectionTitle.Main = styled(Heading)`
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.20689;
    margin-bottom: 22px;

@media (min-width:480px) {
    font-size: 38px;
}
@media (min-width:768px) {
    font-size: 48px;
}

@media (min-width:1400px) {
    font-size: 58px;
}

`
export default SectionTitle;