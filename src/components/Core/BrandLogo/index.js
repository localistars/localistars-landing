import React from 'react';
import darklogo from '../../../../public/image/logo/logo-black.svg';
import lightLogo from '../../../../public/image/logo/logo-white.svg';

export default function BrandLogo({ logoWhite = false, ...rest }) {
  return (
    <>
      <img
        src={logoWhite ? lightLogo : darklogo}
        style={{ height: 21 }}
        alt="localistars logo"
        {...rest}
      />
    </>
  );
}
