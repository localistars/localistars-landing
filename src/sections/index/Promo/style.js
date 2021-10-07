import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Promo = styled(Box)`
  background-image: linear-gradient(
    300deg,
    #099a97 0%,
    #099a97 33%,
    #20aa8e 53%,
    #20aa8e 53%,
    #82c4c3 100%
  );
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

Promo.Image = styled(Box)`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
  }
  @media (min-width: 1600px) {
    left: 10%;
  }
`;
Promo.Content = styled(Box)`
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.87) 0%,
    rgba(255, 255, 255, 0.62) 29%,
    rgba(255, 255, 255, 0.2) 100%
  );
  padding-top: 65px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 25px;
  @media (min-width: 768px) {
    padding-left: 80px;
    padding-right: 50px;
  }
  @media (min-width: 576px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
Promo.Newsletter = styled(Box)`
  .form-group {
    position: realtive;
  }
  .form-control {
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    border-radius: 500px;
    border: 2px solid rgba(128, 138, 142, 0.2);
    color: rgba(37, 55, 63, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 10px;
    border-color: transparent;
    height: 70px;
    color: #262729 !important;
    @media (min-width: 575px) {
      padding-right: 155px;
    }
    /* background-color: rgba(white, 0.4); */
    @media (min-width: 480px) {
      margin-right: 7px;
      margin-bottom: 0;
    }
    color: #262729 !important;
    &:focus {
      border-color: transparent;
      background-color: rgba(255, 255, 255, 0.4);
    }
    &:placeholder {
      background-color: transparent;
      color: #ddd;
    }
  }
  .btn {
    background-color: #099a97;
    border-color: #099a97;
    border-radius: 500px;
    color: #fff !important;
    min-width: 140px;
    height: 50px;
    margin-top: 10px;
    @media (min-width: 575px) {
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
`;
Promo.Box = styled(Box)``;

export default Promo;
