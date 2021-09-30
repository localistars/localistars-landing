import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Details = styled(Box)`
    padding:60px 0;

    @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 60px;
}

@media (min-width: 992px){
    padding: 120px 0;
}
`
Details.Image = styled(Box)`
    padding-bottom: 45px;

    @media (min-width: 768px) {
    padding-bottom: 65px;
}

@media (min-width: 992px) {
    padding-bottom: 85px;
}
    img{
        border-radius: 10px;
    }
`
Details.BigImage = styled(Box)`

`
Details.GridImage = styled(Box)`

`

Details.Title = styled(Heading)`
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

Details.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    margin-bottom: 20px;
    margin-right: 10px;
`
Details.List = styled(Box)`
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

Details.ButtonGroup = styled(Box)`
    display: flex;
    justify-content: space-between;
    .btn-link{
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color:#262729;
        &:hover{
        color: #cc461b; 
        }
    @media (min-width: 768px) {
        font-size: 21px;
    }
    }
`

Details.Box = styled(Box)``


export default Details;