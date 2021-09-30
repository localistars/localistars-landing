import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const PortfolioDetails = styled(Box)`
    padding: 45px 0;

    @media (min-width: 768px)  {
        padding: 80px 0;
    }

    @media (min-width: 992px) {
        padding: 115px 0;
    }
`
PortfolioDetails.Image = styled(Box)`
    img{
        border-radius: 10px;
    }
`
PortfolioDetails.Content = styled(Box)`

`

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
`

PortfolioDetails.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    margin-bottom: 20px;
    margin-right: 10px;
`
PortfolioDetails.List = styled(Box)`
padding:0;
margin:0;
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
            content: "";
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
`

PortfolioDetails.Box = styled(Box)``
PortfolioDetails.SliderWrapper = styled(Box)`
.slick-list{
    margin:0 -12px;
    @media (min-width:992px) {
        width: 150%;
    }
}
.slick-slide{
    padding:0 12px;
    &:focus{
        outline:none!important;
        box-shadow:none;
    }
}
.single-slide{

    border-radius:10px;
    overflow:hidden;
    img{
        width:100%;
    }
}


.slick-dots{
    background: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    position: relative;
    height:6px;
    margin-top:40px;
    li {
        position: absolute;
       
        width: 100%;
        height: 100%;
        margin: 0;
        list-style: none;
        overflow:hidden;
        border-radius:500px;
        button {
            position:absolute;
            padding: 0;
            width: 0;
            height:100%;
            margin: 0;
            border: none;
            background: transparent;
            font-size: 0;
            transition: width 6s linear;
            border-radius:500px;
            /* transition-delay: .5s; */
            /* top:0;
            left:0; */
        }

        &.slick-active {
            display: block;
            width: 100%;
            top: 0;
            left: 0;
            button {
            background: var(--bs-electric-violet-2);
                width: 100%;
            }
        }
    }
}
`
PortfolioDetails.Slide = styled(Box).attrs({className:"single-slide"})`
       
`


export default PortfolioDetails;