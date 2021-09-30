import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Content = styled(Box)`
    padding-top: 100px;
    padding-bottom: 50px;

    @media (min-width:768px) {
        padding-top: 130px;
        padding-bottom: 75px;
    }

    @media (min-width:992px) {
        padding-top: 195px;
        padding-bottom: 214px;
    }
`
Content.Title = styled(Heading)`
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 25px;

    @media (min-width:480px) {
        font-size: 45px;
    }

    @media (min-width:768px) {
        font-size: 50px;
    }

    @media (min-width:992px) {
        font-size: 60px;
        margin-bottom: 35px;
    }
`
Content.Text = styled(Paragraph)`
    /* color: #ffffff; */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.66;

    @media (min-width:575px) {
        font-size: 18px;
    }
    &:last-child {
        margin-bottom: 0;
    }
`


export default Content
