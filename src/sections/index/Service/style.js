import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Service = styled(Box)`
    padding-top: 55px;
    padding-bottom: 55px;
    position: relative;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 25px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 113px;
    }
`
Service.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;

    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
    }

    @media (min-width:992px) {
      font-size: 60px;
    }
`
Service.Shape = styled(Heading)`
     position: absolute;
    top: 26%;
    left: -6%;
    width: 10%;
`
Service.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.61904;
    margin-top: 15px;
    margin-bottom: 0;

    @media (min-width:768px) {
      font-size: 21px;
    }

    @media (min-width:992px) {
      margin-top: 0;
    }
`
Service.Content = styled(Box)`
     margin-top: 80px;
    @media (min-width:992px) {
        margin-top: 0;
    }
`
Service.Box = styled(Box)`
    
`
export default Service
