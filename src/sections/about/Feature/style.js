import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';
const Feature = styled(Box)`
padding-top: 55px;
padding-bottom: 60px;
@media (min-width:768px) {
  padding-top: 75px;
  padding-bottom: 80px;
}

@media (min-width:992px) {
  padding-top: 135px;
  padding-bottom: 110px;
}
`


Feature.Text = styled(Paragraph)``

Feature.Image = styled(Box)`
@media (min-width: 992px) {
    margin-right: 30px;
}
}
`
Feature.Contentlist = styled(Box)``

Feature.List = styled(Box)`
        position: relative;
        z-index: 1;
        padding-left: 30px;
        margin-bottom: 20px;
        color: var(--color-headings-2);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.75;

&:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 18px;
    background-color: #ff5722;
    left: 10px;
    top: 4px;
}
`
Feature.Box = styled(Box)``


export default Feature;