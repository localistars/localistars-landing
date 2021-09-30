import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Protfolio = styled(Box)`
  border-top: 1px solid #dee2e6;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 115px;
    padding-bottom: 230px;
  }
`;
Protfolio.ImageContent = styled(Box)`
  img {
    border-radius: 15px !important;
  }
`;
Protfolio.SingleContent = styled(Box)`
  position: relative;
`;
Protfolio.Shape = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 122px;
  min-height: 106px;
  max-width: 122px;
  max-height: 106px;
  border-radius: 0px 50px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Protfolio.ShapeTitle = styled(Heading)`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
`;
Protfolio.Content = styled(Box)``;
Protfolio.SubTitle = styled(Paragraph)`
  margin-bottom: 28px;
  padding-left: 0 !important;
  span {
    color: #5034fc;
  }
`;
Protfolio.Title = styled(Heading)`
  font-size: 45px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 54px;
  text-transform: capitalize;
  margin-bottom: 13px;
`;
Protfolio.TitleSmall = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 28px;
  margin-bottom: 25px;
  display: block;
`;
Protfolio.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 45px;
`;
Protfolio.Button = styled(Button)`
  min-width: 180px;
  min-height: 56px;
  max-width: 180px;
  max-height: 56px;
  border-radius: 500px;
  font-size: 15px;
  color: #fff;
  background-color: #402aca;
  border-color: #3c27bd;
  &:hover {
    color: #fff;
    background-color: #442cd6;
    border-color: #402aca;
  }
`;
Protfolio.Box = styled(Box)``;
export default Protfolio;
