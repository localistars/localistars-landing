
import styled from 'styled-components';
import { Box, Heading } from '~styled';

export const TabTitle = styled(Heading)`
        font-size: 38px;
        font-weight: 500;
        letter-spacing: -2px;
        line-height: 1.20689;
        margin-bottom: 40px;
        color:#fff;

        @media (min-width:768px) {
            font-size: 48px;
        }

        @media (min-width:992px) {
            font-size: 58px;
        }
`