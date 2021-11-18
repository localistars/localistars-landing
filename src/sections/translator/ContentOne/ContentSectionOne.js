import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Content from './style';
import SectionTitle from './Components/SectionTitle';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

export default function ContentSectionOne() {
  const { t } = useTranslation('translations');

  return (
    <Content>
      <Container>
        <Content.InnerWrapper>
          <Row className="align-items-center justify-content-center">
            <Col
              xs="12"
              className="col-lg-4 col-md-8 col-xs-11 text-center text-lg-start"
            >
              {/* Section Title */}
              <SectionTitle
                subTitle={t('consumer.content.subTitle')}
                title={t('consumer.content.title')}
                text={t('consumer.content.text')}
                titleProps={{ mb: '30px' }}
                subTitleProps={{ mb: '25px' }}
              />
              <Content.Button background="#ff5722" rounded={true} mt="25px">
                {t('consumer.content.btn')}
              </Content.Button>
            </Col>
            <Col xs="12" className="col-xxl-5 col-lg-4 col-md-6 col-xs-9">
              <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                <img
                  src={`${prefix}/image/translator/look-for-translator.jpg`}
                  alt="Find the right translator"
                />
              </Content.Image>

              <Content.Image1 mt="30px" mb="30px" mbMD="0" mtMD="0">
                <img
                  src={`${prefix}/image/translator/look-for-translator-mobile.jpg`}
                  alt="Find the right translator"
                />
              </Content.Image1>
            </Col>
            <Col
              xs="12"
              className="col-xl-3 col-lg-4 col-md-6 col-xs-9 order-3"
            >
              <Content.WidgetsWrapper
                mb="-10px"
                mtMD="40px"
                mtLG="0"
                mrXS="70px"
                mrMD="30px"
                mrLG="0"
              >
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>
                    {t('consumer.content.widget.title')}
                  </Content.WidgetTitle>
                  <Content.WidgetText>
                    {t('consumer.content.widget.text')}
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
              </Content.WidgetsWrapper>
            </Col>
          </Row>
        </Content.InnerWrapper>
      </Container>
    </Content>
  );
}
