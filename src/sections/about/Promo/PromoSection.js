import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InnerPromoShape from "../../../../public/image/mixed/inner-banner-shape.png";
import Promo from './style'

export default function PromoSection({...rest}){
return(
<Promo backgroundColor="#5034fc">
  <Container>
    <Row className="justify-content-center text-center">
      <Col className="col-xl-8">
        <Promo.Content>
          <Promo.Title fontColor="#fff" as="h2" mb="45px">Interested in joining our team? </Promo.Title>
          <Promo.Button background="#ff5722">Explore job opportunities</Promo.Button>
        </Promo.Content>
      </Col>
    </Row>
  </Container>
  <Promo.Shape>
    <img className="w-100" src={InnerPromoShape.src} alt="inner shape" />
  </Promo.Shape>
</Promo>

)
}