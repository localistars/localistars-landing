import React from 'react';
import Content from './style';
import { SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';
import prefix from '~lib/prefix';

export default function ContentSectionOne() {
  return (
    <Content>
      <Content.SectionShape>
        <img
          src={`${prefix}/image/project-management/l2-content-1-shape.png`}
          alt="content"
          className="w-100"
        />
      </Content.SectionShape>
      <Container>
        <Content.Inner>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
              <Content.TextBlock>
                <Content.Title as="h2">
                  {' '}
                  <SuperTag value="The intelligent<br className='d-none d-lg-block' /> way to manage<br className='d-none d-lg-block' /> any project." />{' '}
                </Content.Title>

                <Content.Text>
                  {' '}
                  <SuperTag value="Create custom landing pages with Fastland<br className='d-none d-xs-block' /> that converts more visitors than any<br className='d-none d-xs-block' /> website. Easy, Reliable &amp; Fast." />{' '}
                </Content.Text>
                <Content.Button to="/">Get Started Now</Content.Button>
              </Content.TextBlock>
            </Col>
            <Col
              xs="12"
              className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2"
            >
              <Content.Image>
                <img
                  src={`${prefix}/image/project-management/l2-content-img-1.png`}
                  alt="content"
                  className="w-100"
                />
                <Content.ContentShape>
                  <img
                    src={`${prefix}/image/project-management/l2-content-img-2.png`}
                    alt="content"
                    className="w-100"
                  />
                </Content.ContentShape>
              </Content.Image>
            </Col>
          </Row>
        </Content.Inner>
      </Container>
    </Content>
  );
}
