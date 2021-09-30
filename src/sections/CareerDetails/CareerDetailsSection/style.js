import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";
import { transparentize, rgba } from "polished";
import { Link } from "~components";

const Career = styled(Box)`
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
Career.Title = styled(Heading)`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 40px;
  margin-bottom: 20px;
`;
Career.Wrapper = styled(Box)`
  @media (min-width: 992px) {
    margin-right: 65px;
  }
`;
Career.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  color: inherit;
`;

Career.ContentBlock = styled(Box)`
  padding-top: 10px;
  @media (min-width: 992px) {
    padding-top: 45px;
  }
`;
Career.Box = styled(Box)``;

Career.List = styled(Box)``;

Career.ListItem = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  list-style: none;
  padding-left: 25px;
  position: relative;
  margin-bottom: 15px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    background-color: #5034fc;
  }
`;

Career.Button = styled(Link).attrs({ className: "btn" })`
  min-width: 243px;
  height: 56px;
  border-radius: 5px;
  font-size: 15px;
  border-radius: 500px !important;
  color: #fff;
  transition: 0.4s;
  background: ${(props) => (props.background ? props.background : "#ff5722")};
  box-shadow: ${(props) =>
    props.background ? "-12px 12px 50px " + rgba(props.background, 0) : "none"};
  &:hover {
    background: ${(props) => props.background};
    box-shadow: ${(props) =>
      props.background
        ? "-12px 12px 50px " + rgba(props.background, 0.3)
        : "none"};
    color: #fff;
  }
`;

export default Career;
