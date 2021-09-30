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
          <Cta.Title mb="35px">App Is Available For Free On Google Play &amp; App Store</Cta.Title>
          <Cta.Text fonColor="rgba(38, 39, 41, 0.7)">We’ll help you achieve your marketing &amp; business goals</Cta.Text>
          <Cta.Box mt="35px">
            <Cta.Button as={Link} to="/" className="btn btn-bittersweet text-white box-shadow-1"><i className="fab fa-apple" />Apple Store</Cta.Button>
            <Cta.Button as={Link} to="/" className="btn btn-niagara text-white box-shadow-2"><i className="fab fa-google-play" />Google Play</Cta.Button>
          </Cta.Box>
        </Cta.Box>
      </Col>
    </Row>
  </Container>
</Cta>
)
}