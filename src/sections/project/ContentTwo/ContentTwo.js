import React from 'react'
import Content from './style'
import { Link, SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';
export default function ContentSectionTwo(){

return(
<Content backgrounColor="#fff">
  <Content.ContentShape>
    <img src="/image/project-management/l2-content-2-shape.png" alt="content"/>
  </Content.ContentShape>
  <Container>
    <Content.Block>
    <Row className="align-items-center justify-content-center justify-content-lg-start">
    <Col className="col-xl-7 col-lg-6 col-md-8 col-xs-10">
        <Content.Image>
            <img src="/image/project-management/l2-content-img-2.png" alt="content"/>
          <Content.ContentShapeTwo>
            <img src="/image/project-management/l2-content-2-shape-2.png" alt="content"/>
          </Content.ContentShapeTwo>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-5 col-lg-6 col-md-8 col-xs-10">
        <Content.Box>
          <Content.Title as="h2"> <SuperTag value="Connect with<br class='d-none d-lg-block'> team members<br class='d-none d-lg-block'> with ease."/> </Content.Title>

          <Content.Text> <SuperTag value="Create custom landing pages with Fastland<br className='d-none d-xs-block' /> that converts more visitors than any<br className='d-none d-xs-block' /> website. Easy, Reliable &amp; Fast."/> </Content.Text>
          <Content.Button to="/">Get Started Now
          </Content.Button>
        </Content.Box>
      </Col>
    </Row>
    </Content.Block>
  </Container>
</Content>
)
}