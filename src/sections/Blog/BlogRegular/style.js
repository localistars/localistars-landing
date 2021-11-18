import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Blog = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 125px;
    padding-bottom: 130px;
  }
`;
Blog.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`;
Blog.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;

Blog.Paginations = styled(Box).attrs({ className: 'Paginations' })`
  li {
    display: inline-flex;
    align-items: center;
    width: 36px;
    height: 36px;
    justify-content: center;
    border: 1px solid rgba(38, 39, 41, 0.1);
    background-color: #fff;
    font-size: 18px;
    margin: 5px;
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      letter-spacing: normal;
      line-height: 25px;
      color: #262729;
      transition: 0.4s;
    }
  }
`;
Blog.Box = styled(Box)``;

export default Blog;
