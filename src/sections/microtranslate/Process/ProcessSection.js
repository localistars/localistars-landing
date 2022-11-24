import React, { useEffect } from 'react';
import ProcessCard from './Components/Card';
import Process from './style';
import ProcessDataAsCreator from '~data/translationjobs/Process';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation, Trans } from 'next-i18next';
import prefix from '~lib/prefix';

export default function ProcessSection({ ...rest }) {
  const { t } = useTranslation('translations');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });

  return (
    <Process {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-xl-start">
          <Col
            xs="12"
            className="col-xl-7 col-lg-8 text-center text-xl-start"
            id="get-started"
          >
            <Process.Subtitle mbLG="10px" as="h5" fontColor="#5034fc">
              {t('microtranslate.process.subTitle')}
            </Process.Subtitle>
            <Process.Title as="h2" mb="40px" mbLG="80px">
              <Trans i18nKey="microtranslate.process.title">
                It's very easy to start
                <br className="d-none d-xxl-block" /> as usual prepare your account
                <br className="d-none d-xxl-block" /> 
                <small style={{ fontWeight: 100, fontSize: 'smaller' }}>(if not already done)</small>
              </Trans>
            </Process.Title>
          </Col>
          <Col xs="12" className="col-xl-11">
            <Process.Box as="div" className="widgets">
              <Row className="justify-content-center justify-content-xl-between">
                {ProcessDataAsCreator.map(
                  ({ title, text, icon, iconBackground, id }, index) => {
                    return (
                      <Col
                        xs="12"
                        className="col-lg-3 col-md-4 col-xs-6"
                        key={index}
                      >
                        <ProcessCard icon={icon} title={t(`creator.process.steps.${id}.title`, title)} text={t(`creator.process.steps.${id}.text`, text)} />
                      </Col>
                    );
                  }
                )}
              </Row>
            </Process.Box>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center justify-content-xl-start">
          <Col xs="12" className="col-xl-11">
            <Process.Box as="div" className="widgets">
              <Row className="justify-content-center justify-content-xl-between">
                <Col
                  xs="12"
                  className="col-lg-3 col-md-4 col-xs-6"
                >
                  <ProcessCard altIcon icon="5" title={t('microtranslate.process.steps.sp5.title')} text={t('microtranslate.process.steps.sp5.text')} />
                </Col>
                <Col
                  xs="12"
                  className="col-lg-3 col-md-4 col-xs-6"
                >
                  <ProcessCard altIcon icon="6" title={t('microtranslate.process.steps.sp6.title')} text={t('microtranslate.process.steps.sp6.text')} />
                </Col>
                <Col
                  xs="12"
                  className="col-lg-6 col-md-4 col-xs-6"
                >
                  <ProcessCard altIcon icon="7" title={t('microtranslate.process.steps.sp7.title')} text={t('microtranslate.process.steps.sp7.text')} />
                </Col>
              </Row>
            </Process.Box>
          </Col>
        </Row>
        <Process.Hero backgroundColor="#e6f8f9">
          <Container>
            <img
              src={`${prefix}/image/microtranslate/screen.png`}
              className="w-100"
            />
          </Container>
        </Process.Hero>
      </Container>
    </Process>
  );
}
