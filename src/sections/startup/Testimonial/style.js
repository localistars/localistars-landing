import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Testimonial = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
`
Testimonial.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    position:relative;
    @media (min-width:768px) {
      font-size: 35px;
    }

    @media (min-width:992px) {
      font-size: 45px;
    }
`
Testimonial.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
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
        margin-top:50px;
        margin-bottom:30px;
        margin-left:15px;
        margin-right:15px;
    }
`
Testimonial.Box = styled(Box)`

`


export default Testimonial;