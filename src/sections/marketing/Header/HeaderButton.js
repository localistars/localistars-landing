import React from 'react';
import { Link } from '~components';
import styled from 'styled-components';
import { Box } from '~styled';

export const HeaderButtonWrapper = styled(Box)`
  .btn {
    min-width: auto;
    height: 42px;
    border-radius: 3px;
    color: var(--bs-white);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    letter-spacing: -0.4px;
    color: #262729;
    margin-left: 10px;
    &:hover {
      /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
    }
    &-2 {
      min-width: 129px;
      height: 42px;
      background-color: #f2f5fb;
      border-color: #f2f5fb;
    }
  }
`;
const HeaderButton = ({
  btnOneLink,
  btnTwoLink,
  btnOneText,
  btnTwoText,
  ...rest
}) => {
  return (
    <HeaderButtonWrapper {...rest}>
      <Link target="_blank" className="btn" to={btnOneLink ? btnOneLink : '/'}>
        {btnOneText}
      </Link>
      <Link
        target="_blank"
        className="btn btn-2"
        to={btnTwoLink ? btnTwoLink : '/'}
      >
        {btnTwoText}
      </Link>
    </HeaderButtonWrapper>
  );
};

export default HeaderButton;
