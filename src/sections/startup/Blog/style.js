import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Blog = styled(Box)`
    padding-top: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 10px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
`
Blog.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    position:relative;
    @media (min-width:768px) {
      font-size: 35px;
    }

    @media (min-width:992px) {
      font-size: 45px;
    }
`
Blog.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`

Blog.Box = styled(Box)`

`


export default Blog;