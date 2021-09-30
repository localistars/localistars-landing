import styled from 'styled-components'
import { Box } from '~styled'

const Images = styled(Box)`
        padding: 0 36px;
        z-index: 1;
`
Images.Four = styled(Box)`
    position: absolute;
    bottom: -15%;
    right: 0%;
    @media (min-width:480px) {
        right: -80px;
    }

    @media (min-width:768px) {
        right: -40px;
    }

    @media (min-width:992px) {
        right: -40px;
        bottom: -80px;
    }

    @media (min-width:1200px) {
    }
`
Images.Three = styled(Box)`
    position: absolute;
    bottom: 11%;
    left: -3%;
    z-index: -1;
    width: 35%;

    @media (min-width:480px) {
        left: -11%;
    }

    @media (min-width:768px) {
        left: -5%;
    }
`
Images.Two = styled(Box)`
    position: absolute;
    top: -11%;
    right: 20%;
    z-index: -1;
    width: 35%;

    @media (min-width:1200px) {
        right: 10%;
    }
`
Images.One = styled(Box)`
    position: absolute;
    top: -20px;
    left: -5px;
    width: 30%;
    z-index: -1;

    @media (min-width:480px) {
        top: -5%;
        left: -6%;
    }

    @media (min-width:768px) {
        left: 0;
    }

`

export default Images