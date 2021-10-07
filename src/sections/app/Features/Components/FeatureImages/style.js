import styled from 'styled-components'
import { Box } from '~styled'




const ImageGroup = styled(Box)`
    position: relative;
    z-index: 1;
    box-shadow: 0 28px 34px rgb(37 55 63 / 10%);
    margin-bottom:40px;
    @media (min-width:992px) {
        margin-right: 40px;
        margin-bottom:0px;
    }
    @media (min-width:1600px) {
        margin-right: 40px;
    }
    .image{
        border-radius: 13px;
    }
    .shape{
        width: 20%;
        position: absolute;
        left: -10%;
        bottom: -10%;
        z-index: -1;
    }
`

export default ImageGroup;