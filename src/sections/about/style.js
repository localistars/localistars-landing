import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const About = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
`

About.SubTitle = styled(Heading)`

`

About.Title = styled(Heading)`

`

About.Content = styled(Heading)`
background-color:#fee856;
padding-left: 30px;
padding-top: 30px;
padding-bottom: 30px;
padding-right: 30px;
z-index:-1;
@media (min-width: 576px){
    padding-left: 80px;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-right: 80px;
}
@media (min-width: 992px){
    padding-left: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-right: 30px;
}
@media (min-width: 1200px){
    padding-left: 110px;
    padding-top: 145px;
    padding-bottom: 145px;
    padding-right: 90px;
}
`

About.Text = styled(Paragraph)`

`

About.Image = styled(Box)`
z-index: 1;
border-radius: 5px;
position: relative;
@media (min-width: 992px){
    width: 107%;
}
`

About.Box = styled(Box)`

`

export default About;