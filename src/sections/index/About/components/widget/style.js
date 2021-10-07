import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Widget = styled(Box)`
  display: flex;
  margin-bottom: 30px;
  transition: 0.3s;
  @media (min-width: 1600px) {
    margin-bottom: 60px;
  }
  flex-direction: ${(props) =>
    props.direction ? (props) => props.direction : "column"};
  @media (min-width: 480px) {
    flex-direction: ${(props) =>
      props.directionXS ? (props) => props.directionXS : null};
    text-align: ${(props) =>
      props.directionXS == "row-reverse" ? "right" : null};
  }
  @media (min-width: 575px) {
    flex-direction: ${(props) => props.directionSM};
    text-align: ${(props) =>
      props.directionSM == "row-reverse" ? "right" : null};
  }
  @media (min-width: 768px) {
    flex-direction: ${(props) => props.directionMD};
    text-align: ${(props) =>
      props.directionMD == "row-reverse" ? "right" : null};
  }
  @media (min-width: 992px) {
    flex-direction: ${(props) => props.directionLG};
    text-align: ${(props) =>
      props.directionLG == "row-reverse" ? "right" : null};
  }
  @media (min-width: 1200px) {
    flex-direction: ${(props) => props.directionXL};
    text-align: ${(props) =>
      props.directionXL == "row-reverse" ? "right" : null};
  }
  .widget-icon {
    margin: 0 0px 20px 0px;
    @media (min-width: 480px) {
      margin: ${(props) =>
        props.directionXS == "row-reverse"
          ? "0 0 20px 20px"
          : "0 20px 20px 0px"};
    }
    @media (min-width: 575px) {
      margin: ${(props) =>
        props.directionSM == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 768px) {
      margin: ${(props) =>
        props.directionMD == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 992px) {
      margin: ${(props) =>
        props.directionLG == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 1200px) {
      margin: ${(props) =>
        props.directionXL == "row-reverse" ? "0 0 20px 20px" : null};
    }
    transition: 0.3s !important;
  }
  &:hover {
    .widget-icon {
      background-color: #ff7272;
      color: #fff;
    }
  }
`;

Widget.Icon = styled(Box).attrs({ className: "widget-icon" })`
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  background-color: #fff;
  color: #fd346e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
`;

Widget.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
`;
Widget.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
`;

Widget.Box = styled(Box)``;

export default Widget;
