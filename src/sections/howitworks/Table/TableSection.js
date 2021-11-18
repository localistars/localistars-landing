import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from './style';
import SectionTitle from './Components/SectionTitle';
import prefix from '~lib/prefix';
import { useTranslation } from 'next-i18next';

const bg2 = {
  bg2: 'bg-athens-gray'
};

export default function AboutSection() {
  const { t } = useTranslation('translations');

  return (
    <Table>
      <Container>
        {/*/ 1st Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.consumer.two.title')}
                text={t('how.process.consumer.two.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/draft.jpg`}
                  alt="draft"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
          <Col
            col="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          ></Col>
        </Row>
        {/*/ 1st Row end */}

        {/*/ 2nd Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"
          ></Col>
          <Col
            xs="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.creator.two.title')}
                text={t('how.process.creator.two.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/start_bid.jpg`}
                  alt="start bid"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
        </Row>
        {/*/ 2nd Row end */}

        {/*/ 3rd Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.consumer.three.title')}
                text={t('how.process.consumer.three.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/choose_bid.jpg`}
                  alt="choose bid"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
          <Col
            col="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          ></Col>
        </Row>
        {/*/ 3rd Row end */}

        {/*/ 4th Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray"
          >
            <Table.Content mt="50px" mtLG="1" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.consumer.four.title')}
                text={t('how.process.consumer.four.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/accounting.jpg`}
                  alt="accounting"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
          <Col
            col="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse"
          ></Col>
        </Row>
        {/*/ 4th Row end */}

        {/*/ 5th Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"
          ></Col>

          <Col
            xs="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.creator.three.title')}
                text={t('how.process.creator.three.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/upload_files.jpg`}
                  alt="start bid"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
        </Row>
        {/*/ 5th Row end */}

        {/*/ 6th Row start */}
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 border bg-athens-gray"
          >
            <Table.Content mt="50px" mtLG="1" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.consumer.five.title')}
                text={t('how.process.consumer.five.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/paid_project.jpg`}
                  alt="paid_project"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>

          <Col
            col="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"
          ></Col>
        </Row>

        {/*/ 6th Row end */}

        {/*/ 7th Row start */}
        <Row className="align-items-stretch justify-content-center">
          <Col
            xs="12"
            className="col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.consumer.six.title')}
                text={t('how.process.consumer.six.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/transactions.jpg`}
                  alt="transactions"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>

          <Col
            xs="12"
            className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse"
          >
            <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={t('how.process.creator.four.title')}
                text={t('how.process.creator.four.text')}
                titleProps={{ mb: '15px' }}
                subTitleProps={{ mb: '5px' }}
              />
              <Table.HIWimage>
                <img
                  src={`${prefix}/image/howitworks/payout.jpg`}
                  alt="payout"
                  className="w-100"
                />
              </Table.HIWimage>
            </Table.Content>
          </Col>
        </Row>
        {/*/ 7th Row end */}
      </Container>
    </Table>
  );
}
