import React from 'react';
import ImageGroup from './style';
import prefix from '~lib/prefix';

const FeatureImages = ({ mainImage, name = 'bid.gif' }) => {
  return (
    <>
      <ImageGroup>
        <div className="main">
          <img
            src={`${prefix}/image/index/${name}`}
            alt={name}
            className="w-100"
            loading="lazy"
          />
        </div>

        <div className="shape">
          <img src={`${prefix}/image/index/l2-feature-shape.png`} alt="shape" loading="lazy" />
        </div>
      </ImageGroup>
    </>
  );
};

export default FeatureImages;
