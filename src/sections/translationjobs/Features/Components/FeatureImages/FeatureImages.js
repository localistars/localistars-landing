import React from 'react';
import ImageGroup from './style';
import prefix from '~lib/prefix';

const FeatureImages = ({ mainImage }) => {
  return (
    <>
      <ImageGroup>
        <div className="main">
          <img
            src={`${prefix}/image/translationjobs/l2-feature-img-1.png`}
            alt="feature tab"
            className="w-100"
          />
        </div>

        <div className="shape">
          <img
            src={`${prefix}/image/translationjobs/l2-feature-shape.png`}
            alt="shape"
          />
        </div>
      </ImageGroup>
    </>
  );
};

export default FeatureImages;
