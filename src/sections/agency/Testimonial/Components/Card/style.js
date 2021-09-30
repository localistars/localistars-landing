import styled from "styled-components";

import { Box, Heading, Paragraph } from "~styled";

const Card = styled(Box).attrs({ className: "testimonial-card card" })`
  background: #fff;
  border: 0;
  color: #262729;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 0;
  border-radius: 15px!important;
  transition: 0.4s;
  margin: 0 15px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 38px;
    padding-bottom: 10px;
  }
  @media (min-width: 1200px) {
    margin: 0;
  }

  &:hover {
    box-shadow: -3px 25px 50px rgba(23, 3, 48, 0.12);
  }
`;
Card.Image = styled(Paragraph)`
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  border-radius: 500px;
  width: 100%;
`;
Card.Title = styled(Heading)`
  color: inherit;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.388888;
  margin-bottom: 0px;
`;
Card.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.777777;
  margin-bottom: 20px;
  color: inherit;
  @media (min-width: 1200px) {
    padding-right: 30px;
  }
`;
Card.Body = styled(Box)`
  padding-top: 25px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 15px;
`;
Card.UserBlock = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
Card.UserInfo = styled(Box)`
  color: inherit;
`;
Card.Rating = styled(Box)`
  display: flex;
`;
Card.RatingSingle = styled(Box)`
  color: ${(props) => (props ? "#ff971d" : "inherit")};
  font-size: inherit;
`;
Card.UserPosition = styled(Paragraph)`
  color: inherit;
  opacity: 0.7;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.866666;
  margin-bottom: 0;
`;

export default Card;
