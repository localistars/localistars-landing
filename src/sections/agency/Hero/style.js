import styled from 'styled-components';
import { Box, Heading, Paragraph } from '~styled';

const Hero = styled(Box)`
  padding-top: 130px;
  padding-bottom: 40px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    padding-top: 115px;
    padding-bottom: 60px;
  }

  @media (min-width: 992px) {
    padding-top: 205px;
    padding-bottom: 130px;
  }
  @media (min-width: 1200px) {
    padding-top: 235px;
    padding-bottom: 220px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: ${(props) =>
      props.backgroundOverlay && `url(${props.backgroundOverlay})`};
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
`;
Hero.Subtitle = styled(Heading)`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 26px;
`;
Hero.Title = styled(Heading)`
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2068;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    font-size: 58px;
  }
`;
Hero.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
`;
Hero.Content = styled(Box)`
  margin-top: 0;
  @media (min-width: 992px) {
    margin-top: 80px;
  }
`;
Hero.Video = styled(Box)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 40px;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
  a {
    color: #ff5722;
  }
  .video-block {
    display: flex;
    align-items: center;
    background: none;
    border: 0;
    box-shadow: none;
    text-align: left;
    &:focus {
      outline: none;
      box-shadow: none;
    }
    i {
      min-width: 50px;
      max-width: 50px;
      min-height: 50px;
      max-height: 50px;
      box-shadow: -12px 12px 50px rgba(255, 30, 56, 0.3);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ff5722;
      margin-right: 20px;
      color: #fff;
    }

    .btn-text {
      color: #ff5722;
      transition: 0.4s;
      font-size: 13px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      line-height: 22px;
    }

    &:hover {
      .btn-text {
        text-decoration: underline;
      }
    }
  }
`;
Hero.Box = styled(Box)``;
export default Hero;
