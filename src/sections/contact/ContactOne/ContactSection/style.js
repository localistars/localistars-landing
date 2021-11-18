import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const Contact = styled(Box)`
  padding-top: 50px;
  padding-bottom: 36px;
  border-top: 1px solid rgba(38, 39, 41, 0.1);
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 100px;
  }
`;
Contact.From = styled(Box)`
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
  .form-floating {
    label {
      padding-left: 25px;
      font-size: 15px;
      min-height: 45px;
      padding-top: 0;
      padding-bottom: 0;
      color: rgba(#262729, 0.5);
    }

    textarea {
      min-height: 175px;

      & ~ label {
        margin-top: 20px;
      }
    }

    input {
      & ~ label {
        display: flex;
        align-items: center;
      }
    }
  }

  .form-control {
    padding-left: 25px;
    padding-right: 25px;
    border: 0;
    font-size: 15px;
  }

  input.form-control {
    border-radius: 500px !important;
    background: transparent;
    color: #262729;
    height: 45px !important;
    border: 1px solid rgba(38, 39, 41, 0.1) !important;
    &:focus {
      background: white !important;
    }
    &::placeholder {
      color: transparent;
    }
  }

  textarea {
    background: transparent;
    min-height: 175px;
    border-radius: 15px;
    color: #262729;
    border: 1px solid rgba(38, 39, 41, 0.1) !important;
    & ~ label {
    }
  }

  .form-check {
    input.form-check-input {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      border-radius: 3px;
      border: 0;

      &:checked[type='checkbox'] {
        background-color: #5034fc !important;
        box-shadow: none;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-check-label {
      margin-left: 8px;
      font-size: 13px;
    }
  }
`;
Contact.WidgetsBox = styled(Box)`
  padding: 30px 30px 15px;
  background-color: #5034fc;
  border-radius: 15px;

  @media (min-width: 575px) {
    padding: 40px 50px 15px;
  }
  @media (min-width: 992px) {
    margin-left: 30px;
  }

  @media (min-width: 1200px) {
    margin-left: 95px;
    margin-right: 0;
  }

  @media (min-width: 1400px) {
    margin-left: 100px;
    margin-right: 80px;
  }
`;
Contact.Widgets = styled(Box)`
  display: flex;
  margin-bottom: 20px;
`;
Contact.WidgetsBoxTitle = styled(Heading)`
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  font-size: 32px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 42px;
  text-align: left;
`;
Contact.WidgetsBoxText = styled(Paragraph)`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 28px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 30px;
  margin-bottom: 35px;
`;
Contact.WidgetsIcon = styled(Paragraph)`
  min-width: 55px;
  min-height: 55px;
  max-width: 55px;
  max-height: 55px;
  margin-right: 30px;
  background-color: rgba(38, 39, 41, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  color: #fff;
  border-radius: 50%;
  &.active {
    color: #5034fc;
    background-color: #fff;
  }
`;
Contact.WidgetsTitle = styled(Heading)`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26px;
  text-align: left;
  margin-bottom: 5px;
`;
Contact.WidgetsText = styled(Paragraph)`
  opacity: 0.7;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-bottom: 10px;
`;
Contact.WidgetsBoxBody = styled(Box)``;
Contact.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  background-color: #ff5722 !important;
  box-shadow: 0 4px 4px rgba(253, 100, 52, 0.3) !important;
  border-radius: 55px;
  color: #fff !important;
  border-radius: 500px !important;
  &:hover {
    color: #fff !important;
    background-color: rgba(255, 87, 34, 0.7) !important;
  }
`;
Contact.Box = styled(Box)``;
export default Contact;
