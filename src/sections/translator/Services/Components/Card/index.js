import React from 'react';
import { Link } from '~components';
import Card from './style';
import { useTranslation } from 'next-i18next';

export default function ServicesCard({
  icon,
  title,
  text,
  to,
  iconBackground,
  ...rest
}) {
  const { t } = useTranslation('translations');

  return (
    <Card itemCenter={true} backgroundColor="#fff" {...rest}>
      <Card.Icon as="div" background={iconBackground}>
        <i className={icon} />
      </Card.Icon>
      <Card.Title as="h4">{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Button as={Link} to={to ? to : '/'}>
        {t('consumer.service.learnMore')} <i className="fa fa-angle-right" />
      </Card.Button>
    </Card>
  );
}
