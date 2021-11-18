import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './Components/SectionTitle';
import About from './style';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

export default function ManageSection() {
  const { t } = useTranslation('translations');

  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center g-0">
          <Col xs="12" className="col-xxl-6 col-lg-5 col-md-10">
            <About.Image>
              <img
                src={`${prefix}/image/translator/about-us-l5-img.png`}
                alt="content"
                className="w-100"
              />
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-7 col-md-10">
            <About.Box>
              {/* Section Title */}
              <About.Content>
                <SectionTitle
                  subTitle={t('consumer.manage.subTitle')}
                  title={t('consumer.manage.title')}
                  text={t('consumer.manage.text')}
                  subTitleProps={{
                    mb: '10px',
                    className: 'subline',
                    fontColor: '#5034fc'
                  }}
                  titleProps={{ mb: '10px', as: 'h2' }}
                  mb="69px"
                />
              </About.Content>

              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
