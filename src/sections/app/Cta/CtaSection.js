import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import Cta from './style'
export default function CtaSection(){
return(
<Cta>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-7 col-lg-10 col-md-11 text-center">
        <Cta.Box>
          <Cta.Title mb="35px">Register your <br />company for free below</Cta.Title>
          <Cta.Text fonColor="rgba(38, 39, 41, 0.7)">*No fees for issuing tenders or bidding! No obligations!
</Cta.Text>
          <Cta.Box mt="35px">
            <Cta.Button as={Link} to="/register" className="btn btn-bittersweet text-white box-shadow-1">Register</Cta.Button>
           
          </Cta.Box>
        </Cta.Box>
      </Col>
    </Row>
  </Container>
</Cta>
)
}