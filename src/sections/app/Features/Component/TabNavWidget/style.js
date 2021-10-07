import styled from 'styled-components';
import { Box } from '~styled';

 const Widget = styled(Box)`
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.666666;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        color: inherit;
        transition: 0.4s;

        @media (min-width:768px) {
            width: 194px;
            height: 60px;
        }

        i {
            margin-right: 10px;
            color:inherit;
        }
        span{
            color:inherit;
        }

`


export default Widget;