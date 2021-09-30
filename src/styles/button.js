import React from "react"
import styled from "styled-components"
import Link from "../components/Core/Link"

export const Button = styled.button.attrs(props => ({
  // we can define static props
  className: "btn",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => (props.sizeX ? props.sizeX : null)};
  height: ${props => (props.sizeY ? props.sizeY : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : null)};
  letter-spacing: ${props => props.letterSpacing};
  padding-left: ${props => (props.pl ? props.pl : "10px")};
  padding-right: ${props => (props.pr ? props.pr : "10px")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalized"};
  border-radius: ${props => (props.radius ? props.radius : "5px")};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  color: ${props => props.textColor};
  background: ${props => props.backgroundColor};
  border-radius: ${props => props.rounded ? "500px!important" : null};
  @media (min-width: 480px) {
    margin-top: ${props => props.mtXS};
    margin-bottom: ${props => props.mbXS};
    min-width: ${props => props.sizeXXS};
    height: ${props => (props.sizeYXS ? props.sizeYXS : null)};
    font-size: ${props => (props.fontSizeXS ? props.fontSizeXS : null)};
  }
  @media (min-width: 575px) {
    margin-top: ${props => props.mtSM};
    margin-bottom: ${props => props.mbSM};
    min-width: ${props => props.sizeXSM};
    height: ${props => (props.sizeYSM ? props.sizeYSM : null)};
    font-size: ${props => (props.fontSizeSM ? props.fontSizeSM : null)};
  }
  @media (min-width: 768px) {
    margin-top: ${props => props.mtMD};
    margin-bottom: ${props => props.mbMD};
    min-width: ${props => props.sizeXMD};
    height: ${props => (props.sizeYMD ? props.sizeYMD : null)};
    font-size: ${props => (props.fontSizeMD ? props.fontSizeMD : null)};
  }
  @media (min-width: 992px) {
    margin-top: ${props => props.mtLG};
    margin-bottom: ${props => props.mbLG};
    min-width: ${props => props.sizeXLG};
    height: ${props => (props.sizeYLG ? props.sizeYLG : null)};
    font-size: ${props => (props.fontSizeLG ? props.fontSizeLG : null)};
  }
  @media (min-width: 1200px) {
    margin-top: ${props => props.mtXL};
    margin-bottom: ${props => props.mbXL};
    min-width: ${props => props.sizeXXL};
    height: ${props => (props.sizeYXL ? props.sizeYXL : null)};
    font-size: ${props => (props.fontSizeXL ? props.fontSizeXL : null)};
  }
  &:hover {
    color: ${props => props.hoverTextColor};
    background: ${props => props.hoverBackground};
  }
`
export const BtnLink = styled.span.attrs(props => ({
  // we can define static props
  className: "btn",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => (props.sizeX ? props.sizeX : null)};
  height: ${props => (props.sizeY ? props.sizeY : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : null)};
  letter-spacing: ${props =>
    props.letterSpacing };
  padding-left: ${props => (props.pl ? props.pl : "10px")};
  padding-right: ${props => (props.pr ? props.pr : "10px")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "unset"};
  border-radius: ${props => (props.radius ? props.radius : "5px")};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  color: ${props => props.textColor };
  background: ${props => props.backgroundColor};
  transition: 0.4s;
  @media (min-width: 480px) {
    margin-top: ${props => props.mtXS};
    margin-bottom: ${props => props.mbXS};
    min-width: ${props => props.sizeXXS};
    height: ${props => props.sizeYXS};
    font-size: ${props => props.fontSizeXS};
  }
  @media (min-width: 575px) {
    margin-top: ${props => props.mtSM};
    margin-bottom: ${props => props.mbSM};
    min-width: ${props => props.sizeXSM};
    height: ${props => props.sizeYSM};
    font-size: ${props => props.fontSizeSM};
  }
  @media (min-width: 768px) {
    margin-top: ${props => props.mtMD};
    margin-bottom: ${props => props.mbMD};
    min-width: ${props => props.sizeXMD};
    height: ${props => props.sizeYMD};
    font-size: ${props => props.fontSizeMD};
  }
  @media (min-width: 992px) {
    margin-top: ${props => props.mtLG};
    margin-bottom: ${props => props.mbLG};
    min-width: ${props => props.sizeXLG};
    height: ${props => props.sizeYLG};
    font-size: ${props => props.fontSizeLG};
  }
  &:hover {
    color: ${props => props.hoverTextColor };
    background: ${props => props.hoverBackground};
  }
`

export const ButtonLink = ({ to, children, ...props }) => {
  return (
    <Link to={to ? to : "/#"}>
      <BtnLink {...props}>{children}</BtnLink>
    </Link>
  )
}
