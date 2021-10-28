import styled from 'styled-components';


const HeroImageGroup = styled.div`
 position: relative;
    width: 85%;
    margin: 0 auto;

    @media (min-width:768px) {
        width: 80%;
    }

    @media (min-width:992px) {
        position: absolute;
        top: 55%;
        right: 2%;
        transform: translateY(-50%);
        width: 46%;
    }

    @media (min-width:1368px) {
        width: 46% !important;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width:1366px) {
        right: 5%;
        top: 55%;
    }
`

HeroImageGroup.Inner = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    z-index: 1;

    img {
        /* width: 110%; */
    }

    @media (min-width:992px) {
        margin-left: auto;
        width: 80%;
    }

    @media (min-width:1200px) {
        margin-left: auto;
        width: 90%;
    }

    @media (min-width:1600px) {
        width: 731px;
        object-fit: contain;
    }

    .welcome-image--group-01__img-1 {
        position: absolute;
        left: -2%;
        top: -7%;
        width: 28%;
        box-shadow: 0 44px 54px rgba(37, 55, 63, 0.16);
        border-radius: 50%;
    }

    .welcome-image--group-01__img-2 {
        position: absolute;
        left: 45%;
        top: -34%;
        width: 33%;
        z-index: -1;
    }

    .welcome-image--group-01__img-3 {
        position: absolute;
        right: 12%;
        bottom: -15%;
        width: 28%;
        transform: translateX(-50%);
        z-index: -1;
    }

    .welcome-image--group-01__img-4{
        position: absolute;
        left: 0;
        top: 50%;
        width: 23%;
        z-index: -1;
        transform: translateY(-50%);
    }

    .welcome-image--group-01__img-5 {
        position: absolute;
        left: 31%;
        top: -50%;
        transform: translateX(-50%);
        width: 24%;
    }

    .welcome-image--group-01__img-6 {
        position: absolute;
        right: -9%;
        top: 50%;
        width: 27%;
        transform: translateY(-50%);
        z-index: -1;
    }

    .welcome-image--group-01__img-7 {
        position: absolute;
        right: -9%;
        bottom: -10%;
        width: 32%;
        z-index: -1;
    }
`


export default HeroImageGroup;

