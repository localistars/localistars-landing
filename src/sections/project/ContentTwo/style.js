import styled from 'styled-components';
import { Link } from '~components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Content = styled(Box)`
  padding-top: 75px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-top: 165px;
    padding-bottom: 135px;
  }
`;
Content.Block = styled(Box)`
  border-top: 1px solid rgba(128, 138, 142, 0.2);
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 132px;
    padding-bottom: 135px;
  }
`;

Content.Block = styled(Box)`
  /* padding-top: 80px; */
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;
Content.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.20689;
  margin-bottom: 32px;

  @media (min-width: 480px) {
    font-size: 38px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    font-size: 58px;
  }
`;
Content.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.66666;
  margin-bottom: 12px;
`;

Content.Image = styled(Box)`
  position: relative;
  margin-bottom: 40px;
  z-index: 1;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 55px;
  }
`;
Content.ContentShape = styled(Box)`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 3.4%;
`;
Content.ContentShapeTwo = styled(Box)`
  width: 38%;
  position: absolute;
  left: -1%;
  top: -7%;
  z-index: -1;
`;
Content.Button = styled(Link)`
  padding: 10px 0 !important;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ff5722;
    height: 2px;
    min-width: 138px;
    max-width: 138px;
  }
`;

Content.Box = styled(Box)``;

export default Content;
