import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const CommentsForm = styled(Box)`
    .form-floating {
        label {
        padding-left: 25px;
        font-size: 15px;
        min-height: 45px;
        padding-top: 0;
        padding-bottom: 0;
        color: rgba($shark, 0.5);
        }

        textarea {
        min-height: 175px;

        &~label {
            margin-top: 20px;
        }
        }

        input {
        &~label {
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
        font-size: 15px;
    }

    input.form-control {
        border-radius: 500px;
        background: #fff;
        color: $shark;
        height: 45px !important;

        &::placeholder {
        color: transparent;
        }
    }

    textarea {
        min-height: 175px;
        border-radius: 15px;

        &~label {}
    }

    .form-check {
        input.form-check-input {
        min-width: 20px;
        min-height: 20px;
        max-width: 20px;
        max-height: 20px;
        border-radius: 3px;
        border: 0;

        &:checked[type="checkbox"] {
            background-color: var(--bs-secondary) !important;
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
`
CommentsForm.Title = styled(Heading)`
    font-size: 36px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 54px;
    color: #25373f;
    margin-bottom: 60px;
`
CommentsForm.LableText = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    color: #262729;
    margin-bottom: 0;
`
CommentsForm.Button = styled(Button)`
    min-width: 180px;
    height: 56px;
    box-shadow: 0 4px 4px rgba(253, 100, 52, 0.3);
    border-radius: 500px;
`
CommentsForm.Box = styled(Box)`

`

export default CommentsForm;