import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Testimonial = styled(Box)`
padding-top: 50px;

@media (min-width: 768px){
  padding-top: 70px;
}

@media (min-width: 992px){
  padding-top: 128px;
}

`
Testimonial.SliderWrapper = styled(Box)`
border-bottom:1px solid rgba(37, 55, 63, 0.1);
padding-top: 50px;
padding-bottom: 20px;

@media (min-width: 768px){
  padding-top: 70px;
  padding-bottom: 40px;
}

@media (min-width: 992px){
  padding-top: 128px;
  padding-bottom: 95px;
}
.slick-list{
  @media (min-width:768px){
    margin: 0 -40px;
  }
}
.slick-track{
  display:flex;
}
.slide-item-inner{
      >div{
        @media (min-width:1200px){
          padding-right:40px;
        }
      }
    }
  .slick-slide{
    margin: 0 40px;
    .slide-item-inner{
      >div{
          padding-right:0px;
      }
    }
  }
`


Testimonial.Box = styled(Box)``


export default Testimonial;