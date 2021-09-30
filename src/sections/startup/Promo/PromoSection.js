import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Promo from './style'
import { Form, Link } from '~components'
export default function PromoSection(){
return(
<Promo backgroundColor="#262729">
  <Container>
    <Row className="justify-content-center mx-lg-7">
      <Col xs="12" className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 text-center">
          <Promo.Box mb="35px">
            <Promo.Content backgroundColor="#5034fc" className="promo--box-1">
            <Promo.SectionContent>
              <Promo.Subtitle as="h6" mb="10px" mbLG="17px" fontColor="rgba(255, 255, 255, 0.7)">Get notified about trending projects</Promo.Subtitle>
              <Promo.Title as="h2" fontColor="#fff" mb="10px" mbLG="25px">Subscribe Now</Promo.Title>
            </Promo.SectionContent>
            {/* Newsletter */}
            <Promo.Newsletter>
              <Form>
                <Promo.InputBox>
                  <Form.Input placeholder="Enter your email" required />
                  <Promo.Button className="btn-white me-1" ><i className="fa fa-long-arrow-alt-right text-electric-violet-2" /></Promo.Button>
                </Promo.InputBox>
              </Form>
            </Promo.Newsletter>
            {/*/ .Newsletter */}
            </Promo.Content>
          </Promo.Box>
      </Col>
      <Col xs="12" className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 text-center">
        <Promo.Box>
          <Promo.Content className="promo--box-2" backgroundColor="#ffd700">
          <Promo.SectionContent>
              <Promo.Subtitle as="h6" mb="10px" mbLG="17px" fontColor="#262729">Interested in our service?</Promo.Subtitle>
              <Promo.Title as="h2" mb="10px" mbLG="25px">
                Start a new project</Promo.Title>
              <Promo.ButtonTwo as={Link}  to="/">Start Now</Promo.ButtonTwo>
          </Promo.SectionContent>
          </Promo.Content>
        </Promo.Box>
      </Col>
    </Row>
  </Container>
</Promo>

)
}