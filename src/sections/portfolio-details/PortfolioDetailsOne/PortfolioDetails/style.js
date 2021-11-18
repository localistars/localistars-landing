import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const PortfolioDetails = styled(Box)`
  padding-top: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
  }
`;
PortfolioDetails.Image = styled(Box)`
  img {
    border-radius: 10px;
  }
`;
PortfolioDetails.Content = styled(Box)``;

PortfolioDetails.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 54px;
  text-transform: uppercase;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`;

PortfolioDetails.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 20px;
  margin-right: 10px;
`;
PortfolioDetails.List = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;
    list-style: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #ff5722;
    }

    span {
      color: #262729;
      margin-right: 15px;
    }
  }
`;

PortfolioDetails.MasonryWrapper = styled(Box)`
  .masonry-grid {
    display: flex;
    width: auto;
    margin-left: -15px;
    margin-right: -15px;
    a {
      display: block;
    }
    &.no-gutter {
      .masonry-grid_column {
        padding-left: 0px;
        & > div {
          margin-top: 0;
          margin-bottom: 0;
          a {
            display: block;
          }
        }
      }
    }
  }
  .masonry-grid_column {
    padding: 0 15px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .masonry-grid_column > div {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
PortfolioDetails.MasonrySingle = styled(Box)`
  > div {
    border-radius: 10px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
`;

PortfolioDetails.Box = styled(Box)``;

export default PortfolioDetails;
