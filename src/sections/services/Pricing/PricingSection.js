import React from 'react'
import { Col, Row , Container } from 'react-bootstrap'
import Pricing from './style'
import PricingCard from "./Components/Card" 
export default function PricingSection({...rest}){
return(
<Pricing backgroundColor="#f3f4f6" {...rest}>
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7">
        <Pricing.Box mbLG="60px" mb="40px" className="text-center">
          <Pricing.Subtitle fontColor="#ff1e38" as="h6">Pricing table</Pricing.Subtitle>
          <Pricing.Title mb="20px" as="h2">Live Chat 24/7 Support</Pricing.Title>
        </Pricing.Box>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {/* Single Table */}
      <Col xs="12" className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9">
          <PricingCard title="Optimizing &amp; SEO" pricetag="20"/>
      </Col>
      <Col xs="12" className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9">
          <PricingCard title="Designing" pricetag="50"/>
      </Col>
      <Col xs="12" className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9">
          <PricingCard title="Development" pricetag="60"/>
      </Col>
      <Col xs="12" className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9">
          <PricingCard title="Supporting" pricetag="80"/>
      </Col>
    </Row>
  </Container>
</Pricing>

)
}