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
            <Promo.Title as="h2" fontColor="#fff" mb="25px">Discuss a new project</Promo.Title>
            <Promo.Text fontColor="#fff" mb="30px">Don’t miss out the potential visitors and sales for the <br/>
absence of your digital presence.</Promo.Text>
            <Promo.Button as={Link} to="/">Get started</Promo.Button>
          </Promo.Box>
        </Promo.ContentBox>
      </Col>
    </Row>
  </Container>
</Promo>

)
}