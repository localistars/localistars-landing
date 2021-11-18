import React from 'react';
import { Col, Container, Form, FormCheck, Row } from 'react-bootstrap';
import Promo from './style';
import Cta from '../Cta/style';
import { Link } from '~components';
import SectionTitle from './Components/SectionTitle';
import { useTranslation } from 'next-i18next';
import prefix from '~lib/prefix';

export default function CtaSection() {
  const { t } = useTranslation('translations');

  return (
    <Promo>
      <Container>
        <Row className="justify-content-center justify-content-xl-end">
          <Col
            xs="12"
            className="col-xxl-6 col-xl-5 col-lg-5 col-md-7 col-xs-9"
          >
            <Promo.Image>
              <img
                src={`${prefix}/image/index/promo-l8-img.png`}
                alt="man watch localistars"
                placeholder="blur"
              />
            </Promo.Image>

            <Promo.Image1>
              <img
                src={`${prefix}/image/index/man-350.png`}
                alt="man watch localistars 350"
                placeholder="blur"
              />
            </Promo.Image1>
          </Col>
          <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
            <Promo.Content>
              <Promo.Box>
                <SectionTitle
                  subTitle={t('index.promo.subTitle')}
                  title={t('index.promo.title')}
                  subTitleProps={{ mb: '30px', className: 'black' }}
                  titleProps={{ mb: '30px' }}
                />

                <Cta.Button
                  as={Link}
                  to="/translator"
                  alt=""
                  className="btn btn-bittersweet text-white box-shadow-1"
                >
                  {t('index.promo.cta')}
                </Cta.Button>
              </Promo.Box>
            </Promo.Content>
          </Col>
        </Row>
      </Container>
    </Promo>
  );
}
