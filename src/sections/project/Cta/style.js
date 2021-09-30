import styled from 'styled-components'
import { Link } from '~components'
import { Box, Button, Heading } from '~styled'

const Cta = styled(Box)`
    padding-top: 50px;
    padding-bottom: 0px;

    @media (min-width:768px) {
        padding-top: 100px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 123px;
        padding-bottom: 135px;
    }
`

Cta.Button = styled(Link).attrs({className:"btn"})`
    padding: 10px 0 !important;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    color: #000;
    background-color: #fff;
    border-color: #fff;
    width: 190px;
    height: 60px;
    border-radius:500px;
    font-size: 15px;
    font-weight: 500;
`
Cta.Title= styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.2083;
    font-size: 38px;
    margin-bottom: 40px;
    text-align: center;
    @media (min-width:480px) {
      padding: 0 30px;
    }
    @media (min-width:768px) {
      padding: 0;
    }

    @media (min-width:992px) {
      font-size: 48px;
      margin-bottom: 0;
      text-align: left;
    }

    @media (min-width:1200px) {
      padding-right: 40px;
    }
`
Cta.MainBox= styled(Box)`
    border-radius: 20px;
  padding: 40px 40px;
  overflow: hidden;
  box-shadow: 0 44px 34px rgba(37, 55, 63, 0.1);
  z-index: 0;
  position: relative;
  @media (min-width:768px) {
    padding-top: 72px;
    padding-bottom: 80px;
    padding-left: 75px;
    padding-right: 95px;
  }

  @media (min-width:992px) {
    padding-bottom: 75px;
  }

  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background-image: ${props => `url(${props.backgroundShape.src})`};
    background-position: right;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    /* display: none; */
    z-index: -1;

    @media (min-width:768px) {
      display: block;
      right: -25%;
      width: 110%;
    }

    @media (min-width:992px) {
      right: -40%;
    }

    @media (min-width:1200px) {
      width: 50%;
      right: 0;
    }
  }
`
Cta.Box= styled(Box)`
    
`

export default Cta;