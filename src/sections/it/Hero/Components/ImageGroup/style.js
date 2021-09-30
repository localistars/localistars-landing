import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const HeroImageGroup = styled(Box).attrs({className:"welcome-image-group-wrapper--l3"})`
        position: absolute;
        bottom: 0;
        right: 19%;
        width: 35%;
    @media (min-width:768px) {
        position: absolute;
        width: 25%;
        bottom: 0;
        right: 11%;
    }
    @media (min-width:992px) {
        position: absolute;
        width: 100%;
        bottom: -1%;
        right: -10%;
        max-width: 543px;
    }

    @media (min-width:1200px) {
        right: 0%;
        max-width: 630px;
    }

    @media (min-width:1400px) {
        max-width: 815px;
    }
`


HeroImageGroup.Box = styled(Box)``


HeroImageGroup.ImageOne = styled(Box)`
    position: absolute;
    right: -55%;
    bottom: 0;
    width: 100%;
    z-index: -1;
`
HeroImageGroup.ImageTwo = styled(Box)`
   
   position: absolute;
        left: 83%;
        top: 35%;
        width: 20%;
        z-index: -1;

        @media (min-width:1200px) {
            max-width: 500px;
        }
`
HeroImageGroup.ImageThree = styled(Box)`

    position: absolute!important;
    left: -10%;
    bottom: 8%;
    width: 61%;
    z-index: 1;
    max-width:140px;
    @media (min-width:1200px) {
        max-width: 500px;
    }
`



HeroImageGroup.ImagesList = styled(Box)`
    position: relative;
    max-width: 100%;
    z-index: 1;
    @media (min-width:992px) {
        max-width: 350px;
    }

    @media (min-width:1200px) {
        max-width: 450px;
    }

    @media (min-width:1400px) {
        max-width: 525px;
    }
        
`



export default HeroImageGroup;

