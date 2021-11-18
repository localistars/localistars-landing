import styled from 'styled-components';
import { Box } from '../../styles';

export const Star = styled.li`
  font-size: inherit;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
`;
export const RatingWrapper = styled(Box).attrs((props) => ({
  as: 'ul'
}))`
  display: flex;
  justify-content: ${(props) => props.alignX};
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
  font-size: ${(props) => (props.size ? props.size : '18px')};
  margin-left: ${(props) => props.distance && -props.distance / 2 + 'px'};
  padding-left: 0;
  ${Star} {
    margin-left: ${(props) => props.distance && props.distance / 2 + 'px'};
    margin-right: ${(props) => props.distance && props.distance / 2 + 'px'};
    color: ${(props) => props.blankColor};
    &:before {
      content: '\f005';
    }
    &.full {
      color: ${(props) => props.fillColor};
    }
    &.half {
      color: ${(props) => props.fillColor};
      &:after {
        content: '\f089';
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;
