import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Cta from './style';
import { useTranslation, Trans } from 'next-i18next';

export default function CtaSection() {
  const { t } = useTranslation('translations');

  return (
    <Cta>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-7 col-lg-10 col-md-11 text-center">
            <Cta.Box>
              <Cta.Title mb="35px">
                <Trans i18nKey="index.cta.title">
                  Register as <br />
                  translator or as translation company for free below
                </Trans>
              </Cta.Title>
              <Cta.Text fonColor="rgba(38, 39, 41, 0.7)">
                {t('index.cta.text')}
              </Cta.Text>
              <Cta.Box mt="35px">
                <Cta.Button
                  as={Link}
                  target="_blank"
                  href="https://www.localistars.app/register"
                  className="btn btn-bittersweet text-white box-shadow-1"
                >
                  {t('index.cta.btn')}
                </Cta.Button>
              </Cta.Box>
            </Cta.Box>
            <hr />
          </Col>
        </Row>
      </Container>
    </Cta>
  );
}
