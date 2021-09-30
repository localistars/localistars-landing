import React from 'react'
import Image from 'next/image';
import Content from './style'
import { SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';
import contentShapeOne from "~image/project-management/l2-content-1-shape.png"
import contentImage from "~image/project-management/l2-content-img-1.png"
import contentShapeTwo from "~image/project-management/l2-content-img-2.png"

export default function ContentSectionOne(){

return(
<Content>
  <Content.SectionShape>
    <Image src={contentShapeOne} alt="content" placeholder="blurred"/>
  </Content.SectionShape>
  <Container>
    <Content.Inner>
    <Row className="align-items-center justify-content-center justify-content-lg-start">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
        <Content.TextBlock>
          <Content.Title as="h2"> <SuperTag value="The intelligent<br className='d-none d-lg-block' /> way to manage<br className='d-none d-lg-block' /> any project."/> </Content.Title>

          <Content.Text> <SuperTag value="Create custom landing pages with Fastland<br className='d-none d-xs-block' /> that converts more visitors than any<br className='d-none d-xs-block' /> website. Easy, Reliable &amp; Fast."/> </Content.Text>
          <Content.Button to="/">Get Started Now
          </Content.Button>
        </Content.TextBlock>
      </Col>
      <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
        <Content.Image>
            <Image src={contentImage} alt="content" placeholder="blur"/>
          <Content.ContentShape>
            <Image src={contentShapeTwo} alt="content" placeholder="blur"/>
          </Content.ContentShape>
        </Content.Image>
      </Col>
    </Row>
    </Content.Inner>
  </Container>
</Content>
)
}