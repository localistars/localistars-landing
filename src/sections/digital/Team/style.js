import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';


const Team = styled(Box)`
padding-top: 55px;
  padding-bottom: 40px;
  @media (min-width:768px) {
    padding-top: 75px;
    padding-bottom: 60px;
  }

  @media (min-width:992px) {
    padding-top: 135px;
    padding-bottom: 110px;
  }
`
Team.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    @media (min-width:768px) {
    font-size: 38px;
    }
    @media (min-width:992px) {
    font-size: 48px;
    }
`

Team.Subtitle = styled(Paragraph)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
`
Team.SliderWrapper = styled(Box)`
.slick-track{
  display:flex!important;
}
.slick-slide{
  margin: 15px 15px;
  @media (min-width:480px){
    margin: 49px 15px;
  }
  &.slick-center {
    .team-card{
        box-shadow: 0 8px 45px rgba(0, 0, 0, 0.3);
      }
    }
}
  .slick-dots {
    list-style: none;
    display: inline-flex!important;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    margin-top: 10px;
    li {
      display:flex;
      button {
        border: none;
        color: transparent;
        width: 22px;
        height: 5px;
        border-radius: 3px;
        background-color: #828288;
        margin: 0 5px;
        transition: 0.4s ease-in-out;
        &:focus{
          outline:none;
        }
      }
      &.slick-active {
        button {
          background-color: #fd346e;
        }
      }
    }
  }
`;

Team.Box = styled(Box)``;

export default Team