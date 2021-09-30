import React from "react";
import styled from "styled-components";
import { Button } from "~styled";
const HeaderButton = styled(Button)`
  min-width: 172px !important;
  height: 42px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  letter-spacing: normal;
  color: #fff !important;
  background-color: #0abfbc !important;
  border-color: #0abfbc !important;
  box-shadow: -12px 12px 50px rgb(10 191 188 / 30%);
  border-radius: 500px !important;
  &:hover {
    color: #fff;
    box-shadow: -12px 12px 50px rgb(10 191 188 / 0%);
  }
`;
export default HeaderButton;
