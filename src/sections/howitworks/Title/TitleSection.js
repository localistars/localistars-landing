import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Title from './style';
import SectionTitle from './Components/SectionTitle';
import { useTranslation, Trans } from 'next-i18next';

export default function AboutSection() {
  const { t } = useTranslation('translations');

  return (
    <Title>
      <Container>
        <Row className="align-items-stretch justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"
          >
            <Title.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle={t('how.process.consumer.one.subTitle')}
                title={t('how.process.consumer.one.title')}
                text={
                  <Trans i18nKey="how.process.consumer.one.text">
                    Make sure you have
                    <Link to="/translator#get-started">
                      set up your account.
                    </Link>
                  </Trans>
                }
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <hr></hr>
            </Title.Content>
          </Col>
          <Col
            col="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          >
            <Title.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle={t('how.process.creator.one.subTitle')}
                title={t('how.process.creator.one.title')}
                text={
                  <Trans i18nKey="how.process.creator.one.text">
                    Make sure you have
                    <Link to="/translationjob#get-started">
                      set up your account.
                    </Link>
                  </Trans>
                }
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <hr></hr>
            </Title.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </Title>
  );
}
