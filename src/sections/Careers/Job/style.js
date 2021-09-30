import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Job = styled(Box)`
  background-color: #f9fafc;
  padding-top: 55px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 95px;
  }
`;
Job.Filter = styled(Box)``;
Job.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.4285;
  margin-bottom: 30px;
`;
Job.FilterMenu = styled(Box)`
  padding: 0;
  margin-bottom: 20px;
  display: block;
  @media (min-width: 768px) {
    border-right: 1px solid rgba(181, 181, 181, 0.2);
    margin-bottom: 20px;
  }
  li {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    display: block;
    transition: 0.4s;
    position: relative;
    padding-left: 20px;
    margin-bottom: 17px;
    background-color: transparent;
    border: none;
    color: #262729;
    cursor: pointer;
    list-style: none;
    &.active {
      color: #5034fc;
      &:before {
        background-color: #5034fc;
      }
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 7px;
      height: 7px;
      background-color: #262729;
      border-radius: 50%;
      transition: 0.4s;
    }
    &:hover {
      color: #5034fc;
      &:before {
        background-color: #5034fc;
      }
    }
  }
`;
Job.Tab = styled(Box)``;
Job.Box = styled(Box)``;
export default Job;
