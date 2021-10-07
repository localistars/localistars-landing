import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';


const Portfolio = styled(Box)`
  padding-bottom: 40px;
  @media (min-width:768px) {
    padding-bottom: 60px;
  }

  @media (min-width:992px) {
    padding-bottom: 110px;
  }
`
Portfolio.Title = styled(Heading)`
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

Portfolio.Subtitle = styled(Paragraph)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
`
Portfolio.Nav = styled(Box)`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    @media (min-width:992px){
      justify-content:flex-end;
    }
`
Portfolio.NavItem = styled(Button)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.2;
    color: #262729;
    transition: 0.4s;
    background-color: transparent;
    border: none;
    text-transform:capitalize;
    &.acitve{
      color:#fd346e;
    }
    &:hover{
      color:#fd346e;
    }
    &:focus{
        box-shadow:none;  
    }
`

Portfolio.MasonryWrapper = styled(Box)`
  
  .masonry-grid {
    display: flex;
    width: auto;
    a{
        display:block;
      }
    &.no-gutter{
        .masonry-grid_column{
            padding-left: 0px; 
            &>div{
                margin-top: 0;
                margin-bottom: 0;
                a{
                  display:block;
                }
            }
        }
    }
  }

  .masonry-grid_column {
    padding-left: 15px; /* gutter size */
    background-clip: padding-box;
  }
  
  /* Style your items */
  .masonry-grid_column > div {
    margin: 15px auto;
  }

`

Portfolio.Button = styled(Button)`
  box-shadow:0 4px 4px rgb(253 100 52 / 30%);
  min-width: 180px;
    height: 56px;
    border-radius: 500px!important;
    font-size: 15px;
    color:#fff!important;

    &:hover{
    color:#fff!important;
    box-shadow:0 4px 4px rgb(253 100 52 / 0%);
  }
`;

Portfolio.Box = styled(Box)``;

export default Portfolio