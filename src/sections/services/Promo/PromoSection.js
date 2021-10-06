import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
        <Promo.InnerWrapper style={{backgroundImage: `url("image/home-services/promo-l4-img.png")`}}>
            <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle>
            <Promo.Title as="h2" fontColor="#fff">Book service online</Promo.Title>
            <Promo.Text fontColor="#fff">The fastest way to talk to one of our Customer Service<br className="d-none d-sm-block" /> agents about your bookings. Yes – any cancellation fees<br className="d-none d-sm-block" /> are determined by the property.</Promo.Text>
            <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button>
        </Promo.InnerWrapper>
      </Col>
    </Row>
  </Container>
</Promo>

)
}