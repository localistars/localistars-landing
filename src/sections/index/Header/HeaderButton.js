import React from "react";
import styled from "styled-components";
import { Button } from "~styled";
const HeaderButton = styled(Button)`
  min-width: 172px !important;
  height: 42px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  letter-spacing: normal !important;
  color: #fff !important;
  background-color: #099a97 !important;
  border-color: #099a97;
  box-shadow: -12px 12px 50px rgb(10 191 188 / 30%) !important;
  border-radius: 500px !important;
  text-align: center !important;
  &:hover {
    color: #fff !important;
    box-shadow: -12px 12px 50px rgb(10 191 188 / 0%) !important;
  }
`;
export default HeaderButton;
