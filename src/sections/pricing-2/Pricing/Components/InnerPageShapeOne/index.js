import React from 'react';
import InnerPromoShape from '../../../../../../public/image/mixed/inner-banner-shape.png';
import Shape from './style';
export default function InnerShape() {
  return (
    <Shape>
      <img src={InnerPromoShape.src} alt="shape" loading="lazy" />
    </Shape>
  );
}
