import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContentWidget from './Components/Widget'
import Content from './style'
import prefix from '~lib/prefix';

export default function ContentSectionOne({...rest}){
  return(
  <Content backgroundColor="rgba(169, 210, 255, 0.1)" {...rest}>
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col xs="12" className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
              <Content.Subtitle as="h6" fontColor="#6001d3">Why Choose Us</Content.Subtitle>
              <Content.Title as="h2" mb="13px">Specialist in aviding <br className="d-none d-xs-block"/>clients on financial<br className="d-none d-xs-block"/>challenges</Content.Title>
            <Content.Text mb="45px" mbXL="65px">Corporate headquarters is the part of a corporate structure that<br className="d-none d-md-block" /> deals with important tasks such as strategic planning, </Content.Text>
          <Content.Widget>
            {/* Single Widget */}
            <ContentWidget 
            icon={"fa fa-rocket"} 
            title={"Fast Working Process"} 
            text={"Corporate headquarters is the part of a corporate structure that deals with important"} 
            />
            {/* Single Widget */}
            <ContentWidget 
            icon={"fa fa-hammer"} 
            title={"Dedicated Team"} 
            text={"Corporate headquarters is the part of a corporate structure that deals with important"} 
            />
            {/* Single Widget */}
            <ContentWidget 
            icon={"fa fa-hourglass"} 
            title={"24/7 Hours Support"} 
            text={"Corporate headquarters is the part of a corporate structure that deals with important"} 
            />
          </Content.Widget>
        </Col>
        <Col xs="12" className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-10 order-1 order-lg-2">
          <Content.Widget mb="30px" mbXL="0px">
            <img src={`${prefix}/image/home-services/content-img-l4-2.png`} alt="content" className="w-100"/>
          </Content.Widget>
        </Col>
      </Row>
    </Container>
  </Content>
  )
}
