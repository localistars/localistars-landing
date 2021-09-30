
import styled from "styled-components";

const Box = styled.div`
  background: ${props => props.background};
  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-size: ${props => props.backgroundImage && (props.backgroundSize ? props.backgroundSize : "cover")};
  background-position: ${props => props.backgroundImage && (props.backgroundPosition ? props.backgroundPosition : "center")};
  background-repeat: ${props => props.backgroundImage && (props.backgroundRepeat ? props.backgroundRepeat : "no-repeat")};
  position: ${props => props.position ? props.position : "relative"};
  text-align: ${props => props.textAlign};
  margin-top:  ${props =>props.mt};
  margin-bottom:  ${props =>props.mb};
  margin-right: ${props =>props.mr};
  margin-left: ${props => props.ml};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  color:${props => props.elemColor};
  @media (min-width: 480px){
    margin-top: ${props => props.mtXS};
    margin-bottom: ${props => props.mbXS};
    margin-right: ${props => props.mrXS};
    margin-left: ${props => props.mlXS};
    padding-top: ${props => props.ptXS};
    padding-bottom: ${props => props.pbXS};
    padding-right: ${props => props.prXS};
    padding-left: ${props => props.plXS};
  };
  @media (min-width: 575px) {
    margin-top: ${props => props.mtSM};
    margin-bottom: ${props => props.mbSM};
    margin-right: ${props => props.mrSM};
    margin-left: ${props => props.mlSM};
    padding-top: ${props => props.ptSM};
    padding-bottom: ${props => props.pbSM};
    padding-right: ${props => props.prSM};
    padding-left: ${props => props.plSM};
  };
  @media (min-width: 768px) {
    margin-top: ${props => props.mtMD};
    margin-bottom: ${props => props.mbMD};
    margin-right: ${props => props.mrMD};
    margin-left: ${props => props.mlMD};
    padding-top: ${props => props.ptMD};
    padding-bottom: ${props => props.pbMD};
    padding-right: ${props => props.prMD};
    padding-left: ${props => props.plMD};
  };
  @media (min-width: 992px) {
    margin-top: ${props => props.mtLG};
    margin-bottom: ${props => props.mbLG};
    margin-right: ${props => props.mrLG};
    margin-left: ${props => props.mlLG};
    padding-top: ${props => props.ptLG};
    padding-bottom: ${props => props.pbLG};
    padding-right: ${props => props.prLG};
    padding-left: ${props => props.plLG};
  };
  @media (min-width: 1200px) {
    margin-top: ${props => props.mtXL};
    margin-bottom: ${props => props.mbXL};
    margin-right: ${props => props.mrXL};
    margin-left: ${props => props.mlXL};
    padding-top: ${props => props.ptXL};
    padding-bottom: ${props => props.pbXL};
    padding-right: ${props => props.prXL};
    padding-left: ${props => props.plXL};
  };
  @media (min-width: 1360px) {
    margin-top: ${props => props.mtXXL};
    margin-bottom: ${props => props.mbXXL};
    margin-right: ${props => props.mrXXL};
    margin-left: ${props => props.mlXXL};
    padding-top: ${props => props.ptXXL};
    padding-bottom: ${props => props.pbXXL};
    padding-right: ${props => props.prXXL};
    padding-left: ${props => props.plXXL};
  };
  @media (min-width: 1600px) {
    margin-top: ${props => props.mtXXXL};
    margin-bottom: ${props => props.mbXXXL};
    margin-right: ${props => props.mrXXXL};
    margin-left: ${props => props.mlXXXL};
    padding-top: ${props => props.ptXXXL};
    padding-bottom: ${props => props.pbXXXL};
    padding-right: ${props => props.prXXXL};
    padding-left: ${props => props.plXXXL};
  };`



export default Box;
