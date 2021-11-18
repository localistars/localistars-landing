import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';

const Testimonial = styled(Box)`
  padding-top: 50px;
  padding-bottom: 36px;

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 100px;
  }
`;
Testimonial.Box = styled(Box)``;
export default Testimonial;
