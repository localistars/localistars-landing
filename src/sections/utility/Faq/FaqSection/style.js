import styled from 'styled-components';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';

const Faq = styled(Box)`
  padding-top: 50px;
  padding-bottom: 40px;

@media (min-width: 768px) {

    padding-top: 70px;
    padding-bottom: 60px;
}
@media (min-width: 992px) {
    padding-top: 105px;
    padding-bottom: 120px;
}
*:focus { outline: none; }
`
Faq.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    text-align:center;

    @media (min-width: 768px) {
      font-size: 38px;
    }

    @media (min-width: 992px) {
      font-size: 48px;
    }
`
Faq.Body = styled(Box)`
`
Faq.Accordion = styled(Box)`
    .accordion{
        &-item{
            border: none;
            box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
            background-color: #fff;
            margin-bottom: 20px;
            padding: 0 40px;
            .accordion-trigger{
            width: 100%;
            display: block;
            cursor: pointer;
            font-size: 21px;
            font-weight: 500;
            letter-spacing: normal;
            line-height: 1.2;
            color: #262729;
            padding-top: 47px;
            padding-bottom: 24px;
            position:relative;
                &:before{
                content: "\f067";
                font-family: "Font Awesome 5 Free";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                font-weight: 700;
                background-image: none;
                color: #0abfbc;
                }
            }
            &.active{
                .accordion-trigger:before{
                content: "\f068";
                font-family: "Font Awesome 5 Free";
                position: absolute;
                right: 0;
                font-size: 16px;
                top: 50%;
                transform: translateY(-50%);
                font-weight: 700;
                background-image: none;
                color: #0abfbc;
                }
            } 

        }

            p{
            margin:0;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 2;
            color: rgba(38, 39, 41, 0.7);
            padding:0 20px;
            padding-bottom: 43px;
            position: relative;
            margin:0;
            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 93px;
                background-color: #0abfbc;
            }
            }
    }
`

Faq.Box = styled(Box)`
`
Faq.TabWrapper = styled(Box)`
`
Faq.ButtonGroup = styled(Box)`
p{
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    color:#262729;
    a{
        color:#fd346e;
    &:hover{
        color:#fd346e;
    }
    }
}
`


export default Faq;