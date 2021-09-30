import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Testimonial = styled(Box)
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
Testimonial.Subtitle = styled(Heading)
`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Testimonial.Title = styled(Heading)
`
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.2;
    font-size: 30px;
    color: #262729;
    margin-bottom: 45px;

    @media (min-width:768px) {
        font-size: 38px;
    }
    
    @media (min-width:992px) {
        font-size: 45px;
        margin-bottom: 0;
    }
`
Testimonial.SliderWrapper = styled(Box)`
    .slick-list{
        margin-left:-15px;
        margin-right:-15px;
    }
    .slick-track{
        display:flex;
    }
    .slick-slide{
        margin-top:70px;
        margin-bottom:30px;
        margin-left:15px;
        margin-right:15px;
    }
`
Testimonial.Box = styled(Box)`
`
export default Testimonial;