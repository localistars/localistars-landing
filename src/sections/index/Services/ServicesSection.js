import React from 'react'
import ServicesCard from './Components/Card'
import Service from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function ServicesSection(){
return(
<Service>
  <Container className="container">
    <Row className="row justify-content-center">
      <Col className="col-xl-8 text-center">
        <SectionTitle
        subTitle="Our Services" 
        title="Provided Featrues"
        titleProps={{mb:"40px", mbLG:"75px"}}
        subTitleProps={{mb:"20px"}}
        />
      </Col>
    </Row>
    <Row className="row justify-content-center">
      {/* Single Services */}
      <Col xs="12" className="col-xl-3 col-lg-4 col-md-6 col-xs-8">
      <ServicesCard title="Team Accounts" icon="fas fa-bell"  iconColor="#ff7272"  text="There are many variations and<br class='d-none d-xs-block d-lg-none d-xl-block'> passages of Lorem
        lpsum<br class='d-none d-xs-block  d-lg-none d-xl-block'> available for use" />
      </Col>
      {/*/ .Single Services */}
      {/* Single Services */}
      <Col className="col-xl-3 col-lg-4 col-md-6 col-xs-8">
      <ServicesCard title="Digital Agency" icon="fas fa-layer-group"  iconColor="#099a97"  text="There are many variations and<br class='d-none d-xs-block d-lg-none d-xl-block'> passages of Lorem
        lpsum<br class='d-none d-xs-block d-lg-none d-xl-block'> available for use" />
      </Col>
      {/*/ .Single Services */}
      <Col xs="12" className="col-xl-3 col-lg-4 col-md-6 col-xs-8">
      <ServicesCard title="Email Marketing" icon="fas fa-envelope"  iconColor="#ff8d52"  text="There are many variations and<br class='d-none d-xs-block d-lg-none d-xl-block'> passages of Lorem
        lpsum<br class='d-none d-xs-block  d-lg-none d-xl-block'> available for use" />
      </Col>
      {/*/ .Single Services */}
      {/*/ .Single Services */}
      <Col xs="12" className="col-xl-3 col-lg-4 col-md-6 col-xs-8">
      <ServicesCard title="API Reference" icon="fas fa-chart-pie"  iconColor="#be79df"  text="There are many variations and<br class='d-none d-xs-block d-lg-none d-xl-block'> passages of Lorem
        lpsum<br class='d-none d-xs-block  d-lg-none d-xl-block'> available for use" />
      </Col>
      {/*/ .Single Services */}
    </Row>
  </Container>
</Service>
)
}

