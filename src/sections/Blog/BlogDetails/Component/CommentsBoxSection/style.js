import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const CommentsBox = styled(Box)`

`
CommentsBox.Title = styled(Heading)`
    font-size: 36px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 54px;
    color: #25373f;
    margin-bottom: 60px;
`
CommentsBox.Comments = styled(Box)`

`
CommentsBox.MetaSingle = styled(Box)`

`
CommentsBox.MetaBox = styled(Box)`

`
CommentsBox.Box = styled(Box)`

`
CommentsBox.Sub = styled(Box).attrs({className:"list-unstyled", as:"ul"})`
    margin-left: 125px;
`

export default CommentsBox;