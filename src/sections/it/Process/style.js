import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Process = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }

`
Process.Subtitle = styled(Heading)
`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Process.Title = styled(Heading)
`
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.2;
    font-size: 30px;
    color: #262729;
    margin-bottom: 45px;

    @media (min-width:768px) {
        font-size: 38px;
    }
    
    @media (min-width:992px) {
        font-size: 45px;
        margin-bottom: 0;
    }
`
Process.Box = styled(Box)
``
Process.Widgets = styled(Box)
`
.single-widget {
    &:nth-child(1) {
        & > div {
            &::before {
                opacity: 0.1;
            }
        }
    }
    &:nth-child(2) {
        @media (min-width:992px) {
            & > div {
                &::before {
                    opacity: 0.1;
                }
            }
        }
    }

    &:last-child {
        & > div {
            &::before {
                opacity: 0;
            }
        }
    }
}
`

export default Process;