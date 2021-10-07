import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 50px;
    padding-bottom: 40px;
    border-bottom:1px solid #dee2e6 !important;
    @media (min-width:575px){
        padding-top: 55px;
        padding-bottom: 60px;
    }
    @media (min-width:768px) {
        padding-top: 75px;
        padding-bottom: 80px;
    }

    @media (min-width:992px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }
`
Service.Button = styled(Box).attrs({className:"Service-btn"})`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 992px){
        justify-content: flex-end;
    }
    label{
    font-size: 18px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 25px;
        color: #262729;
        margin: 0 15px;
    }
    .btn-toggle {
        position: relative;
        width: 46px !important;
        height: 26px;
        border-radius: 15px;
        border: none;
        background-color: #fff !important;
        background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
        &:focus {
          border: none;
          outline: none;
          box-shadow: none;
          background-color: #fff !important;
          background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
        }
        &:checked{
          background-color: #5034fc !important;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
         
        }
      }
      .badge {
        margin-bottom: 0;
        color: $shark;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 96px;
        height: 30px;
        border-radius: 15px;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 22px;
      }
`
Service.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.2;
    color: #262729;
    @media (min-width:768px) {
        font-size: 35px;
    }

    @media (min-width:992px) {
        font-size: 45px;
    }
`
Service.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    padding-left: 60px;
    display: inline-block;
    color: #6001d3;

    &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    bottom: 9px;
    width: 41px;
    height: 1px;
    background-color: #6001d3;
    }
     
`
Service.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.77777;
    @media (min-width:768px) {
        font-size: 18px;
    }
`



Service.Box = styled(Box)`

`


export default Service;