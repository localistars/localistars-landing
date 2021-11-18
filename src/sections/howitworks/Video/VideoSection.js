import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Video from './style';
import SectionTitle from './Components/SectionTitle';
import VideoFile from '~components/VideoModal';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

export default function AboutSection() {
  const { t } = useTranslation('translations');

  return (
    <Video>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <Video.Image>
              <img
                className="w-100"
                src={`${prefix}/image/howitworks/thumbnail.png`}
                alt="thumbnail locize"
              />
              <VideoFile id="T0giUsKS5KQ" className="video-btn sonar-emitter">
                {' '}
                <i className="fa fa-play" />{' '}
              </VideoFile>
            </Video.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <Video.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle={t('how.video.subTitle')}
                title={t('how.video.title')}
                text={t('how.video.text')}
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <Video.ButtonGroup mt="25px">
                <Video.Button
                  className="btn-primary btn-1"
                  as={Link}
                  target="_blank"
                  href="https://docs.locize.com/guides-tips-and-tricks/working-with-translators/localistars"
                >
                  {t('how.video.learnMore')}
                </Video.Button>
                <Video.Button
                  className="btn-electric-violet-2 btn-2"
                  as={Link}
                  to="/ecosystem"
                >
                  {t('how.video.ecosystem')}
                </Video.Button>
              </Video.ButtonGroup>
            </Video.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </Video>
  );
}
