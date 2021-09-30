
import styled from 'styled-components'

export const Heading = styled.div`
text-transform: ${props =>
props.textTransform ? props.textTransform : null};
font-family: ${(props) => props.family};
font-size: ${(props) => props.size};
margin-top: ${(props) => props.mt};
margin-bottom: ${(props) => props.mb};
margin-left: ${(props) => props.ml};
margin-right: ${(props) => props.mr};
padding-top: ${(props) => props.pt};
font-weight: ${(props) => props.weight};
padding-bottom: ${(props) => props.pb};
padding-left: ${(props) => props.pl};
padding-right: ${(props) => props.pr};
opacity: ${(props) => props.fontOpacity};
color:${(props) => props.fontColor};
@media (min-width: 480px) {
  font-size: ${(props) => props.sizeXS};
  margin-top: ${(props) => props.mtXS};
  margin-bottom: ${(props) => props.mbXS};
  margin-left: ${(props) => props.mlXS};
  margin-right: ${(props) => props.mrXS};
  padding-top: ${(props) => props.ptXS};
  padding-bottom: ${(props) => props.pbXS};
  padding-left: ${(props) => props.plXS};
  padding-right: ${(props) => props.prXS};
}
@media (min-width: 575px) {
  font-size: ${(props) => props.sizeSM};
  margin-top: ${(props) => props.mtSM};
  margin-bottom: ${(props) => props.mbSM};
  margin-left: ${(props) => props.mlSM};
  margin-right: ${(props) => props.mrSM};
  padding-top: ${(props) => props.ptSM};
  padding-bottom: ${(props) => props.pbSM};
  padding-left: ${(props) => props.plSM};
  padding-right: ${(props) => props.prSM};
}
@media (min-width: 768px) {
  font-size: ${(props) => props.sizeMD};
  margin-top: ${(props) => props.mtMD};
  margin-bottom: ${(props) => props.mbMD};
  margin-left: ${(props) => props.mlMD};
  margin-right: ${(props) => props.mrMD};
  padding-top: ${(props) => props.ptMD};
  padding-bottom: ${(props) => props.pbMD};
  padding-left: ${(props) => props.plMD};
  padding-right: ${(props) => props.prMD};
}
@media (min-width: 992px) {
  font-size: ${(props) => props.fontSizLG};
  margin-top: ${(props) => props.mtLG};
  margin-bottom: ${(props) => props.mbLG};
  margin-left: ${(props) => props.mlLG};
  margin-right: ${(props) => props.mrLG};
  padding-top: ${(props) => props.ptLG};
  padding-bottom: ${(props) => props.pbLG};
  padding-left: ${(props) => props.plLG};
  padding-right: ${(props) => props.prLG};
} ;
@media (min-width: 1200px) {
  font-size: ${(props) => props.sizeXL};
  margin-top: ${(props) => props.mtXL};
  margin-bottom: ${(props) => props.mbXL};
  margin-left: ${(props) => props.mlXL};
  margin-right: ${(props) => props.mrXL};
  padding-top: ${(props) => props.ptXL};
  padding-bottom: ${(props) => props.pbXL};
  padding-left: ${(props) => props.plXL};
  padding-right: ${(props) => props.prXL};
} ;
`;
export const Paragraph = styled.p`
text-transform: ${props =>
props.textTransform ? props.textTransform : null};
font-family: ${(props) => props.family};
margin-top: ${(props) => props.mt};
margin-bottom: ${(props) => props.mb};
margin-left: ${(props) => props.ml};
margin-right: ${(props) => props.mr};
padding-top: ${(props) => props.pt};
font-weight: ${(props) => props.weight};
padding-bottom: ${(props) => props.pb};
padding-left: ${(props) => props.pl};
padding-right: ${(props) => props.pr};
opacity: ${(props) => props.fontOpacity};
color:${(props) => props.fontColor};
font-size: ${(props) => props.size};
@media (min-width: 480px) {
  margin-top: ${(props) => props.mtXS};
  margin-bottom: ${(props) => props.mbXS};
  margin-left: ${(props) => props.mlXS};
  margin-right: ${(props) => props.mrXS};
  padding-top: ${(props) => props.ptXS};
  padding-bottom: ${(props) => props.pbXS};
  padding-left: ${(props) => props.plXS};
  padding-right: ${(props) => props.prXS};
  font-size: ${(props) => props.sizeXS};
}
@media (min-width: 575px) {
  margin-top: ${(props) => props.mtSM};
  margin-bottom: ${(props) => props.mbSM};
  margin-left: ${(props) => props.mlSM};
  margin-right: ${(props) => props.mrSM};
  padding-top: ${(props) => props.ptSM};
  padding-bottom: ${(props) => props.pbSM};
  padding-left: ${(props) => props.plSM};
  padding-right: ${(props) => props.prSM};
  font-size: ${(props) => props.sizeSM};
}
@media (min-width: 768px) {
  font-size: ${(props) => props.sizeMD};
  margin-top: ${(props) => props.mtMD};
  margin-bottom: ${(props) => props.mbMD};
  margin-left: ${(props) => props.mlMD};
  margin-right: ${(props) => props.mrMD};
  padding-top: ${(props) => props.ptMD};
  padding-bottom: ${(props) => props.pbMD};
  padding-left: ${(props) => props.plMD};
  padding-right: ${(props) => props.prMD};
}
@media (min-width: 992px) {
  font-size: ${(props) => props.sizeLG};
  margin-top: ${(props) => props.mtLG};
  margin-bottom: ${(props) => props.mbLG};
  margin-left: ${(props) => props.mlLG};
  margin-right: ${(props) => props.mrLG};
  padding-top: ${(props) => props.ptLG};
  padding-bottom: ${(props) => props.pbLG};
  padding-left: ${(props) => props.plLG};
  padding-right: ${(props) => props.prLG};
} ;
@media (min-width: 1200px) {
  font-size: ${(props) => props.sizeXL};
  margin-top: ${(props) => props.mtXL};
  margin-bottom: ${(props) => props.mbXL};
  margin-left: ${(props) => props.mlXL};
  margin-right: ${(props) => props.mrXL};
  padding-top: ${(props) => props.ptXL};
  padding-bottom: ${(props) => props.pbXL};
  padding-left: ${(props) => props.plXL};
  padding-right: ${(props) => props.prXL};
} ;
`;