import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '~components';
import Cta from './style';
import { Link } from '~components';
import prefix from '~lib/prefix';
import { useTranslation, Trans } from 'next-i18next';

const CtaSection = () => {
  const { t } = useTranslation('translations');

  return (
    <>
      <Cta className="cta-section cta-section--l1">
        <Cta.Shape className="footer__shape-1">
          <img
            src={`${prefix}/image/pricing/footer-shape.png`}
            alt="cta shape"
            className="w-100"
          />
        </Cta.Shape>

        <Container>
          <Row className="justify-content-center">
            <Col className="col-lg-7 col-md-8 text-center">
              <Cta.Box>
                <Cta.Title as="h2">
                  <Trans i18nKey="pricing.cta.title">
                    No reason to postpone <br className="d-none d-xs-block" />a
                    registration now
                  </Trans>
                </Cta.Title>

                <Form.Button
                  className="btn btn-primary"
                  style={{ color: 'white' }}
                  as={Link}
                  target="_blank"
                  href="https://www.localistars.app/login"
                  value={t('pricing.cta.btn')}
                />
              </Cta.Box>
            </Col>
          </Row>
        </Container>
      </Cta>
    </>
  );
};

export default CtaSection;
