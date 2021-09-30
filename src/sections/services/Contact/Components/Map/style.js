import styled from 'styled-components';
import { Box } from '~styled';

const MapArea = styled(Box)`
`
MapArea.Card = styled(Box).attrs({className:"card"})`
   background-color: #6001d3!important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute!important;
    padding: 10px 10px;
    max-width: 142px;
    height: 77px;
    border-radius: 5px;
&::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #6001d3;
}
&.card-1{
    top: 20%;
    left: -6%;
    transform: scale(.7);

    @media (min-width:480px){
        left: 0;
    }
    @media (min-width:575px){
        top: 25%;
        left: 3%;
        transform: scale(1);
    }
    @media (min-width:768px){
        left: 8%;
    }
}
&.card-2{
    bottom: -30px;
    right: -30px;
    transform: scale(.7);
    @media (min-width:480px){
        bottom: -5%;
        right: 0;
    }
    @media (min-width:575px){
        bottom: -13%;
        right: 0;
        transform: scale(1);
    }
    @media (min-width:768px){
        bottom: -3%;
    }
    @media (min-width:992px){ 
        bottom: 7%;
        right: 5%;
        padding: 10px 15px;
    }
}

 
    p{
        margin-bottom: 0;
        color: #fff;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 20px;
    }
`

export default MapArea;