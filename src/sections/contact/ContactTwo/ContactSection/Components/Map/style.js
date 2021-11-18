import styled from 'styled-components';
import { Box } from '~styled';

const MapArea = styled(Box)``;
MapArea.Card = styled(Box).attrs({ className: 'card' })`
  &::before {
    content: '' !important;
    position: absolute !important;
    top: -7px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 0 !important;
    height: 0 !important;
    border-left: 5px solid transparent !important;
    border-right: 5px solid transparent !important;
    border-bottom: 7px solid #6001d3 !important;
  }
  &.card-1 {
    position: absolute;
    top: 20%;
    left: -6%;
    transform: scale(0.7);

    @media (min-width: 480px) {
      left: 0;
    }
    @media (min-width: 575px) {
      top: 25%;
      left: 3%;
      transform: scale(1);
    }
    @media (min-width: 768px) {
      left: 8%;
    }
  }
  &.card-2 {
    position: absolute;
    bottom: -30px;
    right: -30px;
    transform: scale(0.7);
    @media (min-width: 480px) {
      bottom: -5%;
      right: 0;
    }
    @media (min-width: 575px) {
      bottom: -13%;
      right: 0;
      transform: scale(1);
    }
    @media (min-width: 768px) {
      bottom: -3%;
    }
    @media (min-width: 992px) {
      bottom: 7%;
      right: 5%;
      padding: 10px 15px;
    }
  }

  background-color: #6001d3 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 10px 10px;
  max-width: 142px;
  height: 77px;
  border-radius: 5px;
  p {
    margin-bottom: 0;
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 20px;
  }
`;

export default MapArea;
