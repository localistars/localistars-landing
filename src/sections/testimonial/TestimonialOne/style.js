import styled from 'styled-components';
import { Box, Heading, Button } from '~styled';

const Testimonial = styled(Box)`
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (min-width: 992px) {
    padding-top: 115px;
    padding-bottom: 100px;
  }
`;
Testimonial.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  color: #262729;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
    margin-bottom: 50px;
  }
`;
Testimonial.Subtitle = styled(Heading)`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.866666;
  color: #ff5722;
`;
Testimonial.ButtonGroups = styled(Box)`
  text-align: center;
  margin-top: 35px;
`;
Testimonial.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  border-radius: 55px;
  border-radius: 500px !important;
  &:hover {
    color: #fff !important;
  }
`;
Testimonial.Box = styled(Box)``;

export default Testimonial;
