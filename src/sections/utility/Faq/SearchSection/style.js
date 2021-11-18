import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Search = styled(Box)`
  background: linear-gradient(
    261.26deg,
    rgba(253, 52, 110, 0.96) 14.9%,
    #b81c5c 43.58%,
    #0abfbc 89.94%
  );
  padding-top: 52px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 55px;
  }
  @media (min-width: 992px) {
    padding-top: 95px;
    padding-bottom: 90px;
  }
  *:focus {
    outline: none;
  }
`;
Search.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.20689;
  margin-bottom: 35px;
  @media (min-width: 576px) {
    font-size: 38px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 992px) {
    font-size: 58px;
  }
`;
Search.Newsletter = styled(Box)`
  background-color: #fff;
  border-radius: 9px;
  padding: 0 40px;
  @media (min-width: 992px) {
    margin: 0 30px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      height: 75px;
      border: none;
      width: 100%;
      border-radius: 9px;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 30px;
      color: rgba(38, 39, 41, 0.7);
    }
    button {
      border: none;
      background-color: transparent;
      color: #fd346e;
      font-size: 21px;
    }
  }
`;

Search.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  margin-top: 20px;
`;
Search.Box = styled(Box)``;

export default Search;
