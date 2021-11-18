import styled from 'styled-components';
import { Box, Heading, Button, Paragraph } from '~styled';

const SignInForm = styled(Box)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  color: #fff;
  @media (min-width: 992px) {
    color: #262729;
  }
`;
SignInForm.Image = styled(Box)`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  @media (min-width: 992px) {
    width: 40%;
  }
  @media (min-width: 1200px) {
    width: 43%;
  }
  @media (min-width: 1400px) {
    width: 45%;
  }
  &:before {
    background: #000;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.6;
    @media (min-width: 992px) {
      opacity: 0;
    }
  }
`;
SignInForm.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  color: inherit;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 33px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
  }
`;
SignInForm.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  margin-bottom: 50px;
  opacity: 0.7;
  color: inherit;
`;
SignInForm.FromSection = styled(Box)`
  form {
    @media (min-width: 992px) {
      margin-right: 25px;
    }
    @media (min-width: 1200px) {
      margin-right: 40px;
    }
    .form-floating {
      label {
        padding-left: 25px;
        font-size: 15px;
        min-height: 56px;
        padding-top: 0;
        padding-bottom: 0;
        color: rgba(38, 39, 41, 0.5);
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
      background: #fff;
      padding-left: 25px;
      padding-right: 25px;
      border: 0;
    }

    input.form-control {
      border-radius: 500px;
      background: #fff;
      color: #727c92;
      height: 56px !important;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 30px;
      margin-bottom: 24px;

      &::placeholder {
        color: transparent;
      }
    }

    textarea {
      min-height: 175px;
      border-radius: 15px;
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
        color: inherit;
      }
    }
  }
`;
SignInForm.FormButton = styled(Button)`
  min-width: 180px;
  height: 56px;
  border-radius: 500px !important;
  color: #fff !important;
  box-shadow: 0 4px 4px rgb(253 100 52 / 30%);
  &:hover {
    color: #fff;
  }
`;
SignInForm.FormText = styled(Box)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  color: inherit;
  a {
    color: #5034fc;
    margin-left: 11px;
  }
`;

SignInForm.Box = styled(Box)`
  /* height:100vh; */
`;

export default SignInForm;
