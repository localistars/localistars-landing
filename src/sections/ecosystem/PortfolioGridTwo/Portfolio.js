import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioCard from './Components/Card';
import Portfolio from './style';
import portfolioData from '~data/ecosystem/data';
import { Link } from '~components';
import { useTranslation } from 'next-i18next';

export default function PortfolioSection({ gutters, containerFluid, ...rest }) {
  const { t } = useTranslation('translations');

  return (
    <Portfolio {...rest}>
      <Container fluid={containerFluid}>
        <Row className={`justify-content-center ${!gutters ? 'gx-0' : null}`}>
          {portfolioData.map(({ image, titleSmall, title, href, id }, index) => {
            return (
              <Portfolio.Box
                mb={gutters ? '25px' : null}
                className="col-xl-6 col-lg-4 col-xs-10"
                key={index + 'pp'}
              >
                <PortfolioCard
                  as={Link}
                  target="_blank"
                  href={href}
                  image={image}
                  title={t(`ecosystem.portfolio.${id}.title`, titleSmall)}
                  text={t(`ecosystem.portfolio.${id}.text`, title)}
                />
              </Portfolio.Box>
            );
          })}
        </Row>
      </Container>
    </Portfolio>
  );
}
