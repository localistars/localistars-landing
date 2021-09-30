import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
 import Promo from "./style"
export default function PromoSection(){
return(
<Promo>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-12">
        <Promo.ContentBox className="text-center">
          <Promo.Box>
            <Promo.Title as="h2" fontColor="#fff" mb="25px">Find out how we’ll build your<br className="d-none d-lg-block" /> digital presence</Promo.Title>
            <Promo.Text fontColor="#fff" mb="30px">Don’t miss out the potential visitors and sales for the<br className="d-none d-sm-block" /> absence of your digital presence.</Promo.Text>
            <Promo.Button as={Link} to="/">Get started</Promo.Button>
          </Promo.Box>
        </Promo.ContentBox>
      </Col>
    </Row>
  </Container>
</Promo>

)
}