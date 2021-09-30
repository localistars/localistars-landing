import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGroup from './Components/ImageGroup'
import Content from "./style"
export default function ContentSectionOne({...rest}){
return(
<>
<Content backgroundColor="#fff" {...rest}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col xs="10" className="col-xl-5 col-lg-5 col-md-6 col-xs-8">
        <ImageGroup mb="60px" mbLG="0"/>
      </Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-4 col-xl-5 offset-xl-1 col-lg-6 offset-lg-1 col-md-8 col-xs-9">
        <Content.Title as="h2">Get instant <br /> growth result <br /> for business.</Content.Title>
        <Content.Text>Create custom landing pages
          with Fastland that converts more visitors than any website. Easy, Reliable &amp; Fast. The best medicines &amp; biggest brands within 30 minutes at your home.</Content.Text>
      </Col>
    </Row>
  </Container>
</Content>

</>
)
}