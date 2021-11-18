import React from 'react';
import FeatureWidget from '../FeatureWidget';
import { useTranslation } from 'next-i18next';

const FeatureWidgetsBlock = ({ widgetData, tabLabel }) => {
  const { t } = useTranslation('translations');

  return (
    <>
      <div className="feature-area--l2-widgets">
        {widgetData.map(
          ({ id, icon, iconBackground, title, text }, index) => {
            return (
              <FeatureWidget
                key={'pmftw' + index}
                icon={icon}
                iconBackground={iconBackground}
                title={t(`creator.features.${tabLabel}.widgets.${id}.title`, title)}
                text={t(`creator.features.${tabLabel}.widgets.${id}.text`, text)}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default FeatureWidgetsBlock;
