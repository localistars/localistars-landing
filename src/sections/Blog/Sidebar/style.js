import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const SideBar = styled(Box)`

`
SideBar.Widgets = styled(Box)`
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 56px rgb(22 22 22 / 5%);
    margin-bottom: 25px;
    display: block;
    padding-top: 35px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 35px;
`
SideBar.Title = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 20px;
    color: #262729;
`
SideBar.Search = styled(Box)`
    form {
        border: 1px solid rgba(62, 73, 243, 0.1);
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        i {
        font-size: 18px;
        letter-spacing: normal;
        line-height: 22px;
        color: #3e49f3;
        }
        input {
        border: none;
        height: 60px;
        width: 100%;
        padding-left: 20px;
        &:focus {
            outline: none;
        }
        }
    }
`

SideBar.RecentPost = styled(Box).attrs({className:"list-unstyled", as:"ul"})
`
`
SideBar.RecentPostList = styled(Box)`
    border-bottom: 1px solid rgba(38, 39, 41, 0.1);
    padding-top: 20px;
    padding-bottom: 13px;
    &:first-child {
    padding-top: 0;
    }
    &:last-child {
    border-bottom: 1px solid rgba(38, 39, 41, 0);
    padding-bottom: 0px;
    }
    &:hover {
        a {
            .widget__recent-post__title {
            color: #ff5722;
            }
        }
    }
`
SideBar.RecentPostTitle = styled(Heading).attrs({className:"widget__recent-post__title", as:"h4"})`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    color: #262729;
    transition: 0.4s;
`
SideBar.RecentPostDate = styled(Paragraph)`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    margin-bottom: 0;
    color: rgba(38, 39, 41, 0.7);
`
SideBar.Link = styled(Box)`
`
SideBar.Twitter = styled(Box)`
`
SideBar.TwitterUser = styled(Paragraph)`
    color: #5034fc;
`
SideBar.TwitterList = styled(Box)`
        border-bottom: 1px solid rgba(38, 39, 41, 0.1);
        padding-top: 20px;
        padding-bottom: 13px;
        transition: 0.4s;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          border-bottom: 1px solid rgba(38, 39, 41, 0);
          padding-bottom: 0px;
          margin-bottom: 0;
        }
    a{
        font-size: 18px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 25px;
        color: #262729;
        margin-bottom: 5px;
        display: block;
    }
`
SideBar.CateGory = styled(Box)`
`
SideBar.CateGoryTitle = styled(Heading)`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    color: #262729;
    @media (min-width: 575px) {
        // width: 75%;
    }
`
SideBar.CateGoryCount = styled(Heading)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    color: rgba(38, 39, 41, 0.7);
    display: block;
    position: relative;
    text-align: right;
        &:before {
        content: "";
        position: absolute;
        left: -100%;
        top: 50%;
        // transform: translateX(0);
        width: 51px;
        height: 1px;
        background-color: transparent;
        }
    @media (min-width: 420px) {
        width: 25%;
        &:before {
            content: "";
            position: absolute;
            left: -100%;
            top: 50%;
            // transform: translateX(0);
            width: 51px;
            height: 1px;
            background-color: rgba(38, 39, 41, 0.1);
        }
    }
`
SideBar.CateGorySingle = styled(Box)`
    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(38, 39, 41, 0.7);
        margin-bottom: 17px;
    }
    &:last-child a {
        margin-bottom: 0;
    }
`
SideBar.Ads = styled(Box)`
 a{
    width: 100%;
    display: block;
    img{
        width: 100%; 
    }
 }
`

export default SideBar;