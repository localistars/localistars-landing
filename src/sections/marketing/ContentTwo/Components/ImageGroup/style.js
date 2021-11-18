import styled from 'styled-components';
import { Box } from '~styled';

const Images = styled(Box)`
  @media (min-width: 992px) {
    margin: 0 15px;
  }
`;
Images.Two = styled(Box)`
  position: absolute;
  right: -6%;
  top: -4%;
  width: 35%;
  @media (min-width: 575px) {
    right: -6%;
    top: -6%;
  }
  @media (min-width: 768px) {
    right: -7%;
    top: -7%;
  }
  @media (min-width: 992px) {
    top: -6%;
    right: -7%;
  }
`;
Images.One = styled(Box)`
  position: absolute;
  left: 0;
  bottom: 50%;
  width: 40%;
  transform: translateY(50%);

  @media (min-width: 480px) {
    left: -15%;
  }

  @media (min-width: 992px) {
    left: -15%;
  }

  @media (min-width: 1200px) {
    left: -20%;
  }
`;

export default Images;
