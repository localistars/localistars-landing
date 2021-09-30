import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Container = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }

`
Container.Image = styled(Box)`
padding-bottom: 35px;

@media (min-width: 992px) {
    padding-bottom: 0;
}

@media (min-width: 1200px) {
    margin-left: 60px;
}
`
Container.Box = styled(Box)`

`
export default Container;