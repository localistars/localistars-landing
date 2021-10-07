import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const BreadCrumb = styled(Box)`
position: relative;
padding-top: 60px;
padding-bottom: 60px;
@media (min-width: 768px){
  padding-top: 75px;
  padding-bottom: 80px;
}
@media (min-width: 992px){
  padding-top: 102px;
  padding-bottom: 100px;
}
`
BreadCrumb.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.4423;
    margin-bottom: 17px;
    @media (min-width:575px) {
      font-size: 35px;
    }
    @media (min-width:768px) {
      font-size: 42px;
    }
    @media (min-width:992px) {
      font-size: 52px;
    }
`
BreadCrumb.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.61904;
    @media (min-width:575px) {
      font-size: 18px;
    }
    @media (min-width:992px) {
      font-size: 21px;
    }
`
BreadCrumb.Image = styled(Box)`
padding-bottom: 35px;
position: absolute;
right: 0;
bottom: 30%;
width: 8%;
display: none;
@media (min-width: 992px) {
    padding-bottom: 0;
    display: block;
}

@media (min-width: 1200px) {
    margin-left: 60px;
}
`
BreadCrumb.Box = styled(Box)`

`
export default BreadCrumb;