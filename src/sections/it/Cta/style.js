import styled from "styled-components"
import { Box, Heading, Button, Paragraph } from "~styled"

const Cta = styled(Box)`
  padding-top: 60px;
  padding-bottom: 20px;
  background-position: center;
background-size: cover;
background-repeat:no-repeat;
z-index:1;
  @media (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }

  &::before {
    content: "";
    background-color: rgba(80, 52, 252, 0.9);
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
`
Cta.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`
Cta.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
`

Cta.Button = styled(Button)`
  color: #fff !important;
  background-color: #ff5722!important;
    border-color: #ff5722!important;
  box-shadow: -12px 12px 50px rgb(253 52 110 / 30%)!important;
  border-radius: 500px!important;
  min-width:180px!important;
  min-height:56px;
  &:hover {
    box-shadow: 0 20px 20px rgb(255 75 96 / 0%)!important;
    color: #fff !important;
  }
`
Cta.Box = styled(Box)``

export default Cta
